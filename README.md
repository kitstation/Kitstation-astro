# Kitstation

## Formularios

Los formularios envían los datos a `POST /api/enviar-formulario`. El endpoint entrega un correo interno a `MAIL_TO` y una respuesta automática al correo del usuario.

Configura estas variables de entorno en local o en Vercel (Production, y Preview si quieres probar previews):

```env
SMTP_HOST=smtp.tuservidor.com
SMTP_PORT=587
SMTP_USER=usuario_smtp
SMTP_PASS=contrasena_smtp
MAIL_FROM=web@tudominio.com
MAIL_TO=contacto@tudominio.com
```

Después de guardarlas, redeploya el proyecto y prueba un formulario con un correo real. No publiques el archivo `.env` ni las credenciales en Git.
