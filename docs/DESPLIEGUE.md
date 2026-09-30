# Publicar la web de Colchones Medicol

Costo total aproximado: **solo el dominio** (≈ USD 10–11 al año un `.com`). Todo lo demás es gratis.

| Pieza | Servicio | Costo |
|---|---|---|
| Hosting de la web + función de pedidos | Cloudflare Pages | Gratis (uso comercial permitido) |
| Correo de cada pedido | Resend | Gratis hasta 100 correos/día y 3.000/mes |
| Aviso de WhatsApp al dueño | CallMeBot | Gratis |
| Dominio | Cloudflare Registrar (u otro) | ≈ USD 10–11/año (.com) |

> Vercel gratis (plan Hobby) **no sirve** para esta web: solo permite uso personal y no comercial.

---

## 1. Repositorio privado en GitHub

1. En GitHub abre el repositorio → **Settings** → abajo, **Danger Zone** → **Change visibility** → **Private**.
2. Sube los cambios (`git add`, `git commit`, `git push`).

Cloudflare puede leer repositorios privados; solo le das permiso en el paso 2.

## 2. Publicar en Cloudflare Pages

1. Crea una cuenta en https://dash.cloudflare.com (gratis).
2. **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**.
3. Autoriza GitHub y elige solo este repositorio.
4. Configuración de compilación:
   - **Framework preset:** None
   - **Build command:** (vacío)
   - **Build output directory:** `/`
5. **Save and Deploy**. En un minuto tendrás una dirección tipo `colchonesmedicol.pages.dev`.

Cada vez que hagas `git push`, la web se actualiza sola. La carpeta `functions/` se convierte automáticamente en la dirección `/api/pedido`.

## 3. Dominio propio

- Lo más simple: compra el dominio en **Cloudflare → Domain Registration** (precio de costo, sin recargos).
- En el proyecto de Pages → **Custom domains** → **Set up a custom domain** → escribe `colchonesmedicol.com` (y también `www.colchonesmedicol.com`).
- Si compras el dominio en otro lado, Cloudflare te indica qué registros DNS copiar.

## 4. Correo de pedidos (Resend)

1. Crea una cuenta en https://resend.com.
2. **Domains** → **Add Domain** → `colchonesmedicol.com`. Resend te muestra unos registros DNS: si el dominio está en Cloudflare, pulsa el botón para agregarlos automáticamente o cópialos en **Cloudflare → DNS**. Espera a que diga **Verified**.
3. **API Keys** → **Create API Key** (permiso *Sending access*). Cópiala.

## 5. Aviso por WhatsApp al dueño (CallMeBot)

Hay que hacerlo **desde el celular del dueño** (una sola vez):

1. Abre https://www.callmebot.com/blog/free-api-whatsapp-messages/ en el celular.
2. Guarda el número del bot que aparece en esa página y envíale por WhatsApp el mensaje que indica (por ejemplo, *I allow callmebot to send me messages*).
3. El bot responde con una **apikey** (un número). Anótala.

Puedes repetirlo en tu propio celular para que te lleguen también los avisos.

> CallMeBot es un servicio gratuito no oficial. Si algún día falla, el pedido igual llega por correo y por el WhatsApp del cliente.

## 6. Variables en Cloudflare

Proyecto de Pages → **Settings** → **Variables and Secrets** → **Add** (entorno *Production*):

| Nombre | Valor de ejemplo | Tipo |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxx` | Secret |
| `EMAIL_FROM` | `Colchones Medicol <pedidos@colchonesmedicol.com>` | Text |
| `EMAIL_TO` | `medicolscc@hotmail.com` (varios, separados por coma) | Text |
| `WHATSAPP_AVISOS` | `593998804606:1234567` (número:apikey; varios, separados por coma) | Secret |
| `CONFIRMAR_CLIENTE` | `no` solo si NO quieres enviar confirmación por correo al cliente | Text (opcional) |

Después de agregarlas: **Deployments** → en el último despliegue, **⋯ → Retry deployment** para que las tome.

## 7. Probar

1. Entra a la web publicada, añade un producto al carrito y haz un pedido de prueba con tu número.
2. Debe abrirse WhatsApp con el pedido, llegar el correo a `EMAIL_TO` y el aviso de WhatsApp al dueño.

## Qué recibe el dueño en cada pedido

- **WhatsApp del cliente** con el pedido completo (como siempre).
- **Correo** con: qué despachar, dónde entregar (con la referencia), datos del cliente, forma de pago y botones para *Confirmar por WhatsApp*, *Avisar que va en camino* y *Llamar al cliente*.
- **WhatsApp de aviso** con el mismo resumen y dos enlaces: uno para confirmar el pedido al cliente y otro para avisarle que va en camino. Al tocarlos se abre el chat con el cliente y el mensaje ya escrito; solo hay que pulsar *Enviar*.
