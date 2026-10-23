<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="program-page bsit-theme">
        <div class="nav-bar-sub">
      <div class="page-container">
        <div class="breadcrumbs">
          <RouterLink to="/" class="crumb-link">Home</RouterLink>
          <span class="crumb-sep">/</span>
          <RouterLink to="/#programs" class="crumb-link">Programs Offered</RouterLink>
          <span class="crumb-sep">/</span>
          <span class="crumb-current">BSIT</span>
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
          <h1 class="program-heading">Information Technology</h1>
          <p class="program-tagline">
            Bridging computing technology, enterprise infrastructure, and digital solutions to drive industry innovation.
          </p>
          <div class="quick-facts">
            <div class="fact-pill">
              <span class="fact-label">Degree</span>
              <span class="fact-val">BSIT</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Duration</span>
              <span class="fact-val">4 Years</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Delivery</span>
              <span class="fact-val">Full-time / Lab-intensive</span>
            </div>
          </div>
        </div>
        <div class="hero-logo-box">
          <img src="@/assets/IT.png" alt="BSIT Logo" class="hero-logo-img" />
        </div>
      </div>
    </header>

        <main class="page-container program-content">
      
            <section class="content-card">
        <div class="card-icon-header">
          <h2>Program Overview</h2>
        </div>
        <p class="body-p">
          The Bachelor of Science in Information Technology (BSIT) program at Central Philippine University equips students to become competent technology professionals capable of designing, configuring, implementing, and managing modern computer-based information systems and network infrastructures.
        </p>
        <p class="body-p">
          The curriculum bridges the vital intersection of computer science, systems administration, and organizational leadership, emphasizing hands-on laboratory mastery, real-world industry certifications, and secure cloud-native architecture.
        </p>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>What You Will Learn</h2>
        </div>
        <div class="grid-2col">
          <div class="skill-item">
            <h3>Enterprise Network Engineering</h3>
            <p>Design, configure, and troubleshoot enterprise LAN/WAN architectures, switching protocols, IP routing, and wireless infrastructure.</p>
          </div>
          <div class="skill-item">
            <h3>Systems & Cloud Administration</h3>
            <p>Deploy and maintain Linux/Windows server environments, virtualization technologies, and public cloud services (AWS, Google Cloud).</p>
          </div>
          <div class="skill-item">
            <h3>Cybersecurity & Information Assurance</h3>
            <p>Implement firewalls, access control lists, network intrusion detection systems, vulnerability scanning, and cybersecurity defenses.</p>
          </div>
          <div class="skill-item">
            <h3>Web & Database Management</h3>
            <p>Architect robust relational database systems using SQL, integrate REST APIs, and develop full-stack administrative portals.</p>
          </div>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Career Opportunities</h2>
        </div>
        <p class="body-p">Graduates of the BSIT program are prepared for high-demand technology roles across domestic and multinational industries:</p>
        <div class="careers-chips">
          <span class="career-chip">Network Systems Administrator</span>
          <span class="career-chip">Cloud Solutions Architect</span>
          <span class="career-chip">Cybersecurity Specialist</span>
          <span class="career-chip">Database Administrator (DBA)</span>
          <span class="career-chip">IT Project Manager</span>
          <span class="career-chip">Technical Support Engineer</span>
          <span class="career-chip">DevOps Engineer</span>
          <span class="career-chip">Web Operations Specialist</span>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Why Choose BSIT at CPU CCS?</h2>
        </div>
        <ul class="check-list">
          <li><strong>Global Industry Alliances:</strong> Curriculum integrated with Cisco Networking Academy, Oracle Academy, and Huawei ICT Academy.</li>
          <li><strong>State-of-the-Art Laboratories:</strong> Dedicated hardware networking racks, server simulation rooms, and software development stations.</li>
          <li><strong>Certification-Driven Learning:</strong> Preparation for internationally recognized certifications including CCNA, CompTIA Security+, and Oracle Certified Associate.</li>
          <li><strong>Proven Employment Rate:</strong> CCS graduates consistently achieve exceptional placement rates across multinational IT conglomerates and startup hubs.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Who Should Enroll?</h2>
        </div>
        <p class="body-p">This program is ideal for senior high school graduates and prospective students who:</p>
        <ul class="bullet-list">
          <li>Enjoy working with physical and cloud computing infrastructure, routers, switches, and operating systems.</li>
          <li>Aspire to protect enterprise organizations from cyber threats and maintain continuous digital uptime.</li>
          <li>Prefer hands-on, applied technology management over abstract pure mathematics.</li>
          <li>Possess analytical problem-solving skills and a passion for continuous learning in an evolving tech landscape.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Facilities & Certifications</h2>
        </div>
        <p class="body-p">
          Students gain direct access to the <strong>CPU Cisco Networking Laboratory</strong>, enterprise server virtualization clusters, and automated network testing gear. Integrated certification pathways include:
        </p>
        <div class="cert-grid">
          <div class="cert-card">
            <h4>Cisco CCNA Routing & Switching</h4>
            <p>Hands-on topology configuration with enterprise Cisco routers and catalyst switches.</p>
          </div>
          <div class="cert-card">
            <h4>Oracle Certified Associate (OCA)</h4>
            <p>Database modeling, SQL queries, PL/SQL stored procedures, and administration.</p>
          </div>
          <div class="cert-card">
            <h4>Cloud Practitioner (AWS / GCP)</h4>
            <p>Deploying resilient microservices, storage buckets, and IAM policy architectures.</p>
          </div>
        </div>
      </section>

            <section class="action-banner">
        <h2>Ready to Build the Tech Future?</h2>
        <p>Enroll in the Bachelor of Science in Information Technology at CPU College of Computer Studies.</p>
        <div class="action-buttons">
          <RouterLink to="/admissions" class="cta-primary">Apply for Admission</RouterLink>
          <RouterLink to="/#programs" class="cta-secondary">Explore Other Programs</RouterLink>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>

.bsit-theme {
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
