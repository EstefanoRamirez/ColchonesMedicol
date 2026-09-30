/*
  Catálogo de Colchones Medicol.
  Para cambiar un precio, un texto o una foto, edita solo este archivo:
  la tienda, las fichas, el carrito, el catálogo imprimible y los avisos de pedido se actualizan solos.

  Importante: entre las llaves { } usa el formato JSON (claves y textos entre comillas dobles,
  sin coma después del último elemento). El servidor lee este mismo archivo para calcular
  el total de cada pedido.

  "precio": número en dólares, o null si el precio se consulta por WhatsApp.
  "opciones": medidas o modelos que el cliente elige en la ficha del producto.
  "promo": "segundo-mitad" aplica el 2do producto a mitad de precio en el carrito.
*/
window.MEDICOL = {
  "whatsapp": "593998804606",
  "whatsappVisible": "099 880 4606",
  "telefono": "+593997272879",
  "telefonoVisible": "099 727 2879",
  "email": "medicolscc@hotmail.com",
  "ciudad": "Quito, Ecuador",

  "categorias": {
    "mascotas": "Mascotas",
    "colchones": "Colchones hospitalarios",
    "cojines": "Cojines terapéuticos",
    "promociones": "Promociones"
  },

  "productos": [
    {
      "id": "colchon-mascota",
      "nombre": "Colchón para mascota",
      "categoria": "mascotas",
      "precio": 39,
      "promo": "segundo-mitad",
      "etiqueta": "2do a mitad de precio",
      "destacado": true,
      "resumen": "Colchón acolchado para que tu perro descanse cómodo, en su propio espacio y lejos del piso frío.",
      "opciones": {
        "titulo": "Talla",
        "valores": ["M · 66 × 100 × 8 cm"]
      },
      "caracteristicas": [
        "Talla M: 66 × 100 cm y 8 cm de espesor.",
        "Tamaño ideal para perros medianos.",
        "Funda afelpada, suave al tacto.",
        "Lo separa del piso frío y duro.",
        "Promoción: el 2do colchón a mitad de precio."
      ],
      "imagenes": ["images/productos/colchon-mascota.jpg", "images/fichas/colchon-mascota.jpg"]
    },
    {
      "id": "colchon-articulado",
      "nombre": "Colchón ortopédico antiescaras articulado",
      "categoria": "colchones",
      "precio": 147,
      "destacado": true,
      "resumen": "Colchón para cama hospitalaria, articulado en cuatro partes para adaptarse a cada posición de la cama.",
      "opciones": {
        "titulo": "Medida",
        "valores": ["200 × 90 cm"]
      },
      "caracteristicas": [
        "Articulado en cuatro partes.",
        "Se adapta a los movimientos de la cama hospitalaria.",
        "Espuma perfilada antiescaras.",
        "Forro de vinil impermeable, fácil de limpiar.",
        "Medida 200 × 90 cm."
      ],
      "imagenes": ["images/productos/colchon-articulado.jpg", "images/fichas/colchon-articulado.jpg"]
    },
    {
      "id": "colchon-hospitalario",
      "nombre": "Colchón hospitalario en esponja gris",
      "categoria": "colchones",
      "precio": null,
      "resumen": "Colchón práctico para cama hospitalaria, con esponja gris y forro de tela impermeable.",
      "caracteristicas": [
        "Relleno de esponja gris.",
        "Forro de tela impermeable.",
        "Práctico para uso en cama hospitalaria.",
        "Fácil de limpiar.",
        "Ideal para el cuidado de pacientes en casa."
      ],
      "imagenes": ["images/productos/colchon-hospitalario.jpg", "images/fichas/colchon-hospitalario.jpg"]
    },
    {
      "id": "cojin-herradura",
      "nombre": "Cojín antiescaras forma de herradura",
      "categoria": "cojines",
      "precio": null,
      "resumen": "Cojín con abertura en forma de herradura para personas que pasan mucho tiempo sentadas.",
      "caracteristicas": [
        "Forma de herradura que libera la zona del coxis.",
        "Para personas que pasan mucho tiempo sentadas.",
        "Soporte especial para la postura.",
        "Ayuda a prevenir escaras.",
        "Incluido en la promoción de cojines geriátricos 3 × $79."
      ],
      "imagenes": ["images/productos/cojin-herradura.jpg", "images/fichas/cojin-herradura.jpg"]
    },
    {
      "id": "cojin-silla-ruedas",
      "nombre": "Cojín antiescaras para silla de ruedas",
      "categoria": "cojines",
      "precio": 17,
      "resumen": "Modelo antiescaras de 45 × 40 cm, práctico para silla de ruedas.",
      "opciones": {
        "titulo": "Medida",
        "valores": ["45 × 40 cm"]
      },
      "caracteristicas": [
        "Medida 45 × 40 cm.",
        "Práctico para silla de ruedas.",
        "Espuma perfilada tipo huevo.",
        "Reparte la presión al estar sentado.",
        "Incluido en la promoción de cojines geriátricos 3 × $79."
      ],
      "imagenes": ["images/productos/cojin-silla-ruedas.jpg", "images/fichas/cojin-silla-ruedas.jpg"]
    },
    {
      "id": "cojin-cambio-panal",
      "nombre": "Cojín auxiliar para cambio de pañal adulto",
      "categoria": "cojines",
      "precio": null,
      "resumen": "Práctico para el cambio de pañal del adulto encamado.",
      "caracteristicas": [
        "Práctico para el cambio de pañal del adulto encamado.",
        "Ayuda a mantener al paciente de lado durante el cambio.",
        "Facilita el trabajo del cuidador.",
        "Forma ergonómica que se ajusta al cuerpo.",
        "Incluido en la promoción de cojines geriátricos 3 × $79."
      ],
      "imagenes": ["images/productos/cojin-cambio-panal.jpg", "images/fichas/cojin-cambio-panal.jpg"]
    },
    {
      "id": "cojin-elevador",
      "nombre": "Cojín elevador pie / mano",
      "categoria": "cojines",
      "precio": 35,
      "etiqueta": "El par",
      "destacado": true,
      "resumen": "Eleva y posiciona el pie, talón, tobillo, mano o brazo. Precio por el par.",
      "opciones": {
        "titulo": "Modelo",
        "valores": ["Rectangular", "Circular"]
      },
      "caracteristicas": [
        "Eleva y posiciona el pie, talón, tobillo, mano o brazo.",
        "Ayuda a reducir el edema y aliviar el dolor.",
        "Mejora la circulación con una postura estable y cómoda.",
        "Ideal para cuidados prolongados y recuperación.",
        "Modelo rectangular o circular. Precio por el par."
      ],
      "imagenes": ["images/productos/cojin-elevador-rectangular.jpg", "images/productos/cojin-elevador-circular.jpg", "images/fichas/cojin-elevador.jpg"]
    },
    {
      "id": "combo-cojines-geriatricos",
      "nombre": "Promoción cojines geriátricos",
      "categoria": "promociones",
      "precio": 79,
      "etiqueta": "3 × $79",
      "destacado": true,
      "resumen": "Los tres cojines esenciales para el cuidado del adulto mayor, a precio especial.",
      "caracteristicas": [
        "Cojín antiescaras en forma de herradura.",
        "Cojín antiescaras para silla de ruedas.",
        "Cojín auxiliar para cambio de pañal adulto.",
        "Precio especial por los tres: $79.",
        "Ideal para el cuidado del adulto mayor en casa."
      ],
      "imagenes": ["images/productos/promo-cojines-geriatricos.jpg", "images/productos/cojin-herradura.jpg", "images/productos/cojin-silla-ruedas.jpg", "images/productos/cojin-cambio-panal.jpg"]
    }
  ]
};
