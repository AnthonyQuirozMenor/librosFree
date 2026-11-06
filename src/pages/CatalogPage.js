import { booksData, bookCategories } from '../data/books.js';
import { authorsData } from '../data/authors.js';
import { renderBookCard } from '../components/BookCard.js';

export function renderCatalogPage(state) {
  const { searchQuery = '', selectedCategory = 'todos', sortBy = 'recent', authorFilter = '' } = state;

  let filtered = [...booksData];

  // Filtro por categoría
  if (selectedCategory && selectedCategory !== 'todos') {
    filtered = filtered.filter((b) => b.categories.includes(selectedCategory));
  }

  // Filtro por autor
  if (authorFilter) {
    filtered = filtered.filter((b) => b.authorId === authorFilter);
  }

  // Filtro por buscador
  const q = searchQuery.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }

  // Ordenamiento
  if (sortBy === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title, 'es'));
  } else if (sortBy === 'author') {
    filtered.sort((a, b) => a.author.localeCompare(b.author, 'es'));
  } else {
    filtered.sort((a, b) => b.addedOrder - a.addedOrder);
  }

  const activeAuthorObj = authorFilter ? authorsData.find((a) => a.id === authorFilter) : null;

  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">Colección Abierta</span>
          <h1 class="section-title">Catálogo de libros</h1>
          <p class="section-subtitle">
            Explora nuestras ediciones de dominio público y fichas informativas legales. Filtra por género literario u ordena por nombre, autor y novedades.
          </p>
        </div>

        <!-- Barra de Herramientas del Catálogo -->
        <div class="catalog-toolbar">
          <div class="catalog-search-row">
            <div class="catalog-search-input-wrap">
              <svg class="catalog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="search"
                id="catalogSearchInput"
                class="catalog-search-input"
                placeholder="Buscar por título, autor, género o palabra clave..."
                value="${searchQuery.replace(/"/g, '&quot;')}"
                aria-label="Buscar en el catálogo"
              />
            </div>

            <div class="catalog-sort-wrap">
              <label for="catalogSortSelect" style="font-size:0.84rem;font-weight:600;color:var(--color-text-muted);white-space:nowrap;">
                Ordenar por:
              </label>
              <select id="catalogSortSelect" class="catalog-sort-select" aria-label="Ordenar libros">
                <option value="recent" ${sortBy === 'recent' ? 'selected' : ''}>Novedades</option>
                <option value="title" ${sortBy === 'title' ? 'selected' : ''}>Nombre (A - Z)</option>
                <option value="author" ${sortBy === 'author' ? 'selected' : ''}>Autor (A - Z)</option>
              </select>
            </div>
          </div>

          <!-- Filtros de Categoría -->
          <div class="filter-pills" role="tablist" aria-label="Filtrar por categoría">
            ${bookCategories
              .map(
                (cat) => `
              <button
                type="button"
                class="filter-pill ${selectedCategory === cat.id ? 'active' : ''}"
                data-category-pill="${cat.id}"
              >
                ${cat.label}
              </button>
            `
              )
              .join('')}
          </div>

          ${
            activeAuthorObj || q
              ? `
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;padding-top:0.4rem;border-top:1px solid var(--color-gray-border);font-size:0.85rem;">
              <div>
                Mostrando <strong>${filtered.length}</strong> resultado(s)
                ${activeAuthorObj ? ` de <strong>${activeAuthorObj.name}</strong>` : ''}
                ${q ? ` para <strong>"${q}"</strong>` : ''}
              </div>
              <button type="button" class="btn btn-outline-navy btn-sm" id="clearCatalogFiltersBtn" style="padding:0.35rem 0.75rem;font-size:0.78rem;">
                Limpiar filtros
              </button>
            </div>
          `
              : `<div style="font-size:0.82rem;color:var(--color-text-muted);">Mostrando <strong>${filtered.length}</strong> de ${booksData.length} obras disponibles</div>`
          }
        </div>

        ${
          filtered.length > 0
            ? `
          <div class="books-grid" id="catalogBooksGrid">
            ${filtered.map((book) => renderBookCard(book)).join('')}
          </div>
        `
            : `
          <div class="empty-state">
            <h3 style="margin-bottom: 0.5rem;">No se encontraron libros con esos criterios</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.15rem;">
              Intenta con otro término de búsqueda o selecciona "Todos los libros" para ver el catálogo completo.
            </p>
            <button type="button" class="btn btn-primary btn-sm" id="resetEmptyCatalogBtn">
              Mostrar todos los libros
            </button>
          </div>
        `
        }
      </div>
    </section>
  `;
}
