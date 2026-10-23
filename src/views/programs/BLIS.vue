<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="program-page blis-theme">
        <div class="nav-bar-sub">
      <div class="page-container">
        <div class="breadcrumbs">
          <RouterLink to="/" class="crumb-link">Home</RouterLink>
          <span class="crumb-sep">/</span>
          <RouterLink to="/#programs" class="crumb-link">Programs Offered</RouterLink>
          <span class="crumb-sep">/</span>
          <span class="crumb-current">BLIS</span>
        </div>
                <RouterLink to="/#programs" class="back-link">
          &larr; Back to Programs
        </RouterLink>
      </div>
    </div>

        <header class="program-hero">
      <div class="page-container hero-grid">
        <div class="hero-text">
          <div class="program-badge">Bachelor of Science</div>
          <h1 class="program-heading">Library & Information Science</h1>
          <p class="program-tagline">
            Curating human knowledge, modernizing digital libraries, and engineering archival information systems for the digital age.
          </p>
          <div class="quick-facts">
            <div class="fact-pill">
              <span class="fact-label">Degree</span>
              <span class="fact-val">BLIS</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Duration</span>
              <span class="fact-val">4 Years</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Licensure</span>
              <span class="fact-val">PRC Board-Eligible</span>
            </div>
          </div>
        </div>
        <div class="hero-logo-box">
          <img src="@/assets/BLIS.png" alt="BLIS Logo" class="hero-logo-img" />
        </div>
      </div>
    </header>

        <main class="page-container program-content">
      
            <section class="content-card">
        <div class="card-icon-header">
          <h2>Program Overview</h2>
        </div>
        <p class="body-p">
          The Bachelor of Library and Information Science (BLIS) program at Central Philippine University prepares information leaders to curate, organize, evaluate, preserve, and disseminate recorded human knowledge across both physical libraries and modern digital repositories.
        </p>
        <p class="body-p">
          Blending the traditions of bibliographic classification with cutting-edge cloud information retrieval, digital heritage preservation, and automated Integrated Library Systems (ILS), BLIS graduates lead global institutional knowledge governance and qualifies students for the PRC Board Licensure Examination for Librarians.
        </p>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>What You Will Learn</h2>
        </div>
        <div class="grid-2col">
          <div class="skill-item">
            <h3>Digital Preservation & Electronic Curation</h3>
            <p>Master digitization workflows, optical character recognition (OCR), audio-visual archiving, and electronic file format sustainability.</p>
          </div>
          <div class="skill-item">
            <h3>Metadata Engineering & Taxonomy</h3>
            <p>Implement world-standard metadata schema including MARC21, Dublin Core, RDA, and Resource Description Framework (RDF) vocabularies.</p>
          </div>
          <div class="skill-item">
            <h3>Integrated Library Systems (ILS)</h3>
            <p>Administer automated library management platforms such as Koha, DSpace institutional repositories, and cloud-hosted catalogs.</p>
          </div>
          <div class="skill-item">
            <h3>Knowledge Management & Research Analytics</h3>
            <p>Conduct advanced bibliometric analysis, open-access scholarly publishing management, and corporate information governance.</p>
          </div>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Career Opportunities</h2>
        </div>
        <p class="body-p">BLIS graduates qualify for prestigious roles across academic universities, government agencies, corporate headquarters, and legal archives:</p>
        <div class="careers-chips">
          <span class="career-chip">Licensed Professional Librarian</span>
          <span class="career-chip">Digital Archivist / Curator</span>
          <span class="career-chip">Knowledge Management Officer</span>
          <span class="career-chip">Metadata & Cataloging Specialist</span>
          <span class="career-chip">Corporate Information Architect</span>
          <span class="career-chip">Law & Medical Records Custodian</span>
          <span class="career-chip">Institutional Repository Manager</span>
          <span class="career-chip">Scholarly Communications Specialist</span>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Why Choose BLIS at CPU CCS?</h2>
        </div>
        <ul class="check-list">
          <li><strong>Consistently High Board Exam Passing Rate:</strong> CPU BLIS graduates routinely surpass national passing averages on the PRC Licensure Examination.</li>
          <li><strong>Living Laboratory at Henry Luce III Library:</strong> Direct practicum experience within Western Visayas' largest academic research repository and digital heritage library.</li>
          <li><strong>Rare & High-Demand Profession:</strong> High immediate employment demand in private corporations, international schools, government agencies, and research bodies.</li>
          <li><strong>Technological Convergence:</strong> Modernized curriculum integrating digital archives, automated cataloging servers, and electronic records databases.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Who Should Enroll?</h2>
        </div>
        <p class="body-p">This program is designed for organized, knowledge-seeking students who:</p>
        <ul class="bullet-list">
          <li>Possess a deep passion for books, historical preservation, intellectual freedom, and research.</li>
          <li>Appreciate structured categorization, data indexing, and making knowledge readily discoverable.</li>
          <li>Aspire to achieve a government-recognized PRC professional license upon graduation.</li>
          <li>Desire a career serving educational institutions, legal archives, cultural museums, or corporate intelligence teams.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Digital Archives & Knowledge Centers</h2>
        </div>
        <p class="body-p">
          BLIS students complete hands-on practicum coursework inside Central Philippine University's specialized information environments:
        </p>
        <div class="cert-grid">
          <div class="cert-card">
            <h4>Henry Luce III Digital Heritage Center</h4>
            <p>Equipped with overhead book scanners, microform readers, and archival acid-free preservation suites.</p>
          </div>
          <div class="cert-card">
            <h4>Koha Open-Source Automation Lab</h4>
            <p>Dedicated server environments for testing library circulation, cataloging, and OPAC customization.</p>
          </div>
          <div class="cert-card">
            <h4>Electronic Resource Center</h4>
            <p>High-speed research terminals connected to global subscription databases like EBSCOhost, ProQuest, and ScienceDirect.</p>
          </div>
        </div>
      </section>

            <section class="action-banner">
        <h2>Preserve and Empower Knowledge</h2>
        <p>Enroll in the Bachelor of Library and Information Science at CPU College of Computer Studies.</p>
        <div class="action-buttons">
          <RouterLink to="/admissions" class="cta-primary">Apply for Admission</RouterLink>
          <RouterLink to="/#programs" class="cta-secondary">Explore Other Programs</RouterLink>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>

.blis-theme {
  --primary: #16a34a;
  --primary-dark: #15803d;
  --accent: #4ade80;
  --bg-dark: #071f11;
  --card-bg: #1e1e1e;
  --card-border: #383838;
}

.program-page {
  width: 100%;
  color: #f1f5f9;
  background-color: #121212;
  padding-bottom: 4rem;
}

.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.nav-bar-sub {
  background-color: #0b1f12;
  border-bottom: 1px solid #144023;
  padding: 0.75rem 0;
}

.nav-bar-sub .page-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.crumb-link {
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.15s ease;
}

.crumb-link:hover {
  color: var(--accent);
}

.crumb-sep {
  color: #166534;
}

.crumb-current {
  color: var(--accent);
  font-weight: 600;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #d4d4d8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.15s ease;
}

.back-link:hover {
  color: #4ade80;
}

.program-hero {
  background: linear-gradient(135deg, #0d2215 0%, #09170e 50%, #061109 100%);
  border-bottom: 3px solid var(--primary);
  padding: 3.5rem 0;
}

.hero-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-text {
  flex: 1;
}

.program-badge {
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(22, 163, 74, 0.15);
  border: 1px solid var(--primary);
  color: var(--accent);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.program-heading {
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.program-tagline {
  font-size: 17px;
  line-height: 1.6;
  color: #d4d4d8;
  margin-bottom: 1.5rem;
  max-width: 650px;
}

.quick-facts {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.fact-pill {
  background-color: #0d1f13;
  border: 1px solid #1e4d2b;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}

.fact-label {
  color: #4ade80;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.fact-val {
  color: #ffffff;
  font-weight: 700;
  margin-top: 2px;
}

.hero-logo-box {
  width: 160px;
  height: 160px;
  background-color: rgba(22, 163, 74, 0.05);
  border: 2px solid var(--primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-shrink: 0;
}

.hero-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.program-content {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-card {
  background-color: #1e1e1e;
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.card-icon-header {
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #333333;
  padding-bottom: 0.75rem;
}

.card-icon-header h2 {
  font-size: 22px;
  color: #ffffff;
  margin: 0;
}

.body-p {
  font-size: 15px;
  line-height: 1.7;
  color: #d4d4d8;
  margin: 0 0 1rem 0;
}

.body-p:last-child {
  margin-bottom: 0;
}

.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item {
  background-color: #0c1c11;
  border: 1px solid #164024;
  border-radius: 8px;
  padding: 1.25rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.skill-item:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.skill-item h3 {
  font-size: 16px;
  color: var(--accent);
  margin: 0 0 0.5rem 0;
}

.skill-item p {
  font-size: 14px;
  color: #a1a1aa;
  line-height: 1.6;
  margin: 0;
}

.careers-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.career-chip {
  padding: 8px 16px;
  background-color: #0c1c11;
  border: 1px solid #1e4d2b;
  color: #bbf7d0;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.career-chip:hover {
  background-color: var(--primary);
  border-color: var(--accent);
  color: #052e16;
}

.check-list, .bullet-list {
  padding-left: 1.25rem;
  margin: 0;
  color: #d4d4d8;
  line-height: 1.8;
  font-size: 15px;
}

.check-list li, .bullet-list li {
  margin-bottom: 0.5rem;
}

.check-list strong {
  color: #ffffff;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.25rem;
}

.cert-card {
  background-color: #0c1c11;
  border: 1px solid #164024;
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.cert-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.cert-card h4 {
  font-size: 15px;
  color: var(--accent);
  margin: 0 0 0.4rem 0;
}

.cert-card p {
  font-size: 13px;
  color: #a1a1aa;
  margin: 0;
  line-height: 1.5;
}

.action-banner {
  background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, #0b1f12 100%);
  border: 1px solid var(--primary);
  border-radius: 12px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  margin-top: 1rem;
}

.action-banner h2 {
  font-size: 26px;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.action-banner p {
  color: #d4d4d8;
  font-size: 15px;
  margin: 0 0 1.5rem 0;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.cta-primary {
  padding: 12px 24px;
  background-color: var(--primary);
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.cta-primary:hover {
  background-color: #ffffff;
  color: #052e16;
  transform: translateY(-2px);
}

.cta-secondary {
  padding: 12px 24px;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #52525b;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.cta-secondary:hover {
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.05);
}

@media (max-width: 900px) {
  .hero-grid {
    flex-direction: column-reverse;
    text-align: center;
  }
  .program-heading {
    font-size: 30px;
  }
  .program-tagline {
    margin: 0 auto 1.5rem auto;
  }
  .quick-facts {
    justify-content: center;
  }
  .grid-2col {
    grid-template-columns: 1fr;
  }
  .cert-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .program-heading {
    font-size: 26px;
  }
  .content-card {
    padding: 1.5rem 1rem;
  }
  .action-buttons {
    flex-direction: column;
  }
  .cta-primary, .cta-secondary {
    width: 100%;
  }
}
</style>
