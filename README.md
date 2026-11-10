# LIBROSFREE – Biblioteca Digital Gratuita

> *"Un mundo de historias al alcance de todos"*

**LibrosFree** es una plataforma web estática, moderna y gratuita dirigida principalmente a adolescentes y jóvenes, cuyo propósito es fomentar el hábito de la lectura y promover la **literatura peruana** y universal desde celulares, tablets y computadoras.

---

## Características Principales

- **Inicio Editorial**: Banner principal con frase destacada (*"Las mejores historias comienzan con una lectura"*), buscador directo, libros destacados, sección de literatura peruana, autores recomendados y libros recientemente incorporados.
- **Catálogo de Libros**: Cuadrícula adaptable con filtros por categoría (*Literatura peruana, Novelas, Cuentos, Poesía, Literatura juvenil, Obras clásicas, Educación y cultura*), buscador instantáneo y ordenamiento por nombre, autor y novedades.
- **Nuestros Autores**: Retratos editoriales, biografías y obras disponibles con especial protagonismo para escritores peruanos (**César Vallejo, José María Arguedas, Ricardo Palma, Clorinda Matto de Turner, Abraham Valdelomar y Mario Vargas Llosa**).
- **Lector Digital Integrado**:
  - Lectura paginada cómoda con selector de capítulos y botones de avance/retroceso.
  - Control de tamaño de letra (`A-` / `A+`).
  - Modos de lectura: **Claro**, **Crema (Editorial)** y **Oscuro**.
  - Visor PDF integrado para ediciones con documento PDF descargable.
  - Indicador de progreso porcentual y guardado automático.
  - Cumplimiento estricto de Derechos de Autor (textos íntegros en obras de dominio público y fichas informativas legales en obras con derechos reservados).
- **Mis Favoritos (`localStorage`)**: Guarda y organiza tus libros preferidos sin necesidad de registro.
- **Mi Lectura (`localStorage`)**: Seguimiento de última lectura, libros en curso, porcentaje de avance y libros terminados.
- **Nuestro Equipo**: Presentación de los cinco integrantes del proyecto LibrosFree.
- **Sobre Nosotros y Contacto**: Misión, visión, importancia de la literatura peruana y formulario de contacto con canales configurables.

---

## Estructura del Proyecto

```text
librosFree/
│
├── index.html
├── README.md
├── package.json
│
├── src/
│   ├── app.js
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── Footer.js
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── AboutPage.js
│   │   ├── AuthorsPage.js
│   │   ├── CatalogPage.js
│   │   ├── ContactPage.js
│   │   ├── FavoritesPage.js
│   │   ├── HomePage.js
│   │   ├── MyReadingPage.js
│   │   ├── ReaderPage.js
│   │   └── TeamPage.js
│   ├── styles/
│   │   ├── components.css
│   │   ├── main.css
│   │   ├── reader.css
│   │   └── variables.css
│   ├── data/
│   │   ├── authors.js
│   │   ├── books.js
│   │   ├── config.js
│   │   └── team.js
│   ├── utils/
│   │   ├── storage.js
│   │   └── verify.ps1
│   └── assets/
│       ├── images/
│       ├── authors/
│       └── books/
│
└── public/
    ├── books/
    └── images/
```

---

## Integrantes del Proyecto

1. **Estrellita De Los Angeles Yovera Araujo**
2. **Shelly Sthefanny Leiva Gaona**
3. **Sarita Martinez Gonzáles**
4. **Orlando Daniel Torres Matta**
5. **Jhack Zavaleta Leon**

