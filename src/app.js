import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderCatalogPage } from './pages/CatalogPage.js';
import { renderAuthorsPage } from './pages/AuthorsPage.js';
import { renderReaderPage } from './pages/ReaderPage.js';
import { renderFavoritesPage } from './pages/FavoritesPage.js';
import { renderMyReadingPage } from './pages/MyReadingPage.js';
import { renderTeamPage } from './pages/TeamPage.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderContactPage } from './pages/ContactPage.js';
import { booksData } from './data/books.js';
import {
  toggleBookFavorite,
  getBookReadingProgress,
  getReaderPreferences,
  saveReaderPreferences,
  toggleBookCompleted
} from './utils/storage.js';

const appState = {
  currentSection: 'inicio',
  searchQuery: '',
  selectedCategory: 'todos',
  sortBy: 'recent',
  authorFilter: '',
  activeBookId: 'el-caballero-carmelo',
  currentPageIndex: 0,
  pdfMode: false
};

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const item = document.createElement('div');
  item.className = 'toast-msg';
  item.textContent = message;
  container.appendChild(item);
  setTimeout(() => {
    item.remove();
  }, 3000);
}

function renderViewContent() {
  switch (appState.currentSection) {
    case 'inicio':
      return renderHomePage();
    case 'catalogo':
      return renderCatalogPage(appState);
    case 'autores':
      return renderAuthorsPage();
    case 'lector':
      return renderReaderPage(appState);
    case 'favoritos':
      return renderFavoritesPage();
    case 'mi-lectura':
      return renderMyReadingPage();
    case 'equipo':
      return renderTeamPage();
    case 'sobre-nosotros':
      return renderAboutPage();
    case 'contacto':
      return renderContactPage();
    default:
      return renderHomePage();
  }
}

export function renderApp(options = { scrollTop: true }) {
  const root = document.getElementById('app');
  if (!root) return;

  root.innerHTML = `
    ${renderNavbar(appState.currentSection)}
    <main id="mainContent" role="main">
      ${renderViewContent()}
    </main>
    ${renderFooter()}
  `;

  bindInteractiveEvents();

  if (options.scrollTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openBookInReader(bookId) {
  const book = booksData.find((b) => b.id === bookId);
  if (!book) return;
  const saved = getBookReadingProgress(bookId);
  appState.activeBookId = bookId;
  appState.currentPageIndex = saved && saved.currentPage < book.pages.length ? saved.currentPage : 0;
  appState.pdfMode = false;
  appState.currentSection = 'lector';
  window.history.replaceState(null, '', `#lector/${bookId}`);
  renderApp({ scrollTop: true });
}

function navigateTo(sectionId) {
  appState.currentSection = sectionId;
  window.history.replaceState(null, '', `#${sectionId}`);
  renderApp({ scrollTop: true });
}

function bindInteractiveEvents() {
  // Menú móvil (Hamburguesa)
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');

  const closeMobileDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('open');
  };

  if (mobileMenuBtn && mobileDrawer && mobileDrawerBackdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      mobileDrawerBackdrop.classList.add('open');
    });
  }
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

  // Botón rápido de búsqueda en Header
  document.querySelectorAll('[data-action="quick-search"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.currentSection = 'catalogo';
      renderApp({ scrollTop: true });
      setTimeout(() => {
        const input = document.getElementById('catalogSearchInput');
        if (input) input.focus();
      }, 80);
    });
  });

  // Enlaces de navegación
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-nav');
      closeMobileDrawer();
      if (target === 'catalogo' && appState.currentSection !== 'catalogo') {
        appState.authorFilter = '';
      }
      navigateTo(target);
    });
  });

  // Botón de filtrar Literatura Peruana desde Inicio
  document.querySelectorAll('[data-filter-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.selectedCategory = btn.getAttribute('data-filter-category');
      appState.authorFilter = '';
      appState.searchQuery = '';
      navigateTo('catalogo');
    });
  });

  // Explorar libros de un autor
  document.querySelectorAll('[data-explore-author]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.authorFilter = btn.getAttribute('data-explore-author');
      appState.selectedCategory = 'todos';
      appState.searchQuery = '';
      navigateTo('catalogo');
    });
  });

  // Abrir libro en Lector Digital
  document.querySelectorAll('[data-read-book]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookId = btn.getAttribute('data-read-book');
      openBookInReader(bookId);
    });
  });

  // Guardar / Quitar Favoritos
  document.querySelectorAll('[data-fav-toggle]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const bookId = btn.getAttribute('data-fav-toggle');
      const book = booksData.find((b) => b.id === bookId);
      const added = toggleBookFavorite(bookId);
      showToast(
        added
          ? `♥ "${book ? book.title : 'Libro'}" añadido a Mis favoritos`
          : `"${book ? book.title : 'Libro'}" eliminado de Mis favoritos`
      );
      renderApp({ scrollTop: false });
    });
  });

  // Buscador en Hero (Inicio)
  const heroSearchForm = document.getElementById('heroSearchForm');
  const heroSearchInput = document.getElementById('heroSearchInput');
  if (heroSearchForm && heroSearchInput) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.searchQuery = heroSearchInput.value;
      appState.selectedCategory = 'todos';
      appState.authorFilter = '';
      navigateTo('catalogo');
    });
  }

  // Buscador en Catálogo (filtrado en tiempo real)
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      const pos = e.target.selectionStart;
      appState.searchQuery = e.target.value;
      renderApp({ scrollTop: false });
      const newInput = document.getElementById('catalogSearchInput');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(pos, pos);
      }
    });
  }

  // Selector de ordenamiento en Catálogo
  const catalogSortSelect = document.getElementById('catalogSortSelect');
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      appState.sortBy = e.target.value;
      renderApp({ scrollTop: false });
    });
  }

  // Píldoras de categoría en Catálogo
  document.querySelectorAll('[data-category-pill]').forEach((pill) => {
    pill.addEventListener('click', () => {
      appState.selectedCategory = pill.getAttribute('data-category-pill');
      renderApp({ scrollTop: false });
    });
  });

  // Limpiar filtros en Catálogo
  const clearFiltersBtn = document.getElementById('clearCatalogFiltersBtn');
  const resetEmptyBtn = document.getElementById('resetEmptyCatalogBtn');
  [clearFiltersBtn, resetEmptyBtn].forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', () => {
        appState.searchQuery = '';
        appState.selectedCategory = 'todos';
        appState.authorFilter = '';
        renderApp({ scrollTop: false });
      });
    }
  });

  // Controles del Lector Digital
  document.querySelectorAll('[data-reader-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextPage = parseInt(btn.getAttribute('data-reader-page'), 10);
      if (!Number.isNaN(nextPage)) {
        appState.currentPageIndex = nextPage;
        renderApp({ scrollTop: true });
      }
    });
  });

  const readerChapterSelect = document.getElementById('readerChapterSelect');
  if (readerChapterSelect) {
    readerChapterSelect.addEventListener('change', (e) => {
      appState.currentPageIndex = parseInt(e.target.value, 10) || 0;
      renderApp({ scrollTop: true });
    });
  }

  document.querySelectorAll('[data-reader-font]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.getAttribute('data-reader-font');
      const prefs = getReaderPreferences();
      const nextSize = dir === 'inc' ? Math.min(26, prefs.fontSize + 2) : Math.max(14, prefs.fontSize - 2);
      saveReaderPreferences({ fontSize: nextSize });
      renderApp({ scrollTop: false });
    });
  });

  document.querySelectorAll('[data-reader-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-reader-theme');
      saveReaderPreferences({ theme });
      renderApp({ scrollTop: false });
    });
  });

  document.querySelectorAll('[data-reader-toggle-pdf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.pdfMode = !appState.pdfMode;
      renderApp({ scrollTop: false });
    });
  });

  document.querySelectorAll('[data-mark-completed]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookId = btn.getAttribute('data-mark-completed');
      const book = booksData.find((b) => b.id === bookId);
      const updated = toggleBookCompleted(bookId, book ? book.pages.length : 1);
      showToast(
        updated.completed
          ? `¡Felicidades! Marcaste "${book ? book.title : 'el libro'}" como terminado`
          : `Se desmarcó "${book ? book.title : 'el libro'}" como terminado`
      );
      renderApp({ scrollTop: false });
    });
  });

  // Formulario visual de Contacto
  const contactForm = document.getElementById('contactVisualForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'lector';
      showToast(`¡Gracias, ${name}! Tu mensaje fue registrado en la demostración de LibrosFree.`);
      contactForm.reset();
    });
  }
}

// Soporte de navegación por hash e inicialización
function handleInitialHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;
  if (hash.startsWith('lector/')) {
    const bookId = hash.split('/')[1];
    if (booksData.some((b) => b.id === bookId)) {
      openBookInReader(bookId);
      return;
    }
  }
  const validSections = [
    'inicio',
    'catalogo',
    'autores',
    'lector',
    'favoritos',
    'mi-lectura',
    'equipo',
    'sobre-nosotros',
    'contacto'
  ];
  if (validSections.includes(hash)) {
    appState.currentSection = hash;
  }
}

window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  handleInitialHash();
  renderApp({ scrollTop: false });
});
