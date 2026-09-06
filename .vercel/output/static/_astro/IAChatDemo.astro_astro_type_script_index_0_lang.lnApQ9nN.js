const f=()=>{const c=document.getElementById("ia-chat-form"),s=document.getElementById("ia-chat-input"),a=document.getElementById("ia-chat-messages"),i=document.getElementById("ia-chat-mic"),n=document.getElementById("ia-chat-suggestions"),h=document.querySelectorAll(".ia-chat-chip");if(!c||!s||!a)return;const u={"hola!":"¡Hola! ¿Cuál es el mayor desafío que tienes actualmente en tus ventas?","¿cómo funciona esta ia?":"Nuestra IA analiza el comportamiento de tus clientes y responde a sus consultas automáticamente las 24 horas del día, calificando y capturando sus datos antes de transferirlos a tu equipo.","quiero agendar una llamada":"¡Excelente iniciativa! Un especialista de KitStation te mostrará una demo completa. Al finalizar este chat, podrás usar el botón debajo para agendar la videollamada."},m=()=>{const e=document.getElementById("ia-chat-mic");!e||!s||(s.value.trim()!==""?(e.classList.add("opacity-0","scale-90","pointer-events-none"),s.classList.remove("pr-24"),s.classList.add("pr-16")):(e.classList.remove("opacity-0","scale-90","pointer-events-none"),s.classList.remove("pr-16"),s.classList.add("pr-24")))},g=e=>{const t=document.createElement("div");return t.className="flex items-start gap-2.5 self-end chat-msg-enter-user w-full justify-end",t.innerHTML=`
        <div class="bg-[#0099ff] text-white rounded-[1.25rem] py-3 px-4 flex items-start gap-3 max-w-[85%] md:max-w-[60%] shadow-sm ml-auto">
          <div class="w-6 h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center text-[#0099ff] mt-0.5">
            <i class="bi bi-person-fill text-xs"></i>
          </div>
          <p class="text-[15px] font-normal leading-relaxed break-words min-w-0">${e}</p>
        </div>
      `,t},x=()=>{const e=document.createElement("div");return e.className="flex items-start gap-2.5 self-end chat-msg-enter-user w-full justify-end",e.innerHTML=`
        <div class="bg-[#0099ff] text-white rounded-[1.25rem] py-3 px-4 flex items-center gap-3 max-w-[85%] md:max-w-[60%] shadow-sm ml-auto">
          <div class="w-6 h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center text-[#0099ff]">
            <i class="bi bi-person-fill text-xs"></i>
          </div>
          <div class="flex items-center gap-2.5">
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
      `,e},w=()=>{const e=document.createElement("div");return e.id="typing-indicator",e.className="flex items-start gap-2.5 self-start chat-msg-enter-bot",e.innerHTML=`
        <div class="bg-[#0055ff] text-white rounded-[1.25rem] py-3 px-5 flex items-center justify-center gap-1.5 h-10 shadow-sm">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `,e},y=e=>{const t=document.createElement("div");return t.className="flex items-start gap-2.5 self-start chat-msg-enter-bot",t.innerHTML=`
        <div class="bg-[#0055ff] text-white rounded-[1.25rem] py-3 px-4 flex items-start gap-3 max-w-[85%] md:max-w-[60%] shadow-sm">
          <div class="w-6 h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center mt-0.5 p-0.5">
            <img src="/images/projects/ia/icono-ia.svg" alt="AgenteKIT" class="w-4 h-4 object-contain" />
          </div>
          <p class="text-[15px] font-normal leading-relaxed break-words min-w-0">${e}</p>
        </div>
      `,t},v=()=>{n&&n.style.display!=="none"&&(n.style.transition="opacity 0.3s ease",n.style.opacity="0",setTimeout(()=>{n.style.display="none"},300))},d=(e,t=!1)=>{v(),t?a.appendChild(x()):a.appendChild(g(e)),s.value="",s.style.height="56px",m(),a.scrollTop=a.scrollHeight,setTimeout(()=>{const l=w();a.appendChild(l),a.scrollTop=a.scrollHeight,setTimeout(()=>{l.remove();let o="¡Excelente consulta! Un especialista de KitStation se pondrá en contacto contigo muy pronto. Nuestro equipo puede desarrollar una IA a medida que maneje esas interacciones por ti.";if(t)o="¡Gracias por el audio! Acabo de notificar a un agente humano para que escuche tu mensaje y te responda a la brevedad. ¿Hay algo más en lo que te pueda ayudar por ahora?";else{const r=e.toLowerCase().trim();u[r]?o=u[r]:(r.includes("tardan")||r.includes("clientes"))&&(o="Entiendo perfectamente. Ese es el problema más común. LinkStation instalaría un Agente Inteligente conectado a tu base de datos que respondería inmediatamente a esos clientes 24/7, garantizando que nunca pierdas una venta por tiempo de espera.")}a.appendChild(y(o)),a.scrollTop=a.scrollHeight},1800)},500)},p=e=>{e.preventDefault();const t=s.value.trim();t&&d(t)};if(s&&(s.addEventListener("input",()=>{m(),s.style.height="auto",s.style.height=Math.min(s.scrollHeight,120)+"px"}),s.addEventListener("keydown",e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),p(e))})),i){const e=i.cloneNode(!0);i.parentNode?.replaceChild(e,i),e.addEventListener("click",()=>{d("",!0)})}h.forEach(e=>{const t=e.cloneNode(!0);e.parentNode?.replaceChild(t,e),t.addEventListener("click",()=>{const l=t.textContent?.trim()||"";d(l)})}),c.removeEventListener("submit",p),c.addEventListener("submit",p)};f();document.addEventListener("astro:page-load",f);
