import { authorsData } from '../data/authors.js';

export function renderAuthorsPage() {
  const peruvianAuthors = authorsData.filter((a) => a.isPeruvian);
  const universalAuthors = authorsData.filter((a) => !a.isPeruvian);

  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">Nuestros Autores</span>
          <h1 class="section-title">Grandes voces de la literatura peruana y universal</h1>
          <p class="section-subtitle">
            Conoce la vida, trayectoria y legado de los escritores que integran el catálogo de LibrosFree, con especial protagonismo a las plumas fundamentales del Perú.
          </p>
        </div>

        <!-- Protagonismo Especial: Autores Peruanos -->
        <div style="margin-bottom: 2.8rem;">
          <div style="display:flex;align-items:center;gap:0.65rem;margin-bottom:1.25rem;">
            <span class="book-badge-top badge-peru" style="position:static;">Protagonismo Especial</span>
            <h2 style="font-size: 1.45rem;">Escritores Peruanos</h2>
          </div>

          <div class="authors-grid">
            ${peruvianAuthors.map((author) => renderAuthorItem(author)).join('')}
          </div>
        </div>

        <!-- Autores de la Literatura Universal -->
        <div>
          <div style="display:flex;align-items:center;gap:0.65rem;margin-bottom:1.25rem;">
            <span class="book-badge-top badge-ficha" style="position:static;">Clásicos del Mundo</span>
            <h2 style="font-size: 1.45rem;">Autores de la Literatura Universal</h2>
          </div>

          <div class="authors-grid">
            ${universalAuthors.map((author) => renderAuthorItem(author)).join('')}
          </div>
        </div>

        <!-- Nota de Derechos de Autor -->
        <div class="info-card" style="margin-top: 2.5rem; border-left: 4px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; margin-bottom: 0.35rem;">Compromiso con los Derechos de Autor</h3>
          <p style="font-size: 0.88rem; color: var(--color-text-body);">
            LibrosFree publica textos completos únicamente de obras que se encuentran en el <strong>dominio público</strong> o cuentan con licencia abierta. Para autores cuyas obras poseen derechos patrimoniales vigentes (como Mario Vargas Llosa o José María Arguedas), ofrecemos exclusivamente su ficha informativa y guía cultural sin reproducir el texto protegido.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderAuthorItem(author) {
  return `
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
        <div class="author-works-label">Obras disponibles en la biblioteca:</div>
        <div class="author-works-list">${author.availableWorks.join(' · ')}</div>
      </div>
      <button type="button" class="btn btn-primary btn-sm" data-explore-author="${author.id}">
        Explorar sus libros
      </button>
    </article>
  `;
}

