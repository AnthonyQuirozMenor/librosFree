import { booksData } from '../data/books.js';
import { getAllReadingProgress, getLastReadEntry } from '../utils/storage.js';
import { renderBookCard } from '../components/BookCard.js';

export function renderMyReadingPage() {
  const allProgress = getAllReadingProgress();
  const entries = Object.values(allProgress);
  const lastEntry = getLastReadEntry();
  const lastBook = lastEntry ? booksData.find((b) => b.id === lastEntry.bookId) : null;

  const inProgressBooks = entries
    .filter((e) => !e.completed)
    .map((e) => ({ entry: e, book: booksData.find((b) => b.id === e.bookId) }))
    .filter((x) => x.book);

  const completedBooks = entries
    .filter((e) => e.completed)
    .map((e) => ({ entry: e, book: booksData.find((b) => b.id === e.bookId) }))
    .filter((x) => x.book);

  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">Tu Bitácora Literaria</span>
          <h1 class="section-title">Mi lectura</h1>
          <p class="section-subtitle">
            Consulta tu última lectura activa, el porcentaje de avance de tus libros y las obras que ya has terminado.
          </p>
        </div>

        <!-- Resumen Estadístico de Lectura -->
        <div class="stats-grid" style="margin-bottom: 2rem;">
          <div class="info-card" style="padding: 1.15rem;">
            <span style="font-size:0.76rem;color:var(--color-text-muted);text-transform:uppercase;font-weight:700;">En lectura activa</span>
            <div style="font-size:1.8rem;font-family:var(--font-serif);font-weight:700;color:var(--color-navy);">${inProgressBooks.length}</div>
          </div>
          <div class="info-card" style="padding: 1.15rem;">
            <span style="font-size:0.76rem;color:var(--color-text-muted);text-transform:uppercase;font-weight:700;">Libros terminados</span>
            <div style="font-size:1.8rem;font-family:var(--font-serif);font-weight:700;color:var(--color-success);">${completedBooks.length}</div>
          </div>
          <div class="info-card" style="padding: 1.15rem;">
            <span style="font-size:0.76rem;color:var(--color-text-muted);text-transform:uppercase;font-weight:700;">Total explorados</span>
            <div style="font-size:1.8rem;font-family:var(--font-serif);font-weight:700;color:var(--color-navy);">${entries.length}</div>
          </div>
          <div class="info-card" style="padding: 1.15rem;">
            <span style="font-size:0.76rem;color:var(--color-text-muted);text-transform:uppercase;font-weight:700;">Avance promedio</span>
            <div style="font-size:1.8rem;font-family:var(--font-serif);font-weight:700;color:var(--color-gold-hover);">
              ${entries.length ? Math.round(entries.reduce((acc, e) => acc + e.percentage, 0) / entries.length) : 0}%
            </div>
          </div>
        </div>

        <!-- 1. Última Lectura -->
        <div style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.35rem; margin-bottom: 1rem;">Última lectura</h2>
          ${
            lastBook && lastEntry
              ? `
            <div class="info-card highlight" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;">
              <div style="display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap;">
                <img src="${lastBook.cover}" alt="${lastBook.title}" style="width:78px;height:114px;border-radius:8px;object-fit:cover;border:1.5px solid var(--color-gold);" />
                <div>
                  <span style="font-size:0.75rem;color:var(--color-gold);text-transform:uppercase;font-weight:700;">${lastBook.genre}</span>
                  <h3 style="font-size:1.35rem;color:var(--color-cream);margin:0.15rem 0;">${lastBook.title}</h3>
                  <p style="font-size:0.9rem;color:rgba(250,247,240,0.8);margin-bottom:0.6rem;">${lastBook.author}</p>
                  <div style="font-size:0.84rem;color:var(--color-gold);font-weight:600;">
                    Porcentaje de avance: ${lastEntry.percentage}% · Página ${lastEntry.currentPage + 1} de ${lastEntry.totalPages}
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-gold" data-read-book="${lastBook.id}">
                Continuar leyendo
              </button>
            </div>
          `
              : `
            <div class="empty-state">
              <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1rem;">
                Todavía no has iniciado la lectura de ningún libro. Cuando abras una obra en el Lector Digital, tu avance aparecerá automáticamente aquí.
              </p>
              <button type="button" class="btn btn-primary btn-sm" data-nav="catalogo">Explorar catálogo</button>
            </div>
          `
          }
        </div>

        <!-- 2. Libros que el usuario está leyendo -->
        <div style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.35rem; margin-bottom: 1rem;">Libros en curso (${inProgressBooks.length})</h2>
          ${
            inProgressBooks.length > 0
              ? `
            <div class="books-grid">
              ${inProgressBooks.map(({ book }) => renderBookCard(book)).join('')}
            </div>
          `
              : `
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">No tienes libros pendientes a mitad de lectura en este momento.</p>
          `
          }
        </div>

        <!-- 3. Libros terminados -->
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: 1rem;">Libros terminados (${completedBooks.length})</h2>
          ${
            completedBooks.length > 0
              ? `
            <div class="books-grid">
              ${completedBooks.map(({ book }) => renderBookCard(book)).join('')}
            </div>
          `
              : `
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">Aún no has marcado libros como terminados. ¡Sigue leyendo hasta llegar al 100%!</p>
          `
          }
        </div>
      </div>
    </section>
  `;
}
