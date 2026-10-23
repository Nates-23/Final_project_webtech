<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="program-page bscs-theme">
        <div class="nav-bar-sub">
      <div class="page-container">
        <div class="breadcrumbs">
          <RouterLink to="/" class="crumb-link">Home</RouterLink>
          <span class="crumb-sep">/</span>
          <RouterLink to="/#programs" class="crumb-link">Programs Offered</RouterLink>
          <span class="crumb-sep">/</span>
          <span class="crumb-current">BSCS</span>
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
          <h1 class="program-heading">Computer Science</h1>
          <p class="program-tagline">
            Mastering computational theory, complex algorithms, systems security, and advanced software engineering.
          </p>
          <div class="quick-facts">
            <div class="fact-pill">
              <span class="fact-label">Degree</span>
              <span class="fact-val">BSCS</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Duration</span>
              <span class="fact-val">4 Years</span>
            </div>
            <div class="fact-pill">
              <span class="fact-label">Delivery</span>
              <span class="fact-val">Research & Security-intensive</span>
            </div>
          </div>
        </div>
        <div class="hero-logo-box">
          <img src="@/assets/CCS.png" alt="BSCS Logo" class="hero-logo-img" />
        </div>
      </div>
    </header>

        <main class="page-container program-content">
      
            <section class="content-card">
        <div class="card-icon-header">
          <h2>Program Overview</h2>
        </div>
        <p class="body-p">
          The Bachelor of Science in Computer Science (BSCS) program at Central Philippine University prepares students to become pioneering computer scientists, algorithm designers, and innovative software architects.
        </p>
        <p class="body-p">
          The program delves deeply into the mathematical foundations of computing, systems security, cryptography, compiler design, and high-performance software engineering, empowering graduates to create resilient computing models, solve complex optimization problems, and lead technological breakthroughs.
        </p>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>What You Will Learn</h2>
        </div>
        <div class="grid-2col">
          <div class="skill-item">
            <h3>Algorithms & Data Structures</h3>
            <p>Master asymptotic complexity analysis, graph theory, dynamic programming, and high-efficiency algorithmic problem-solving.</p>
          </div>
          <div class="skill-item">
            <h3>Cybersecurity & Secure Systems</h3>
            <p>Implement cryptographic protocols, vulnerability assessment, secure kernel development, defensive programming, and reverse engineering.</p>
          </div>
          <div class="skill-item">
            <h3>Software Architecture & Systems Programming</h3>
            <p>Design multi-tiered distributed systems, microservices, operating system kernels, and memory-safe concurrent architectures.</p>
          </div>
          <div class="skill-item">
            <h3>Theory of Computation & Automata</h3>
            <p>Explore formal languages, Turing machines, computability, NP-completeness, and modern compiler construction.</p>
          </div>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Career Opportunities</h2>
        </div>
        <p class="body-p">BSCS alumni thrive in premier tech corporations, research institutions, and cutting-edge software companies:</p>
        <div class="careers-chips">
          <span class="career-chip">Software Engineer / Architect</span>
          <span class="career-chip">Cybersecurity Systems Engineer</span>
          <span class="career-chip">Systems Software Developer</span>
          <span class="career-chip">Algorithm Engineer</span>
          <span class="career-chip">Game Engine Developer</span>
          <span class="career-chip">Information Security Architect</span>
          <span class="career-chip">R&D Computing Scientist</span>
          <span class="career-chip">Cybersecurity Cryptographer</span>
        </div>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Why Choose BSCS at CPU CCS?</h2>
        </div>
        <ul class="check-list">
          <li><strong>Competitive Programming Excellence:</strong> Consistent champion and top performer in national ACM-ICPC and collegiate coding competitions.</li>
          <li><strong>Rigorous Mathematical Foundations:</strong> Strong theoretical balance that equips students for direct entry into global tech engineering or elite graduate schools.</li>
          <li><strong>Undergraduate Research Mentorship:</strong> Direct collaboration with senior faculty on published research papers in cybersecurity, algorithmic optimization, and computational theory.</li>
          <li><strong>Industry-Grade Code Reviews:</strong> Emphasis on software craftsmanship, secure coding standards, automated testing, and production-level deployment.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Who Should Enroll?</h2>
        </div>
        <p class="body-p">This program is designed for aspiring computing professionals who:</p>
        <ul class="bullet-list">
          <li>Possess a genuine enthusiasm for mathematics, logic puzzles, and rigorous algorithmic problem solving.</li>
          <li>Are curious about how programming languages, compilers, operating systems, and cryptographic security protocols operate under the hood.</li>
          <li>Want to develop groundbreaking software products, secure operating software, and innovative digital platforms from scratch.</li>
          <li>Strive for careers at international technology leaders, cybersecurity research labs, or innovative tech startups.</li>
        </ul>
      </section>

            <section class="content-card">
        <div class="card-icon-header">
          <h2>Facilities & Research Labs</h2>
        </div>
        <p class="body-p">
          BSCS students work in dedicated high-compute software laboratories equipped with modern development toolchains, Linux workstations, and cybersecurity testbeds:
        </p>
        <div class="cert-grid">
          <div class="cert-card">
            <h4>Advanced Software Lab</h4>
            <p>Equipped for full-stack microservices, Git workflows, and CI/CD pipelines.</p>
          </div>
          <div class="cert-card">
            <h4>Cybersecurity & Systems Security Lab</h4>
            <p>Isolated sandbox environments for penetration testing, network defense, and vulnerability analysis.</p>
          </div>
          <div class="cert-card">
            <h4>Algorithmic Contest Lab</h4>
            <p>Dedicated training ground for competitive programming and ICPC simulations.</p>
          </div>
        </div>
      </section>

            <section class="action-banner">
        <h2>Pioneer the Future of Computing</h2>
        <p>Enroll in the Bachelor of Science in Computer Science at CPU College of Computer Studies.</p>
        <div class="action-buttons">
          <RouterLink to="/admissions" class="cta-primary">Apply for Admission</RouterLink>
          <RouterLink to="/#programs" class="cta-secondary">Explore Other Programs</RouterLink>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>

.bscs-theme {
  --primary: #52525b;
  --primary-dark: #27272a;
  --accent: #e4e4e7;
  --bg-dark: #121212;
  --card-bg: #1e1e1e;
  --card-border: #383838;
  --subcard-bg: #141414;
  --subcard-border: #333333;
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
  background-color: #181818;
  border-bottom: 1px solid #2e2e2e;
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
  color: #ffffff;
}

.crumb-sep {
  color: #52525b;
}

.crumb-current {
  color: #ffffff;
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
  color: rgb(255, 163, 26);
}

.program-hero {
  background: linear-gradient(135deg, #18181b 0%, #111113 50%, #09090b 100%);
  border-bottom: 3px solid #3f3f46;
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
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid #52525b;
  color: #f4f4f5;
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
  background-color: #1c1c1f;
  border: 1px solid #3f3f46;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}

.fact-label {
  color: #a1a1aa;
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
  background-color: rgba(255, 255, 255, 0.03);
  border: 2px solid #3f3f46;
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
  background-color: #141414;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 1.25rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.skill-item:hover {
  border-color: #52525b;
  transform: translateY(-2px);
}

.skill-item h3 {
  font-size: 16px;
  color: #f4f4f5;
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
  background-color: #141414;
  border: 1px solid #3f3f46;
  color: #f4f4f5;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.career-chip:hover {
  background-color: #27272a;
  border-color: #71717a;
  color: #ffffff;
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
  background-color: #141414;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.cert-card:hover {
  border-color: #52525b;
  transform: translateY(-2px);
}

.cert-card h4 {
  font-size: 15px;
  color: rgb(255, 163, 26);
  margin: 0 0 0.4rem 0;
}

.cert-card p {
  font-size: 13px;
  color: #a1a1aa;
  margin: 0;
  line-height: 1.5;
}

.action-banner {
  background: linear-gradient(135deg, #1c1c1f 0%, #121212 100%);
  border: 1px solid #3f3f46;
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
  background-color: rgb(255, 163, 26);
  color: rgb(27, 27, 27);
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
