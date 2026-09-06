const L=()=>{const r=document.getElementById("dw-bot-body"),p=document.getElementById("dw-bot-suggestions"),m=document.querySelectorAll(".dw-bot-chip"),a=document.getElementById("dw-bot-input"),g=document.getElementById("dw-bot-submit"),u=document.getElementById("dw-bot-mic");if(!r)return;const y={"hola!":"¡Hola! Qué gusto saludarte. ¿En qué te puedo asesorar sobre tu nueva página web hoy?",hola:"¡Hola! Qué gusto saludarte. ¿En qué te puedo asesorar sobre tu nueva página web hoy?","¿cómo funciona este chat?":"Este chat utiliza Inteligencia Artificial avanzada para responder las preguntas de tus clientes de manera autónoma las 24 horas del día.","como funciona este chat":"Este chat utiliza Inteligencia Artificial avanzada para responder las preguntas de tus clientes de manera autónoma las 24 horas del día.","¿qué es agentekit?":"AgenteKit es nuestra solución premium de asistentes virtuales inteligentes, diseñados para captar leads y dar soporte técnico sin intervención humana.","que es agentekit":"AgenteKit es nuestra solución premium de asistentes virtuales inteligentes, diseñados para captar leads y dar soporte técnico sin intervención humana."},v=()=>{const t=document.getElementById("dw-bot-mic");!t||!a||(a.value.trim()!==""?(t.classList.add("opacity-0","scale-90","pointer-events-none"),a.classList.remove("pr-20","md:pr-24"),a.classList.add("pr-12","md:pr-14")):(t.classList.remove("opacity-0","scale-90","pointer-events-none"),a.classList.remove("pr-12","md:pr-14"),a.classList.add("pr-20","md:pr-24")))};a&&a.addEventListener("input",()=>{v(),a.style.height="auto",a.style.height=Math.min(Math.max(a.scrollHeight,42),120)+"px"});const e=t=>{const s=document.createElement("div");return s.className="flex items-start gap-2.5 self-end chat-msg-enter-user w-full justify-end",s.innerHTML=`
        <div class="bg-[#0099ff] text-white rounded-[1.25rem] py-2 px-3.5 flex items-center gap-2 max-w-[85%] md:max-w-[70%] w-fit shadow-sm ml-auto">
          <p class="text-xs md:text-sm font-normal leading-relaxed break-words min-w-0 text-left" style="text-align: left;">${t}</p>
          <div class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center text-[#0099ff] mt-0.5">
            <i class="bi bi-person-fill text-[11px] md:text-xs"></i>
          </div>
        </div>
      `,s},n=()=>{const t=document.createElement("div");return t.className="flex items-start gap-2.5 self-end chat-msg-enter-user w-full justify-end",t.innerHTML=`
        <div class="bg-[#0099ff] text-white rounded-[1.25rem] py-2 px-3.5 flex items-center gap-2 max-w-[85%] md:max-w-[70%] w-fit shadow-sm ml-auto">
          <div class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center text-[#0099ff]">
            <i class="bi bi-person-fill text-[11px] md:text-xs"></i>
          </div>
          <div class="flex items-center gap-2">
            <button class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <i class="bi bi-play-fill text-xs text-white"></i>
            </button>
            <div class="flex items-end gap-[2px] h-3.5 px-1">
              <span class="w-[2px] h-1.5 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-3.5 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-2 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-3 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-1.5 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-2.5 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-3 bg-white/80 rounded-full"></span>
              <span class="w-[2px] h-1.5 bg-white/80 rounded-full"></span>
            </div>
            <span class="text-xs font-medium text-white/90">0:04</span>
          </div>
        </div>
      `,t},o=()=>{const t=document.createElement("div");return t.id="dw-bot-typing-indicator",t.className="flex items-start gap-2.5 self-start chat-msg-enter-bot",t.innerHTML=`
        <div class="bg-[#0055ff] text-white rounded-[1.25rem] py-2 px-3.5 flex items-center justify-center gap-1.5 h-8 w-fit shadow-sm">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `,t},c=t=>{const s=document.createElement("div");return s.className="flex items-start gap-2.5 self-start chat-msg-enter-bot",s.innerHTML=`
        <div class="bg-[#0055ff] text-white rounded-[1.25rem] py-2 px-3.5 flex items-start gap-2.5 max-w-[85%] md:max-w-[70%] w-fit shadow-sm">
          <div class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center mt-0.5 p-0.5">
            <img src="/images/projects/ia/icono-ia.svg" alt="AgenteKIT" class="w-3.5 h-3.5 md:w-4 md:h-4 object-contain" />
          </div>
          <p class="text-xs md:text-sm font-normal leading-relaxed break-words min-w-0 text-left" style="text-align: left;">${t}</p>
        </div>
      `,s},i=()=>{r.scrollTo({top:r.scrollHeight,behavior:"smooth"})},x=()=>{p&&p.style.display!=="none"&&(p.style.transition="opacity 0.3s ease",p.style.opacity="0",setTimeout(()=>{p.style.display="none"},300))},l=(t,s=!1)=>{x(),s?r.appendChild(n()):r.appendChild(e(t)),a&&(a.value="",a.style.height="42px",v()),i(),setTimeout(()=>{const d=o();r.appendChild(d),i(),setTimeout(()=>{d.remove();let f="¡Excelente consulta! AgenteKit puede automatizar las respuestas de tus clientes 24/7 y derivar a tu equipo únicamente a los prospectos calificados.";if(s)f="¡Gracias por el audio! Nuestro AgenteKit procesa notas de voz y responde instantáneamente a tus clientes.";else{const h=t.toLowerCase().trim();y[h]?f=y[h]:(h.includes("precio")||h.includes("costo")||h.includes("cotizar"))&&(f="Los proyectos web se adaptan a las necesidades de tu negocio. Haz clic en 'Hablar con un experto' para darte una cotización exacta.")}r.appendChild(c(f)),i()},1e3)},400)};if(m.forEach(t=>{const s=t.cloneNode(!0);t.parentNode?.replaceChild(s,t),s.addEventListener("click",()=>{const d=s.textContent?.trim()||"";l(d)})}),u){const t=u.cloneNode(!0);u.parentNode?.replaceChild(t,u),t.addEventListener("click",()=>{l("",!0)})}if(g&&a){const t=()=>{const s=a.value.trim();s&&l(s)};g.addEventListener("click",t),a.addEventListener("keydown",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),t())})}},C=()=>{const r=document.getElementById("diseno-web-bot-section");if(!r)return;const p=r.querySelectorAll(".interactive-orb");if(p.length===0)return;let m=Array.from(p).map(e=>{const n=e.getBoundingClientRect();return{element:e,cx:(n.left+n.right)/2,cy:(n.top+n.bottom)/2,x:(n.left+n.right)/2,y:(n.top+n.bottom)/2,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,radius:n.width*.9}}),a=-1e3,g=-1e3,u=!1;const y=()=>{m.forEach(e=>{const n=e.element.style.transform;e.element.style.transform="none";const o=e.element.getBoundingClientRect();e.element.style.transform=n;const c=(o.left+o.right)/2,i=(o.top+o.bottom)/2;e.x+=c-e.cx,e.y+=i-e.cy,e.cx=c,e.cy=i,e.radius=o.width*.9})};window.addEventListener("resize",y),r.addEventListener("mousemove",e=>{a=e.clientX,g=e.clientY,u=!0}),r.addEventListener("mouseleave",()=>{u=!1});const v=()=>{if(m.forEach(e=>{const n=e.cx-e.x,o=e.cy-e.y;if(e.vx+=n*8e-5,e.vy+=o*8e-5,u){const x=e.x-a,l=e.y-g,t=Math.sqrt(x*x+l*l),s=600;if(t<s&&t>0){const d=Math.pow((s-t)/s,2);e.vx+=x/t*d*1.5,e.vy+=l/t*d*1.5}}e.vx+=(Math.random()-.5)*.35,e.vy+=(Math.random()-.5)*.35,e.vx*=.98,e.vy*=.98;const c=Math.sqrt(e.vx*e.vx+e.vy*e.vy),i=4;c>i&&(e.vx=e.vx/c*i,e.vy=e.vy/c*i),e.x+=e.vx,e.y+=e.vy}),m.length>=2){const e=m[0],n=m[1],o=n.x-e.x,c=n.y-e.y,i=Math.sqrt(o*o+c*c),x=e.radius+n.radius;if(i<x&&i>0){const l=x-i,t=o/i,s=c/i,d=t*(l/2),f=s*(l/2);e.x-=d,e.y-=f,n.x+=d,n.y+=f;const h=n.vx-e.vx,T=n.vy-e.vy,w=h*t+T*s;if(w<0){const b=-1.5*w,E=t*b*.5,M=s*b*.5;e.vx-=E,e.vy-=M,n.vx+=E,n.vy+=M}}}m.forEach(e=>{const n=e.x-e.cx,o=e.y-e.cy;e.element.style.transform=`translate3d(${n.toFixed(2)}px, ${o.toFixed(2)}px, 0)`}),requestAnimationFrame(v)};setTimeout(y,100),requestAnimationFrame(v)};L();C();document.addEventListener("astro:page-load",()=>{L(),C()});
