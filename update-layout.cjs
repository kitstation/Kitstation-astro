const fs = require('fs');
const files = [
  'src/pages/diseno-desarrollo-web.astro',
  'src/pages/automatizaciones-con-ia.astro',
  'src/pages/desarrollo-de-software.astro',
  'src/pages/estrategias-y-campanas-digitales.astro',
  'src/pages/identidad-de-marca-y-contenido-audiovisual.astro'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update Form section
  content = content.replace(
    '<section class="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-16">',
    '<section class="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-16 order-2 lg:order-1">'
  );
  
  // Update Video section
  content = content.replace(
    '<section class="hidden lg:flex w-full lg:w-1/2 bg-[#1a0b2e] items-center justify-center relative overflow-hidden">',
    '<section class="flex w-full lg:w-1/2 bg-[#1a0b2e] items-center justify-center relative overflow-hidden order-1 lg:order-2 min-h-[250px] md:min-h-[350px] lg:min-h-0">'
  );

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
