import { isBookFavorite, getBookReadingProgress, getBookQuizResult } from '../utils/storage.js';

export function renderBookCard(book) {
  const isFav = isBookFavorite(book.id);
  const progress = getBookReadingProgress(book.id);
  const quizResult = getBookQuizResult(book.id);
  const isFullText = book.accessType === 'full';

  return `
    <article class="book-card" data-book-card="${book.id}">
      <div class="book-cover-wrap">
        ${
          book.isPeruvian
            ? `<span class="book-badge-top badge-peru">Perú</span>`
            : `<span class="book-badge-top badge-ficha">Universal</span>`
        }
        <button
          type="button"
          class="book-fav-btn ${isFav ? 'active' : ''}"
          data-fav-toggle="${book.id}"
          aria-label="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
          title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <img
          src="${book.cover}"
          alt="Portada de ${book.title}"
          class="book-cover-img"
          loading="lazy"
          data-read-book="${book.id}"
          style="cursor: pointer;"
        />
      </div>

      <div class="book-body">
        <div class="book-meta-row">
          <span class="book-genre-tag">${book.genre}</span>
          <span class="book-status-tag ${isFullText ? 'status-full' : 'status-info'}">
            ${isFullText ? 'Obra completa' : 'Ficha editorial'}
          </span>
        </div>

        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">Por ${book.author}</p>
        <p class="book-desc">${book.description}</p>

        ${
          progress
            ? `
          <div class="book-progress-mini">
            <div style="display:flex;justify-content:space-between;font-size:0.74rem;font-weight:600;color:var(--color-navy);">
              <span>${progress.completed ? 'Lectura terminada' : 'Tu avance'}</span>
              <span>${progress.percentage}%</span>
            </div>
            <div class="book-progress-bar">
              <div class="book-progress-fill" style="width: ${progress.percentage}%;"></div>
            </div>
          </div>
        `
            : ''
        }

        ${
          quizResult
            ? `
          <div style="font-size:0.74rem;font-weight:700;color:var(--color-success);margin-bottom:0.65rem;">
            ✓ Cuestionario resuelto (${quizResult.score}/${quizResult.total} aciertos)
          </div>
        `
            : ''
        }

        <div class="book-actions">
          <button type="button" class="btn btn-primary btn-sm" data-read-book="${book.id}">
            <span>Leer libro</span>
          </button>
          <button
            type="button"
            class="btn btn-outline-navy btn-sm"
            data-quiz-book="${book.id}"
            title="Responder preguntas de comprensión y reflexión"
          >
            <span>Preguntas</span>
          </button>
        </div>
      </div>
    </article>
  `;
}
