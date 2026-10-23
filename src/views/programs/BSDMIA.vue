<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="program-page bsdmia-theme">
        <div class="nav-bar-sub">
      <div class="page-container">
        <div class="breadcrumbs">
          <RouterLink to="/" class="crumb-link">Home</RouterLink>
          <span class="crumb-sep">/</span>
          <RouterLink to="/#programs" class="crumb-link">Programs Offered</RouterLink>
          <span class="crumb-sep">/</span>
          <span class="crumb-current">BSDMIA</span>
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
          <h1 class="program-heading">Data Mining & Information Analytics</h1>
          <p class="program-tagline">
            Transforming complex big data into high-impact strategic intelligence through predictive modeling, statistical learning, and data visualization.
          </p>
          <div class="quick-facts">
            <div class="fact-pill">
              <span class="fact-label">Degree</span>
              <span class="fact-val">BSDMIA</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Duration</span>
              <span class="fact-val">4 Years</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Delivery</span>
              <span class="fact-val">Data Lab & Analytics-focused</span>
            </div>
          </div>
        </div>
        <div class="hero-logo-box">
          <img src="@/assets/MEDIA.png" alt="BSDMIA Logo" class="hero-logo-img" />
        </div>
      </div>
    </header>

        <main class="page-container program-content">
      
            <section class="content-card">
        <div class="card-icon-header">
          <h2>Program Overview</h2>
        </div>
        <p class="body-p">
          The Bachelor of Science in Data Mining and Information Analytics (BSDMIA) program at Central Philippine University prepares forward-thinking analysts and data scientists to extract hidden patterns, forecast behavioral trends, and guide mission-critical decisions from massive enterprise datasets.
        </p>
        <p class="body-p">
          Integrating modern applied statistics, algorithmic machine learning pipelines, cloud data warehousing, and interactive storytelling, the curriculum empowers students to bridge raw computing numbers with high-stakes corporate and scientific solutions.
        </p>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>What You Will Learn</h2>
        </div>
        <div class="grid-2col">
          <div class="skill-item">
            <h3>Data Mining & Pattern Discovery</h3>
            <p>Master clustering, association rule mining, anomaly detection, and classification algorithms across structured and unstructured data.</p>
          </div>
          <div class="skill-item">
            <h3>Predictive Analytics & Forecasting</h3>
            <p>Construct time-series projections, probabilistic regression models, and decision-tree architectures using Python and R.</p>
          </div>
          <div class="skill-item">
            <h3>Big Data Engineering & Warehousing</h3>
            <p>Architect robust ETL pipelines, manage distributed databases with Apache Spark and Hadoop, and optimize SQL/NoSQL data lakes.</p>
          </div>
          <div class="skill-item">
            <h3>Business Intelligence & Visual Storytelling</h3>
            <p>Design interactive executive dashboards, spatial data charts, and real-time operational feeds using Tableau and Microsoft PowerBI.</p>
          </div>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Career Opportunities</h2>
        </div>
        <p class="body-p">Graduates enter a booming data-driven market with versatile high-paying roles across fintech, healthcare, and global tech:</p>
        <div class="careers-chips">
          <span class="career-chip">Data Scientist / Analyst</span>
          <span class="career-chip">Business Intelligence Specialist</span>
          <span class="career-chip">Big Data Engineer</span>
          <span class="career-chip">Machine Learning Practitioner</span>
          <span class="career-chip">Information Analytics Consultant</span>
          <span class="career-chip">Database Insights Architect</span>
          <span class="career-chip">Market Research Analyst</span>
          <span class="career-chip">Operations Research Strategist</span>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Why Choose BSDMIA at CPU CCS?</h2>
        </div>
        <ul class="check-list">
          <li><strong>High-Demand Frontier Specialization:</strong> Data analytics consistently ranks among the top global growth careers across all industries.</li>
          <li><strong>Real-World Enterprise Datasets:</strong> Hands-on experience analyzing live financial, demographic, clinical, and logistics data repositories.</li>
          <li><strong>Dual Mastery of Tech & Business:</strong> Graduates speak both the technical language of computer scientists and the strategic language of business executives.</li>
          <li><strong>Advanced Analytics Software Suite:</strong> Unlimited access to enterprise analytics toolchains including Python Data Stack (pandas, scikit-learn), RStudio, SQL Server, and Tableau.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Who Should Enroll?</h2>
        </div>
        <p class="body-p">This program is designed for analytical thinkers and problem solvers who:</p>
        <ul class="bullet-list">
          <li>Have an innate fascination with uncovering trends, hidden correlations, and patterns within data.</li>
          <li>Enjoy working with statistics, predictive math, data storytelling, and strategic modeling.</li>
          <li>Aspire to advise executive leaders and make measurable organizational impact through data-driven proof.</li>
          <li>Seek a dynamic career combining computer programming, statistical inquiry, and business domain intelligence.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Analytics Labs & Computing Clusters</h2>
        </div>
        <p class="body-p">
          Students collaborate in the dedicated <strong>CCS Business Intelligence and Big Data Suite</strong>, equipped with high-RAM data science workstations and access to cloud compute clusters:
        </p>
        <div class="cert-grid">
          <div class="cert-card">
            <h4>Big Data Analytics Lab</h4>
            <p>Multi-node clusters for distributed Spark computing and high-volume ETL processing.</p>
          </div>
          <div class="cert-card">
            <h4>Data Visualization Studio</h4>
            <p>Multi-display simulation stations for crafting interactive dashboards and visual reports.</p>
          </div>
          <div class="cert-card">
            <h4>Predictive Analytics Sandbox</h4>
            <p>Cloud environments for fine-tuning machine learning models and statistical experiments.</p>
          </div>
        </div>
      </section>

            <section class="action-banner">
        <h2>Unleash the Power of Data</h2>
        <p>Enroll in the Bachelor of Science in Data Mining and Information Analytics at CPU CCS.</p>
        <div class="action-buttons">
          <RouterLink to="/admissions" class="cta-primary">Apply for Admission</RouterLink>
          <RouterLink to="/#programs" class="cta-secondary">Explore Other Programs</RouterLink>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>

.bsdmia-theme {
  --primary: #eab308;
  --primary-dark: #ca8a04;
  --accent: #fde047;
  --bg-dark: #17150c;
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
  background-color: #1a1811;
  border-bottom: 1px solid #332d18;
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
  color: #713f12;
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
  color: #fde047;
}

.program-hero {
  background: linear-gradient(135deg, #1c1912 0%, #15130b 50%, #0e0c07 100%);
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
  background-color: rgba(234, 179, 8, 0.12);
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
  background-color: #1c1a12;
  border: 1px solid #4a3e14;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}

.fact-label {
  color: #eab308;
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
  background-color: rgba(234, 179, 8, 0.04);
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
  background-color: #17150e;
  border: 1px solid #383015;
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
  background-color: #17150e;
  border: 1px solid #4a3e14;
  color: #fef08a;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.career-chip:hover {
  background-color: var(--primary);
  border-color: var(--accent);
  color: #1c1917;
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
  background-color: #17150e;
  border: 1px solid #383015;
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
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, #17150e 100%);
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
  color: #17150e;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.cta-primary:hover {
  background-color: #ffffff;
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
