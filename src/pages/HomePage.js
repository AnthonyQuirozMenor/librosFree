import { booksData } from '../data/books.js';
import { authorsData } from '../data/authors.js';
import { siteConfig } from '../data/config.js';
import { renderBookCard } from '../components/BookCard.js';
import { getLastReadEntry } from '../utils/storage.js';

export function renderHomePage() {
  const featuredBooks = booksData.filter((b) => b.isFeatured).slice(0, 4);
  const peruvianBooks = booksData.filter((b) => b.isPeruvian).slice(0, 4);
  const recommendedAuthors = authorsData.filter((a) => a.recommended).slice(0, 6);
  const recentBooks = [...booksData].sort((a, b) => b.addedOrder - a.addedOrder).slice(0, 4);

  const lastRead = getLastReadEntry();
  const lastReadBook = lastRead ? booksData.find((b) => b.id === lastRead.bookId) : null;

  return `
    <!-- Banner Principal Editorial -->
    <section class="hero-banner">
      <div class="container hero-grid">
        <div>
          <div class="hero-eyebrow">
            <span>Biblioteca Digital Gratuita · Perú</span>
          </div>
          <p class="hero-slogan">"${siteConfig.slogan}"</p>
          <h1 class="hero-title">
            Las mejores historias comienzan con <em>una lectura</em>
          </h1>
          <p class="hero-description">
            Descubre obras maestras de la literatura peruana y universal desde tu celular, tablet o computadora. Sin costo, sin barreras y diseñadas para inspirar a nuevas generaciones de lectores.
          </p>

          <!-- Buscador Principal -->
          <form class="hero-search-box" id="heroSearchForm" role="search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172554" stroke-width="2" style="margin-left:0.65rem;flex-shrink:0;">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="search"
              id="heroSearchInput"
              class="hero-search-input"
              placeholder="Buscar por título, autor (ej. Vallejo, Valdelomar, Palma)..."
              aria-label="Buscar libros en LibrosFree"
            />
            <button type="submit" class="btn btn-gold btn-sm">Buscar</button>
          </form>

          <div class="hero-actions">
            <button type="button" class="btn btn-gold" data-nav="catalogo">
              <span>Explorar biblioteca</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button type="button" class="btn btn-outline-light" data-nav="autores">
              Conocer autores peruanos
            </button>
          </div>
        </div>

        <!-- Composición Visual Editorial -->
        <div class="hero-editorial-showcase" aria-label="Libros destacados en exhibición">
          <div class="editorial-shelf">
            <img
              src="./src/assets/books/heraldos-negros.svg"
              alt="Los Heraldos Negros"
              class="showcase-book"
              data-read-book="los-heraldos-negros"
              title="Leer Los Heraldos Negros"
            />
            <img
              src="./src/assets/books/caballero-carmelo.svg"
              alt="El Caballero Carmelo"
              class="showcase-book"
              data-read-book="el-caballero-carmelo"
              title="Leer El Caballero Carmelo"
            />
            <img
              src="./src/assets/books/tradiciones-peruanas.svg"
              alt="Tradiciones Peruanas"
              class="showcase-book"
              data-read-book="tradiciones-peruanas"
              title="Leer Tradiciones Peruanas"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Cinta de Indicadores Culturales -->
    <section class="stats-ribbon" aria-label="Características de la biblioteca">
      <div class="container stats-grid">
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <div>
            <div class="stat-number">${booksData.length} Obras</div>
            <div class="stat-label">Catálogo curado y legal</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div class="stat-number">100% Gratuito</div>
            <div class="stat-label">Sin cuentas ni suscripciones</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          <div>
            <div class="stat-number">Mobile First</div>
            <div class="stat-label">Lector adaptable a celulares</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div>
            <div class="stat-number">Guardado Local</div>
            <div class="stat-label">Progreso y favoritos al instante</div>
          </div>
        </div>
      </div>
    </section>

    ${
      lastReadBook
        ? `
      <section class="section-block" style="padding-bottom: 0.5rem;">
        <div class="container">
          <div class="info-card" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;border-left:4px solid var(--color-gold);">
            <div>
              <span class="section-kicker">Continuar tu lectura</span>
              <h3 style="font-size:1.22rem;margin-top:0.2rem;">${lastReadBook.title} · <span style="font-weight:500;color:var(--color-text-muted);">${lastReadBook.author}</span></h3>
              <p style="font-size:0.86rem;color:var(--color-text-muted);">Avance guardado: <strong>${lastRead.percentage}%</strong> (Página ${lastRead.currentPage + 1} de ${lastRead.totalPages})</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm" data-read-book="${lastReadBook.id}">
              Retomar lectura
            </button>
          </div>
        </div>
      </section>
    `
        : ''
    }

    <!-- 1. Sección de Libros Destacados -->
    <section class="section-block" id="destacados">
      <div class="container">
        <div class="section-header row">
          <div>
            <span class="section-kicker">Selección Editorial</span>
            <h2 class="section-title">Libros destacados</h2>
            <p class="section-subtitle">Obras esenciales recomendadas para iniciar tu viaje por la lectura digital.</p>
          </div>
          <button type="button" class="btn btn-outline-navy btn-sm" data-nav="catalogo">Ver todo el catálogo</button>
        </div>
        <div class="books-grid">
          ${featuredBooks.map((book) => renderBookCard(book)).join('')}
        </div>
      </div>
    </section>

    <!-- 2. Sección de Literatura Peruana -->
    <section class="section-block alt-bg" id="literatura-peruana">
      <div class="container">
        <div class="section-header row">
          <div>
            <span class="section-kicker">Identidad y Memoria</span>
            <h2 class="section-title">Literatura peruana</h2>
            <p class="section-subtitle">Desde la tradición limeña y el cuento costeño hasta la vanguardia poética y el mundo andino.</p>
          </div>
          <button type="button" class="btn btn-primary btn-sm" data-filter-category="Literatura peruana">
            Explorar Literatura Peruana
          </button>
        </div>
        <div class="books-grid">
          ${peruvianBooks.map((book) => renderBookCard(book)).join('')}
        </div>
      </div>
    </section>

    <!-- 3. Sección de Autores Recomendados -->
    <section class="section-block white-bg" id="autores-recomendados">
      <div class="container">
        <div class="section-header row">
          <div>
            <span class="section-kicker">Maestros de la Palabra</span>
            <h2 class="section-title">Autores recomendados</h2>
            <p class="section-subtitle">Conoce a las grandes plumas del Perú que transformaron nuestra cultura e imaginación.</p>
          </div>
          <button type="button" class="btn btn-outline-navy btn-sm" data-nav="autores">Ver todos los autores</button>
        </div>

        <div class="authors-grid">
          ${recommendedAuthors
            .map(
              (author) => `
            <article class="author-card">
              <div class="author-header">
                <img src="${author.portrait}" alt="Retrato de ${author.name}" class="author-avatar" loading="lazy" />
                <div>
                  <span class="author-country">${author.country}</span>
                  <h3 class="author-name">${author.name}</h3>
                </div>
              </div>
              <p class="author-bio">${author.biography}</p>
              <div class="author-works-box">
                <div class="author-works-label">Obras en LibrosFree:</div>
                <div class="author-works-list">${author.availableWorks.join(' · ')}</div>
              </div>
              <button type="button" class="btn btn-outline-navy btn-sm" data-explore-author="${author.id}">
                Explorar sus libros
              </button>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- 4. Sección de Libros Recientemente Incorporados -->
    <section class="section-block" id="recientes">
      <div class="container">
        <div class="section-header row">
          <div>
            <span class="section-kicker">Novedades en Biblioteca</span>
            <h2 class="section-title">Libros recientemente incorporados</h2>
            <p class="section-subtitle">Nuevas ediciones digitales y guías culturales añadidas a nuestra colección abierta.</p>
          </div>
          <button type="button" class="btn btn-outline-navy btn-sm" data-nav="catalogo">Explorar más</button>
        </div>
        <div class="books-grid">
          ${recentBooks.map((book) => renderBookCard(book)).join('')}
        </div>
      </div>
    </section>
  `;
}
