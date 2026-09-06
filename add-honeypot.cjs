const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');

try {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro') && f !== 'contacto.astro' && f !== 'Layout.astro');
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    if (content.includes('id="contact-form"') && !content.includes('id="bot-field"')) {
      content = content.replace(
        '<form id="contact-form" class="space-y-4" action="#" method="POST" novalidate>',
        '<form id="contact-form" class="space-y-4" action="#" method="POST" novalidate>\n          <!-- Honeypot anti-spam field -->\n          <div class="hidden" aria-hidden="true">\n            <label for="bot-field">No llenes este campo si eres humano:</label>\n            <input type="text" id="bot-field" name="bot-field" tabindex="-1" />\n          </div>'
      );
      changed = true;
    }
    
    if (content.includes('let isValid = true;') && content.includes('form.addEventListener(\'submit\'')) {
      if (!content.includes('Honeypot check')) {
        content = content.replace(
          'let isValid = true;',
          '// Honeypot check\n      const botField = document.getElementById(\'bot-field\') as HTMLInputElement;\n      if (botField && botField.value) {\n        console.warn(\'Bot detectado.\');\n        return;\n      }\n      \n      let isValid = true;'
        );
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', file);
    }
  }
} catch(e) {
  console.error(e);
}
