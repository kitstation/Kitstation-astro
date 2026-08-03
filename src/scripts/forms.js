const SUCCESS_MESSAGE = "Tu mensaje fue enviado correctamente. Te responderemos pronto.";
const ERROR_MESSAGE =
  "No se pudo enviar el formulario. Intentalo nuevamente o escribenos por WhatsApp.";
const RECAPTCHA_SITE_KEY = "6LeOxWotAAAAAMu4G5IjcT3_inO9D1eq3o1Fkc1Y";
const RECAPTCHA_ACTION = "mail_form";

function setOrigin(form) {
  form.querySelectorAll('input[name="pagina_origen"], input[name="página_origen"]').forEach((origin) => {
    origin.value = window.location.href;
  });
}

function setFeedback(feedback, state, message) {
  if (!feedback) return;
  feedback.dataset.state = state;
  feedback.textContent = message;
}

function setButtonState(button, sending) {
  if (!button) return;

  if (sending) {
    button.dataset.originalText = button.textContent;
    button.textContent = "Enviando...";
    button.disabled = true;
    return;
  }

  button.textContent = button.dataset.originalText || button.textContent;
  button.disabled = false;
}

function getRecaptchaApi() {
  return window.grecaptcha?.enterprise || window.grecaptcha;
}

function waitForRecaptcha() {
  const recaptcha = getRecaptchaApi();
  if (!recaptcha?.ready) {
    return Promise.reject(new Error("reCAPTCHA no esta disponible."));
  }

  return new Promise((resolve) => {
    recaptcha.ready(() => resolve(recaptcha));
  });
}

async function getRecaptchaToken() {
  const recaptcha = await waitForRecaptcha();
  return recaptcha.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION });
}

function initMailForms() {
  if (!window.fetch) return;

  document.querySelectorAll("form[data-mail-form]").forEach((form) => {
    if (form.dataset.mailReady === "true") return;
    form.dataset.mailReady = "true";
    setOrigin(form);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const feedback = form.querySelector(".form-feedback");
      const button = form.querySelector('button[type="submit"], input[type="submit"]');
      setOrigin(form);
      setFeedback(feedback, "", "");
      setButtonState(button, true);

      try {
        const formData = new FormData(form);
        formData.set("recaptcha_token", await getRecaptchaToken());
        formData.set("recaptcha_action", RECAPTCHA_ACTION);

        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });
        const result = await response.json().catch(() => ({ success: false }));

        if (!response.ok || result.success !== true) {
          throw new Error(result.message || ERROR_MESSAGE);
        }

        form.reset();
        setOrigin(form);
        setFeedback(feedback, "success", SUCCESS_MESSAGE);
        form.dispatchEvent(new CustomEvent("mail-form:success"));
      } catch (error) {
        setFeedback(feedback, "error", error?.message || ERROR_MESSAGE);
      } finally {
        setButtonState(button, false);
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMailForms);
} else {
  initMailForms();
}
