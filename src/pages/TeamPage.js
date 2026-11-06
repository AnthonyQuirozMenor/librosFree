import { teamSectionInfo, teamMembers } from '../data/team.js';

export function renderTeamPage() {
  return `
    <section class="section-block">
      <div class="container">
        <div class="section-header" style="text-align: center; align-items: center; max-width: 740px; margin: 0 auto 2.5rem;">
          <span class="section-kicker">${teamSectionInfo.kicker}</span>
          <h1 class="section-title">${teamSectionInfo.heading}</h1>
          <p class="section-subtitle" style="max-width: 680px;">
            ${teamSectionInfo.description}
          </p>
        </div>

        <div class="team-grid">
          ${teamMembers
            .map(
              (member, idx) => `
            <article class="team-card">
              <div class="team-photo-wrap">
                <img
                  src="${member.photo}"
                  alt="Espacio reservado para fotografía de ${member.fullName}"
                  loading="lazy"
                  style="width:100%;height:100%;object-fit:cover;"
                />
              </div>
              <span style="font-size:0.72rem;font-weight:700;color:var(--color-text-muted);letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:0.25rem;">
                Integrante 0${idx + 1}
              </span>
              <h3 class="team-name">${member.fullName}</h3>
              <span class="team-role">${member.role}</span>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
