import { booksData } from '../data/books.js';
import {
  getBookReadingProgress,
  saveBookReadingProgress,
  getReaderPreferences,
  isBookFavorite,
  toggleBookCompleted
} from '../utils/storage.js';

export function renderReaderPage(state) {
  const { activeBookId, currentPageIndex = 0, pdfMode = false } = state;
  const book = booksData.find((b) => b.id === activeBookId) || booksData[0];
  const prefs = getReaderPreferences();
  const totalPages = book.pages.length;
  const safePageIndex = Math.max(0, Math.min(currentPageIndex, totalPages - 1));
  const currentPage = book.pages[safePageIndex];

  // Guardar progreso automáticamente al abrir o cambiar de página
  const progress = saveBookReadingProgress(book.id, safePageIndex, totalPages);
  const isFav = isBookFavorite(book.id);
  const isFicha = book.accessType === 'ficha';

  const formattedParagraphs = currentPage.content
    .map((p) => {
      if (p.includes('\n')) {
        return `<div class="poem-stanza">${p.replace(/\n/g, '<br/>')}</div>`;
      }
      return `<p>${p}</p>`;
    })
    .join('');

  return `
    <div class="reader-wrapper theme-${prefs.theme}" id="readerWrapper">
      <div class="reader-container">
        <!-- Barra Superior de Controles -->
        <div class="reader-toolbar">
          <div class="reader-book-info">
            <button type="button" class="reader-back-btn" data-nav="catalogo" title="Regresar al catálogo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Catálogo</span>
            </button>
            <div class="reader-head-titles">
              <h2>${book.title}</h2>
              <p>${book.author} · ${book.rightsNotice}</p>
            </div>
          </div>

          <div class="reader-controls-group">
            <!-- Control de Tamaño de Letra -->
            <div class="reader-control-pill" role="group" aria-label="Tamaño de letra">
              <button type="button" class="reader-ctrl-btn" data-reader-font="dec" title="Disminuir letra">A-</button>
              <span style="font-size:0.76rem;padding:0 0.35rem;font-weight:700;">${prefs.fontSize}px</span>
              <button type="button" class="reader-ctrl-btn" data-reader-font="inc" title="Aumentar letra">A+</button>
            </div>

            <!-- Modo Claro / Sepia / Oscuro -->
            <div class="reader-control-pill" role="group" aria-label="Tema de lectura">
              <button type="button" class="reader-ctrl-btn ${prefs.theme === 'light' ? 'active' : ''}" data-reader-theme="light">Claro</button>
              <button type="button" class="reader-ctrl-btn ${prefs.theme === 'sepia' ? 'active' : ''}" data-reader-theme="sepia">Crema</button>
              <button type="button" class="reader-ctrl-btn ${prefs.theme === 'dark' ? 'active' : ''}" data-reader-theme="dark">Oscuro</button>
            </div>

            ${
              book.pdfUrl
                ? `
              <button type="button" class="reader-ctrl-btn" data-reader-toggle-pdf="true" style="border:1px solid var(--color-gold);">
                ${pdfMode ? 'Modo Lectura Web' : 'Visor PDF'}
              </button>
            `
                : ''
            }

            <button
              type="button"
              class="reader-ctrl-btn ${isFav ? 'active' : ''}"
              data-fav-toggle="${book.id}"
              title="${isFav ? 'En tus favoritos' : 'Añadir a favoritos'}"
            >
              ♥ ${isFav ? 'Favorito' : 'Guardar'}
            </button>
          </div>
        </div>

        <!-- Barra de Progreso de Lectura y Selector de Capítulo -->
        <div class="reader-progress-strip">
          <span>Página ${safePageIndex + 1} de ${totalPages}</span>
          <div class="reader-progress-track" aria-label="Progreso de lectura">
            <div class="reader-progress-bar-fill" style="width: ${progress.percentage}%;"></div>
          </div>
          <span>${progress.percentage}% leído</span>
        </div>

        ${
          isFicha
            ? `
          <div class="info-card" style="margin-bottom: 1rem; border-left: 4px solid #d97706; background-color: #fffbeb; color: #78350f; padding: 0.9rem 1.15rem; font-size: 0.85rem;">
            <strong>Ficha Informativa Legal:</strong> Esta obra cuenta con derechos de autor vigentes. LibrosFree presenta únicamente su ficha bibliográfica y análisis educativo sin reproducir el texto protegido.
          </div>
        `
            : ''
        }

        <!-- Superficie Principal de Lectura -->
        <article class="reader-page-surface">
          ${
            pdfMode && book.pdfUrl
              ? `
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.85rem;flex-wrap:wrap;gap:0.5rem;">
                <h3 class="reader-chapter-heading" style="margin-bottom:0;border:none;padding:0;">Visor PDF Integrado · ${book.title}</h3>
                <a href="${book.pdfUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-sm">Abrir o descargar PDF</a>
              </div>
              <iframe
                src="${book.pdfUrl}"
                class="reader-pdf-frame"
                title="Visor PDF de ${book.title}"
              ></iframe>
            </div>
          `
              : `
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
                <h3 class="reader-chapter-heading" style="margin-bottom:0;flex:1;">${currentPage.chapter}</h3>
                <select id="readerChapterSelect" class="catalog-sort-select" style="font-size:0.8rem;padding:0.4rem 0.65rem;" aria-label="Ir a página o capítulo">
                  ${book.pages
                    .map(
                      (p, idx) =>
                        `<option value="${idx}" ${idx === safePageIndex ? 'selected' : ''}>Pág. ${idx + 1}: ${p.chapter}</option>`
                    )
                    .join('')}
                </select>
              </div>

              <div class="reader-text-content" style="font-size: ${prefs.fontSize}px;">
                ${formattedParagraphs}
              </div>
            </div>
          `
          }

          <!-- Controles de Paginación -->
          <div class="reader-pagination-bar">
            <button
              type="button"
              class="reader-nav-btn"
              data-reader-page="${safePageIndex - 1}"
              ${safePageIndex === 0 ? 'disabled' : ''}
            >
              ← Anterior
            </button>

            <button
              type="button"
              class="btn btn-outline-navy btn-sm"
              data-mark-completed="${book.id}"
            >
              ${progress.completed ? '✓ Libro terminado' : 'Marcar como terminado'}
            </button>

            <button
              type="button"
              class="reader-nav-btn"
              data-reader-page="${safePageIndex + 1}"
              ${safePageIndex >= totalPages - 1 ? 'disabled' : ''}
            >
              Siguiente →
            </button>
          </div>
        </article>
      </div>
    </div>
  `;
}
