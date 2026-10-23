<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import itLogo from '@/assets/IT.png'
import ccsLogo from '@/assets/CCS.png'
import mediaLogo from '@/assets/MEDIA.png'
import blisLogo from '@/assets/BLIS.png'

const programs = ref([
  {
    id: 'bsit',
    code: 'BSIT',
    title: 'Bachelor of Science in Information Technology (BSIT)',
    description: 'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems, preparing students to manage computing infrastructure.',
    path: '/programs/bsit',
    logo: itLogo, 
    color: '#eab308'
  },
  {
    id: 'bscs',
    code: 'BSCS',
    title: 'Bachelor of Science in Computer Science (BSCS)',
    description: 'The Computer Science (CS) Program is designed for students who want to study computing in depth, focusing on algorithmic problem solving, secure software engineering, and systems security.',
    path: '/programs/bscs',
    logo: ccsLogo,
    color: '#71717a'
  },
  {
    id: 'bsdmia',
    code: 'BSDMIA',
    title: 'Bachelor of Science in Data Mining and Information Analytics (BSDMIA)',
    description: 'Focused on uncovering insights from complex datasets through modern statistics, machine learning, predictive modeling, and business intelligence architectures.',
    path: '/programs/bsdmia',
    logo: mediaLogo,
    color: '#eab308'
  },
  {
    id: 'blis',
    code: 'BLIS',
    title: 'Bachelor of Library and Information Science (BLIS)',
    description: 'A four-year degree preparing information professionals in digital archiving, knowledge management, metadata curation, and automated library information systems.',
    path: '/programs/blis',
    logo: blisLogo, 
    color: '#16a34a'
  }
])
</script>

<template>
  <section id="programs" class="programs-section">
    <div class="section-container">
      <div class="section-header">
        <p class="section-eyebrow">Academic Offerings</p>
        <h2 class="section-title">Programs Offered</h2>
        <div class="header-line"></div>
        <p class="section-subtitle">
          Empowering future technology leaders through industry-aligned computing education and world-class curricula.
        </p>
      </div>

      <div class="programs-grid">
        <div v-for="prog in programs" :key="prog.id" class="program-card">
          <div class="program-logo-container">
            <img
              v-if="prog.logo"
              :src="prog.logo"
              :alt="prog.title"
              class="program-logo"
            />
            <div v-else class="program-logo-placeholder" :style="{ borderColor: prog.color }">
              <span class="placeholder-code" :style="{ color: prog.color }">{{ prog.code }}</span>
              <span class="placeholder-sub">150 × 150</span>
            </div>
          </div>

          <h3 class="program-title">{{ prog.title }}</h3>

          <p class="program-desc">{{ prog.description }}</p>

          <RouterLink :to="prog.path" class="read-more-btn">
            Read More <span class="arrow">&rarr;</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs-section {
  width: 100%;
  padding-bottom: 2rem;
  background-color: rgb(27,27,27);
  border-top: 3px solid rgb(255,163,26);
  border-bottom: 3px solid rgb(255,163,26);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-eyebrow {
  color: hsl(0, 0%, 100%);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Gill Sans MT', sans-serif;
  margin-bottom: 0.25rem;
  text-shadow: 0 0 3px black;
}

.section-title {
  color: rgb(255,163,26);
  font-size: 38px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  margin: 0;
  text-shadow: 0 0 3px black;
}

.header-line {
  width: 60px;
  height: 3px;
  background-color: rgb(255,163,26);
  margin: 0.75rem auto 1rem auto;
  border-radius: 2px;
}

.section-subtitle {
  color: #ffffff;
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
  font-family: 'Gill Sans MT', sans-serif;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.program-card {
  background-color: rgb(41,41,41);
  border: 3px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.program-logo-container {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
}

.program-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.program-logo-placeholder {
  width: 150px;
  height: 150px;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.placeholder-code {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
}

.placeholder-sub {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
}

.program-title {
  color: rgb(255,163,26);
  font-size: 22px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  text-shadow: 0 0 3px black;
}

.program-desc {
  color: #ffffff;
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 3px black;
  flex-grow: 1;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  background-color: transparent;
  color: rgb(255, 163, 26);
  border: 2px solid rgb(255, 163, 26);
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: auto;
}

.read-more-btn .arrow {
  transition: transform 0.2s ease;
}

.read-more-btn:hover {
  background-color: rgb(255, 163, 26);
  color: #1b1b1b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 163, 26, 0.35);
}

.read-more-btn:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 30px;
  }
}

      
@media (min-width: 768px) and (max-width: 1024px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .section-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 767px) {
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .section-container {
    padding: 0 1rem;
  }
  .program-card {
    padding: 1.5rem 1rem;
  }
  .program-logo-container {
    width: 110px;
    height: 110px;
    margin-bottom: 1rem;
  }
  .program-logo {
    width: 110px;
    height: 110px;
  }
  .program-logo-placeholder {
    width: 110px;
    height: 110px;
  }
  .program-title {
    font-size: 20px;
  }
  .program-desc {
    font-size: 14px;
    margin-bottom: 1.25rem;
  }
  .section-title {
    font-size: 26px;
  }

.read-more-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
