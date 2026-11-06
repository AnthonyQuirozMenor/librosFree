import { siteConfig } from '../data/config.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand-logo" style="margin-bottom: 0.75rem;">
              <img src="./src/assets/images/logo-librosfree.svg" alt="Logo LibrosFree" class="brand-logo-icon" />
              <div class="brand-text-wrap">
                <span class="brand-name" style="color: var(--color-cream);">LIBROS<span>FREE</span></span>
              </div>
            </div>
            <p style="color: var(--color-gold); font-family: var(--font-serif); font-style: italic; margin-bottom: 0.6rem;">
              "${siteConfig.slogan}"
            </p>
            <p style="font-size: 0.88rem; color: rgba(250, 247, 240, 0.78); max-width: 390px;">
              Biblioteca digital gratuita dedicada a adolescentes y jóvenes para fomentar el hábito de la lectura y promover con orgullo la literatura peruana y universal.
            </p>
          </div>

          <div>
            <h4 class="footer-title">Explorar</h4>
            <ul class="footer-links">
              <li><button type="button" data-nav="inicio">Inicio</button></li>
              <li><button type="button" data-nav="catalogo">Catálogo de libros</button></li>
              <li><button type="button" data-nav="autores">Nuestros autores</button></li>
              <li><button type="button" data-nav="favoritos">Mis favoritos</button></li>
              <li><button type="button" data-nav="mi-lectura">Mi lectura</button></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Institucional</h4>
            <ul class="footer-links">
              <li><button type="button" data-nav="equipo">Nuestro equipo</button></li>
              <li><button type="button" data-nav="sobre-nosotros">Sobre nosotros</button></li>
              <li><button type="button" data-nav="contacto">Contacto</button></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} LIBROSFREE – Biblioteca Digital Gratuita. Acceso libre sin registro.</span>
          <span>Respeto estricto a los Derechos de Autor y difusión del Dominio Público Cultural.</span>
        </div>
      </div>
    </footer>
  `;
}
