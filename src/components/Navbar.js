import { getFavoriteIds, getAllReadingProgress } from '../utils/storage.js';

export function renderNavbar(activeSection) {
  const favCount = getFavoriteIds().length;
  const readingCount = Object.keys(getAllReadingProgress()).length;

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'autores', label: 'Autores' },
    { id: 'favoritos', label: 'Favoritos', badge: favCount },
    { id: 'mi-lectura', label: 'Mi lectura', badge: readingCount },
    { id: 'equipo', label: 'Nuestro equipo' },
    { id: 'sobre-nosotros', label: 'Sobre nosotros' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="#inicio" class="brand-logo" data-nav="inicio" aria-label="Ir al inicio de LibrosFree">
          <img src="./src/assets/images/logo-librosfree.svg" alt="Logotipo LibrosFree" class="brand-logo-icon" />
          <div class="brand-text-wrap">
            <span class="brand-name">LIBROS<span>FREE</span></span>
            <span class="brand-tagline">Un mundo de historias al alcance de todos</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${navItems
            .map(
              (item) => `
            <button type="button" class="nav-link ${activeSection === item.id ? 'active' : ''}" data-nav="${item.id}">
              <span>${item.label}</span>
              ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
            </button>
          `
            )
            .join('')}
        </nav>

        <div class="header-actions">
          <button type="button" class="header-search-btn" data-action="quick-search" title="Buscar libros en el catálogo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Buscar</span>
          </button>

          <button type="button" class="menu-toggle-btn" id="mobileMenuBtn" aria-label="Abrir menú de navegación">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Menú Hamburguesa Lateral para Celulares -->
    <div class="mobile-drawer-backdrop" id="mobileDrawerBackdrop"></div>
    <aside class="mobile-drawer" id="mobileDrawer" aria-label="Menú móvil">
      <div class="mobile-drawer-header">
        <div class="brand-logo">
          <img src="./src/assets/images/logo-librosfree.svg" alt="Logo" class="brand-logo-icon" />
          <div class="brand-text-wrap">
            <span class="brand-name">LIBROS<span>FREE</span></span>
          </div>
        </div>
        <button type="button" class="menu-toggle-btn" id="closeMobileMenuBtn" aria-label="Cerrar menú">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="mobile-nav-list">
        ${navItems
          .map(
            (item) => `
          <button type="button" class="mobile-nav-item ${activeSection === item.id ? 'active' : ''}" data-nav="${item.id}">
            <span>${item.label}</span>
            ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
          </button>
        `
          )
          .join('')}
      </div>
    </aside>

    <!-- Barra Inferior Móvil para Navegación con Una Sola Mano -->
    <nav class="mobile-bottom-bar" aria-label="Navegación rápida móvil">
      <button type="button" class="bottom-bar-item ${activeSection === 'inicio' ? 'active' : ''}" data-nav="inicio">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/>
        </svg>
        <span>Inicio</span>
      </button>
      <button type="button" class="bottom-bar-item ${activeSection === 'catalogo' ? 'active' : ''}" data-nav="catalogo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
        <span>Catálogo</span>
      </button>
      <button type="button" class="bottom-bar-item ${activeSection === 'autores' ? 'active' : ''}" data-nav="autores">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span>Autores</span>
      </button>
      <button type="button" class="bottom-bar-item ${activeSection === 'favoritos' ? 'active' : ''}" data-nav="favoritos">
        ${favCount ? `<span class="bottom-bar-badge">${favCount}</span>` : ''}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span>Favoritos</span>
      </button>
      <button type="button" class="bottom-bar-item ${activeSection === 'mi-lectura' ? 'active' : ''}" data-nav="mi-lectura">
        ${readingCount ? `<span class="bottom-bar-badge">${readingCount}</span>` : ''}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
        <span>Mi lectura</span>
      </button>
    </nav>
  `;
}
