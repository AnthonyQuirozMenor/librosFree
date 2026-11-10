import { booksData } from '../data/books.js';
import { bookQuizzes } from '../data/quizzes.js';
import {
  saveBookReadingProgress,
  getReaderPreferences,
  isBookFavorite,
  getBookQuizResult
} from '../utils/storage.js';

export function renderReaderPage(state) {
  const { activeBookId, currentPageIndex = 0, pdfMode = false, quizMode = false } = state;
  const book = booksData.find((b) => b.id === activeBookId) || booksData[0];
  const quizData = bookQuizzes[book.id];
  const savedQuiz = getBookQuizResult(book.id);
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

            <!-- Botón Cuestionario y Reflexión -->
            ${
              quizData
                ? `
              <button
                type="button"
                class="reader-ctrl-btn ${quizMode ? 'active' : ''}"
                data-reader-toggle-quiz="true"
                style="border:1.5px solid var(--color-gold);"
              >
                ${quizMode ? '📖 Volver al texto' : '📝 Cuestionario y Reflexión'}
              </button>
            `
                : ''
            }

            ${
              book.pdfUrl
                ? `
              <button type="button" class="reader-ctrl-btn ${pdfMode ? 'active' : ''}" data-reader-toggle-pdf="true" style="border:1px solid var(--color-gold);">
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

        <!-- Barra de Progreso de Lectura -->
        <div class="reader-progress-strip">
          <span>${quizMode ? 'Actividad de Comprensión' : `Página ${safePageIndex + 1} de ${totalPages}`}</span>
          <div class="reader-progress-track" aria-label="Progreso de lectura">
            <div class="reader-progress-bar-fill" style="width: ${progress.percentage}%;"></div>
          </div>
          <span>${progress.percentage}% leído</span>
        </div>

        ${
          isFicha && !quizMode
            ? `
          <div class="info-card" style="margin-bottom: 1rem; border-left: 4px solid #d97706; background-color: #fffbeb; color: #78350f; padding: 0.9rem 1.15rem; font-size: 0.85rem;">
            <strong>Ficha Informativa Legal:</strong> Esta obra cuenta con derechos de autor vigentes. LibrosFree presenta únicamente su ficha bibliográfica y análisis educativo sin reproducir el texto protegido.
          </div>
        `
            : ''
        }

        <!-- Superficie Principal: Cuestionario, PDF o Lectura Paginada -->
        <article class="reader-page-surface">
          ${
            quizMode && quizData
              ? renderQuizSection(book, quizData, savedQuiz)
              : pdfMode && book.pdfUrl
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

          <!-- Controles Inferiores -->
          ${
            quizMode
              ? `
            <div class="reader-pagination-bar">
              <button type="button" class="reader-nav-btn" data-reader-toggle-quiz="true">
                ← Volver a la lectura del libro
              </button>
              <button type="button" class="btn btn-outline-navy btn-sm" data-nav="mi-lectura">
                Ver mi historial en Mi lectura
              </button>
            </div>
          `
              : `
            <div class="reader-pagination-bar">
              <button
                type="button"
                class="reader-nav-btn"
                data-reader-page="${safePageIndex - 1}"
                ${safePageIndex === 0 ? 'disabled' : ''}
              >
                ← Anterior
              </button>

              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;justify-content:center;">
                <button
                  type="button"
                  class="btn btn-gold btn-sm"
                  data-reader-toggle-quiz="true"
                >
                  📝 Responder Cuestionario
                </button>
                <button
                  type="button"
                  class="btn btn-outline-navy btn-sm"
                  data-mark-completed="${book.id}"
                >
                  ${progress.completed ? '✓ Libro terminado' : 'Marcar terminado'}
                </button>
              </div>

              <button
                type="button"
                class="reader-nav-btn"
                data-reader-page="${safePageIndex + 1}"
                ${safePageIndex >= totalPages - 1 ? 'disabled' : ''}
              >
                Siguiente →
              </button>
            </div>
          `
          }
        </article>
      </div>
    </div>
  `;
}

function renderQuizSection(book, quizData, savedQuiz) {
  return `
    <div class="quiz-box">
      <div>
        <span class="section-kicker">Comprensión y Pensamiento Crítico</span>
        <h3 class="reader-chapter-heading" style="margin-top:0.25rem;margin-bottom:0.4rem;">
          Cuestionario y Reflexión: ${book.title}
        </h3>
        <p style="font-size:0.9rem;opacity:0.85;">
          Responde las preguntas sobre la obra de <strong>${book.author}</strong> y escribe tu reflexión personal. Tus respuestas se guardarán automáticamente en tu navegador.
        </p>
      </div>

      ${
        savedQuiz
          ? `
        <div class="quiz-score-banner">
          <div>
            <strong style="color:var(--color-gold);display:block;font-size:1rem;">
              ¡Cuestionario completado! Obtuviste ${savedQuiz.score} de ${savedQuiz.total} respuestas correctas
            </strong>
            <span style="font-size:0.82rem;opacity:0.88;">
              Puedes revisar las explicaciones debajo o actualizar tus respuestas y reflexión cuando desees.
            </span>
          </div>
        </div>
      `
          : ''
      }

      <form id="bookQuizForm" data-quiz-book-id="${book.id}" class="quiz-box">
        ${quizData.questions
          .map((item, qIdx) => {
            const userSelected = savedQuiz && savedQuiz.answers ? savedQuiz.answers[qIdx] : null;
            return `
            <div class="quiz-question-card">
              <div class="quiz-question-title">
                ${qIdx + 1}. ${item.q}
              </div>
              <div class="quiz-options-list">
                ${item.options
                  .map((optText, optIdx) => {
                    const isChecked = userSelected === optIdx;
                    let feedbackClass = '';
                    if (savedQuiz !== null && userSelected !== null) {
                      if (optIdx === item.correct) feedbackClass = 'correct-choice';
                      else if (isChecked && optIdx !== item.correct) feedbackClass = 'wrong-choice';
                    }
                    return `
                    <label class="quiz-option-label ${feedbackClass}">
                      <input
                        type="radio"
                        name="quiz_q_${qIdx}"
                        value="${optIdx}"
                        ${isChecked ? 'checked' : ''}
                        required
                        style="margin-top:0.22rem;"
                      />
                      <span>${optText}</span>
                    </label>
                  `;
                  })
                  .join('')}
              </div>
              ${
                savedQuiz
                  ? `
                <div class="quiz-explanation">
                  <strong>Explicación:</strong> ${item.explanation}
                </div>
              `
                  : ''
              }
            </div>
          `;
          })
          .join('')}

        <!-- Pregunta de Reflexión Personal -->
        <div class="quiz-question-card" style="border-left: 4px solid var(--color-gold);">
          <div class="quiz-question-title">
            💭 Pregunta de Reflexión Personal
          </div>
          <p style="font-size:0.9rem;margin-bottom:0.65rem;">
            ${quizData.reflectionPrompt}
          </p>
          <textarea
            id="quizReflectionInput"
            rows="3"
            class="form-control"
            placeholder="Escribe aquí tu opinión o reflexión personal sobre la lectura..."
            required
          >${savedQuiz && savedQuiz.reflection ? savedQuiz.reflection : ''}</textarea>
        </div>

        <button type="submit" class="btn btn-gold" style="align-self:flex-start;">
          ✓ Calificar cuestionario y guardar reflexión
        </button>
      </form>
    </div>
  `;
}
