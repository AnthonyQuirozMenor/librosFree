import { booksData } from '../data/books.js';
import { getFavoriteIds } from '../utils/storage.js';
import { renderBookCard } from '../components/BookCard.js';

export function renderFavoritesPage() {
  const favIds = getFavoriteIds();
  const favBooks = booksData.filter((b) => favIds.includes(b.id));

  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header row">
          <div>
            <span class="section-kicker">Colección Personal</span>
            <h1 class="section-title">Mis favoritos</h1>
            <p class="section-subtitle">
              Tus libros guardados en este dispositivo mediante almacenamiento local, sin necesidad de registrarte.
            </p>
          </div>
          <button type="button" class="btn btn-outline-navy btn-sm" data-nav="catalogo">
            Explorar más libros
          </button>
        </div>

        ${
          favBooks.length > 0
            ? `
          <div class="books-grid">
            ${favBooks.map((book) => renderBookCard(book)).join('')}
          </div>
        `
            : `
          <div class="empty-state">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.8" style="margin: 0 auto 0.85rem;">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h3 style="margin-bottom: 0.45rem;">Aún no tienes libros en tus favoritos</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.2rem;">
              Pulsa el ícono del corazón (♥) en cualquier libro del catálogo para guardarlo aquí y leerlo cuando quieras.
            </p>
            <button type="button" class="btn btn-primary btn-sm" data-nav="catalogo">
              Ir al catálogo de libros
            </button>
          </div>
        `
        }
      </div>
    </section>
  `;
}
