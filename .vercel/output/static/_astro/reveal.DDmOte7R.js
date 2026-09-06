const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const queueWrite = (callback) => {
  window.requestAnimationFrame(callback);
};

const queueIdle = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 500 });
    return;
  }

  window.setTimeout(callback, 1);
};

const revealElements = [...document.querySelectorAll("[data-reveal]")];

const initReveal = () => {
  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const delay = Number(element.getAttribute("data-delay") || 0);

        window.setTimeout(() => {
          queueWrite(() => {
            element.classList.add("is-visible");
          });
        }, delay);

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
};

const measureTrackSpan = (track, fallbackRatio = 0.82, fallbackMax = 420) => {
  const firstCard = track.firstElementChild;

  if (!(firstCard instanceof HTMLElement)) {
    return Math.min(track.clientWidth * fallbackRatio, fallbackMax);
  }

  const cardWidth = firstCard.getBoundingClientRect().width;
  const trackStyles = window.getComputedStyle(track);
  const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0");

  return cardWidth + gap;
};

const createSpanStore = (track, options = {}) => {
  const { fallbackRatio = 0.82, fallbackMax = 420 } = options;
  let span = measureTrackSpan(track, fallbackRatio, fallbackMax);
  let frame = 0;

  const refresh = () => {
    span = measureTrackSpan(track, fallbackRatio, fallbackMax);
    return span;
  };

  const scheduleRefresh = () => {
    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      frame = 0;
      refresh();
    });
  };

  let resizeObserver = null;
  let fallbackResizeHandler = null;

  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => {
      scheduleRefresh();
    });
    resizeObserver.observe(track);
  } else {
    fallbackResizeHandler = () => {
      scheduleRefresh();
    };
    window.addEventListener("resize", fallbackResizeHandler, { passive: true });
  }

  return {
    get: () => span,
    refresh,
    scheduleRefresh,
    disconnect: () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      resizeObserver?.disconnect();

      if (fallbackResizeHandler) {
        window.removeEventListener("resize", fallbackResizeHandler);
      }
    }
  };
};

const attachCarouselControls = () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");

    if (!track || !previous || !next) return;

    const loopCount = Number.parseInt(carousel.getAttribute("data-carousel-loop") || "0", 10);
    const spanStore = createSpanStore(track);

    if (loopCount > 0) {
      let isAnimating = false;
      const durationMs = 360;

      const resetScroll = (position) => {
        track.scrollTo({ left: position, behavior: "auto" });
      };

      queueWrite(() => {
        resetScroll(0);
      });

      next.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;
        const span = spanStore.refresh();

        queueWrite(() => {
          track.scrollBy({ left: span, behavior: "smooth" });
        });

        window.setTimeout(() => {
          queueWrite(() => {
            const firstCard = track.firstElementChild;

            if (firstCard) {
              track.appendChild(firstCard);
            }

            resetScroll(0);
            spanStore.scheduleRefresh();
            isAnimating = false;
          });
        }, durationMs);
      });

      previous.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;
        const span = spanStore.refresh();

        queueWrite(() => {
          const lastCard = track.lastElementChild;

          if (lastCard) {
            track.insertBefore(lastCard, track.firstChild);
          }

          resetScroll(span);
          track.scrollBy({ left: -span, behavior: "smooth" });
        });

        window.setTimeout(() => {
          queueWrite(() => {
            resetScroll(0);
            spanStore.scheduleRefresh();
            isAnimating = false;
          });
        }, durationMs);
      });

      return;
    }

    previous.addEventListener("click", () => {
      const step = spanStore.refresh();
      queueWrite(() => {
        track.scrollBy({ left: -step, behavior: "smooth" });
      });
    });

    next.addEventListener("click", () => {
      const step = spanStore.refresh();
      queueWrite(() => {
        track.scrollBy({ left: step, behavior: "smooth" });
      });
    });
  });
};

const closeMobileMenuOnNavigate = () => {
  const menu = document.querySelector(".mobile-nav");
  if (!(menu instanceof HTMLDetailsElement)) return;

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.removeAttribute("open");
    });
  });
};

const attachTopicSlider = () => {
  const slider = document.querySelector("[data-topic-slider]");
  if (!(slider instanceof HTMLElement)) return;

  const track = slider.querySelector("[data-topic-track]");
  const previous = slider.querySelector("[data-topic-prev]");
  const next = slider.querySelector("[data-topic-next]");
  const items = [...slider.querySelectorAll("[data-topic-item]")];
  const bullets = [...slider.querySelectorAll("[data-topic-bullet]")];
  const panelsRoot = slider.parentElement;
  const panels = panelsRoot ? [...panelsRoot.querySelectorAll("[data-topic-panel]")] : [];
  const showcase = panelsRoot ? panelsRoot.querySelector(".solutions-showcase") : null;

  if (
    !(track instanceof HTMLElement) ||
    !(previous instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    items.length === 0
  ) {
    return;
  }

  let activeIndex = -1;
  let isAnimating = false;
  const durationMs = 360;
  const spanStore = createSpanStore(track, { fallbackRatio: 1, fallbackMax: 0 });

  const syncActiveState = () => {
    const domItems = [...slider.querySelectorAll("[data-topic-item]")];

    domItems.forEach((item) => {
      const index = Number.parseInt(item.getAttribute("data-topic-index") || "-1", 10);
      const isActive = activeIndex >= 0 && index === activeIndex;

      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    bullets.forEach((bullet) => {
      const index = Number.parseInt(bullet.getAttribute("data-topic-index") || "-1", 10);
      const isActive = activeIndex >= 0 && index === activeIndex;

      bullet.classList.toggle("is-active", isActive);
      bullet.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const index = Number.parseInt(panel.getAttribute("data-topic-index") || "-1", 10);
      panel.classList.toggle("is-active", activeIndex >= 0 && index === activeIndex);
    });

    if (showcase instanceof HTMLElement) {
      showcase.classList.toggle("has-active", activeIndex >= 0);
    }
  };

  const jumpToStart = (position = 0) => {
    track.scrollTo({ left: position, behavior: "auto" });
  };

  const rotateNext = () => {
    if (isAnimating) return;

    isAnimating = true;
    const span = spanStore.refresh();

    queueWrite(() => {
      track.scrollBy({ left: span, behavior: "smooth" });
    });

    window.setTimeout(() => {
      queueWrite(() => {
        const first = track.firstElementChild;

        if (first) {
          track.appendChild(first);
        }

        jumpToStart(0);
        spanStore.scheduleRefresh();
        isAnimating = false;
      });
    }, durationMs);
  };

  const rotatePrevious = () => {
    if (isAnimating) return;

    isAnimating = true;
    const span = spanStore.refresh();

    queueWrite(() => {
      const last = track.lastElementChild;

      if (last) {
        track.insertBefore(last, track.firstChild);
      }

      jumpToStart(span);
      track.scrollBy({ left: -span, behavior: "smooth" });
    });

    window.setTimeout(() => {
      queueWrite(() => {
        jumpToStart(0);
        spanStore.scheduleRefresh();
        isAnimating = false;
      });
    }, durationMs);
  };

  previous.addEventListener("click", rotatePrevious);
  next.addEventListener("click", rotateNext);

  items.forEach((item) => {
    item.addEventListener("click", () => {
      activeIndex = Number.parseInt(item.getAttribute("data-topic-index") || "0", 10);
      syncActiveState();
    });
  });

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      const targetIndex = Number.parseInt(bullet.getAttribute("data-topic-index") || "0", 10);
      const currentDomItems = [...slider.querySelectorAll("[data-topic-item]")];
      const currentFirst = Number.parseInt(currentDomItems[0]?.getAttribute("data-topic-index") || "0", 10);
      const forwardSteps = (targetIndex - currentFirst + items.length) % items.length;
      const backwardSteps = (currentFirst - targetIndex + items.length) % items.length;
      const direction = forwardSteps <= backwardSteps ? "next" : "prev";
      const steps = direction === "next" ? forwardSteps : backwardSteps;

      if (steps === 0) {
        return;
      }

      let completed = 0;
      const advance = () => {
        if (completed >= steps) return;

        completed += 1;
        if (direction === "next") {
          rotateNext();
        } else {
          rotatePrevious();
        }

        if (completed < steps) {
          window.setTimeout(advance, durationMs + 30);
        }
      };

      advance();
    });
  });

  syncActiveState();
};

queueIdle(() => {
  initReveal();
  attachCarouselControls();
  closeMobileMenuOnNavigate();
  attachTopicSlider();
});
