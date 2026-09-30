# ColchonesMedicol
Colchones MEDICOL — tienda web estática.

## Páginas
- `index.html` — inicio
- `tienda.html` — tienda con filtros (`?cat=mascotas|colchones|cojines|promociones`, `?q=búsqueda`)
- `producto.html?id=...` — ficha de producto
- `carrito.html` y `checkout.html` — compra; el pedido se confirma por WhatsApp
- `catalogo.html` — catálogo imprimible (botón "Descargar PDF")
- `nosotros.html`, `contacto.html`

## Editar productos, precios y fotos
Todo está en `js/productos.js`. Un producto con `precio: null` muestra "Precio a consultar" y un botón de cotizar por WhatsApp.
El número de WhatsApp también se cambia ahí (`whatsapp`).

## Estilos
- `style.css`: plantilla original (Swanky, de TemplatesJungle).
- `css/medicol.css`: capa de la tienda sobre la plantilla.

## Avisos de pedido (correo + WhatsApp)
`functions/api/pedido.js` corre en Cloudflare Pages: al confirmar un pedido envía un correo al negocio
(Resend) y un aviso de WhatsApp al dueño (CallMeBot). Se configura con variables de entorno.

## Publicar
Ver [docs/DESPLIEGUE.md](docs/DESPLIEGUE.md).
