import { siteConfig } from '../data/config.js';

export function renderAboutPage() {
  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">Identidad y Propósito</span>
          <h1 class="section-title">Sobre nosotros</h1>
          <p class="section-subtitle">
            Conoce la historia, los valores culturales y el compromiso educativo detrás de la plataforma LibrosFree.
          </p>
        </div>

        <!-- Misión y Visión -->
        <div class="about-grid" style="margin-bottom: 1.75rem;">
          <div class="info-card highlight">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-gold);font-weight:700;">Nuestra Misión</span>
            <h3 style="font-size:1.35rem;margin:0.4rem 0 0.75rem;">Acceso libre al hábito lector</h3>
            <p style="font-size:1rem;line-height:1.65;color:var(--color-cream);">
              "${siteConfig.mission}"
            </p>
          </div>

          <div class="info-card highlight">
            <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-gold);font-weight:700;">Nuestra Visión</span>
            <h3 style="font-size:1.35rem;margin:0.4rem 0 0.75rem;">Cultura para nuevas generaciones</h3>
            <p style="font-size:1rem;line-height:1.65;color:var(--color-cream);">
              "${siteConfig.vision}"
            </p>
          </div>
        </div>

        <!-- Pilares Explicativos -->
        <div class="about-grid">
          <article class="info-card">
            <h3 style="font-size:1.22rem;margin-bottom:0.65rem;">¿Qué es LibrosFree?</h3>
            <p style="font-size:0.93rem;color:var(--color-text-body);">
              <strong>LibrosFree</strong> es una biblioteca digital gratuita y abierta pensada especialmente para adolescentes y jóvenes. Permite explorar, descubrir y leer obras literarias clásicas, cuentos, novelas, poesía y textos culturales directamente desde cualquier celular, tablet o computadora sin necesidad de registros ni pagos.
            </p>
          </article>

          <article class="info-card">
            <h3 style="font-size:1.22rem;margin-bottom:0.65rem;">¿Cuál es nuestro propósito?</h3>
            <p style="font-size:0.93rem;color:var(--color-text-body);">
              Nuestro propósito es derribar las barreras de acceso a los libros mediante una experiencia de lectura digital moderna, cómoda y amigable con los dispositivos móviles, poniendo al alcance de los estudiantes obras íntegras de dominio público y guías educativas confiables.
            </p>
          </article>

          <article class="info-card">
            <h3 style="font-size:1.22rem;margin-bottom:0.65rem;">¿Por qué promovemos la lectura?</h3>
            <p style="font-size:0.93rem;color:var(--color-text-body);">
              La lectura despierta la imaginación, fortalece el pensamiento crítico, amplía el vocabulario y cultiva la empatía. En una época de consumo digital acelerado, ofrecer un espacio sereno y atractivo para leer ayuda a que los jóvenes descubran el placer de sumergirse en una buena historia.
            </p>
          </article>

          <article class="info-card">
            <h3 style="font-size:1.22rem;margin-bottom:0.65rem;">La importancia de la literatura peruana</h3>
            <p style="font-size:0.93rem;color:var(--color-text-body);">
              La literatura peruana es un tesoro vivo que refleja la diversidad de nuestras regiones, lenguas y memorias. Leer a César Vallejo, Abraham Valdelomar, Ricardo Palma, Clorinda Matto de Turner, José María Arguedas y Mario Vargas Llosa nos permite comprender nuestras raíces y proyectar nuestra identidad cultural hacia el futuro.
            </p>
          </article>
        </div>
      </div>
    </section>
  `;
}

