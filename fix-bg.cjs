const fs = require('fs');

const files = [
  { path: 'src/pages/diseno-desarrollo-web.astro', oldBg: 'bg-purple-500', newBg: 'bg-[#1a0b2e]' },
  { path: 'src/pages/automatizaciones-con-ia.astro', oldBg: 'bg-[#2e8ffc]', newBg: 'bg-[#0a1526]' },
  { path: 'src/pages/estrategias-y-campanas-digitales.astro', oldBg: 'bg-[#5fd3b0]', newBg: 'bg-[#091a15]' },
  { path: 'src/pages/desarrollo-de-software.astro', oldBg: 'bg-[#0b709b]', newBg: 'bg-[#041118]' },
  { path: 'src/pages/identidad-de-marca-y-contenido-audiovisual.astro', oldBg: 'bg-[#fd8b57]', newBg: 'bg-[#1f100a]' }
];

files.forEach(f => {
  if (fs.existsSync(f.path)) {
    let content = fs.readFileSync(f.path, 'utf8');
    
    // We are looking for: class="hidden lg:flex w-full lg:w-1/2 [OLD_BG] items-center justify-center relative overflow-hidden"
    const target = `class="hidden lg:flex w-full lg:w-1/2 ${f.oldBg} items-center justify-center relative overflow-hidden"`;
    const replacement = `class="hidden lg:flex w-full lg:w-1/2 ${f.newBg} items-center justify-center relative overflow-hidden"`;
    
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(f.path, content);
      console.log('Updated background in ' + f.path);
    } else {
      console.log('Target not found in ' + f.path);
    }
  }
});
