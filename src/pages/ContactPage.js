import { siteConfig } from '../data/config.js';

export function renderContactPage() {
  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">Canales de Comunicación</span>
          <h1 class="section-title">Contacto</h1>
          <p class="section-subtitle">
            ¿Tienes sugerencias de obras de dominio público, comentarios educativos o consultas sobre el proyecto? Escríbenos a través de nuestro formulario.
          </p>
        </div>

        <div class="contact-layout">
          <div class="info-card">
            <span class="section-kicker">Datos del Proyecto</span>
            <h2 style="font-size: 1.45rem; margin: 0.35rem 0 0.75rem;">${siteConfig.projectName}</h2>
            <p style="font-size: 0.92rem; color: var(--color-text-body); margin-bottom: 1.4rem;">
              "${siteConfig.slogan}" — Plataforma digital gratuita de fomento a la lectura juvenil y difusión de la literatura peruana.
            </p>

            <div style="margin-bottom: 1.35rem; padding: 0.9rem 1rem; border-radius: var(--radius-md); background-color: var(--color-cream); border-left: 3px solid var(--color-gold);">
              <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--color-navy); margin-bottom: 0.25rem;">
                Correo Electrónico Oficial (Configurable)
              </div>
              <div style="font-size: 0.88rem; color: var(--color-text-body);">
                ${siteConfig.contact.emailPlaceholder}
              </div>
            </div>

            <div style="padding: 0.9rem 1rem; border-radius: var(--radius-md); background-color: var(--color-cream); border-left: 3px solid var(--color-navy);">
              <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--color-navy); margin-bottom: 0.5rem;">
                Redes Sociales (Configurables)
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem;">
                ${siteConfig.contact.socialLinks
                  .map(
                    (s) => `
                  <li style="display:flex;align-items:center;justify-content:space-between;font-size:0.86rem;">
                    <span style="font-weight:600;color:var(--color-navy);">${s.name}</span>
                    <span style="font-size:0.76rem;color:var(--color-text-muted);background:#fff;padding:0.15rem 0.55rem;border-radius:99px;border:1px solid var(--color-gray-border);">${s.status}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="info-card">
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Formulario de contacto</h3>
            <form id="contactVisualForm">
              <div class="form-group">
                <label class="form-label" for="contactName">Nombre completo</label>
                <input type="text" id="contactName" class="form-control" placeholder="Escribe tu nombre" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contactEmail">Correo electrónico</label>
                <input type="email" id="contactEmail" class="form-control" placeholder="tucorreo@ejemplo.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contactSubject">Motivo del mensaje</label>
                <select id="contactSubject" class="form-control">
                  <option value="Sugerencia de libro">Sugerencia de obra de dominio público</option>
                  <option value="Comentario educativo">Comentario o felicitación al equipo</option>
                  <option value="Consulta general">Consulta general sobre LibrosFree</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contactMessage">Mensaje</label>
                <textarea id="contactMessage" rows="4" class="form-control" placeholder="Cuéntanos qué obra o autor te gustaría leer en LibrosFree..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
