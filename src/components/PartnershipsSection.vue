<script setup>
import { ref } from 'vue'
import oracleLogo from '@/assets/ORACLE.png'
import ciscoLogo from '@/assets/CISCO.png'
import acerLogo from '@/assets/ACER.jpg'
import huaweiLogo from '@/assets/HUAWEI.jpg'
import psiteLogo from '@/assets/PSITE.png'
import mayadLogo from '@/assets/MAYAD.png'


const partners = ref([
  {
    name: 'Oracle Academy',
    logo: oracleLogo
  },

  {
    name: 'Cisco Networking Academy',
    logo: ciscoLogo
  },

  {
    name: 'Acer',
    logo: acerLogo
  },

  {
    name: 'Huawei ICT Academy',
    logo: huaweiLogo
  },

  {
    name: 'PSITE',
    logo: psiteLogo
  },

  {
    name: 'Mayad',
    logo: mayadLogo
  }
])
</script>

<template>
  <section id="partnerships" class="partnerships-section">
    <div class="section-container">
      <div class="section-header">
        <p class="section-eyebrow">Industry Alliances</p>
        <h2 class="section-title">Partnerships & Memberships</h2>
        <div class="header-line"></div>
        <p class="section-subtitle">
          Collaborating with global technology giants and national computing societies to deliver industry certifications.
        </p>
      </div>

      <div class="partners-grid">
        <div v-for="(partner, idx) in partners" :key="idx" class="partner-card">
          <!-- 1. LOGO (300x300) -->
          <div class="partner-logo-container">
            <img
              v-if="partner.logo"
              :src="partner.logo"
              :alt="partner.name"
              class="partner-logo-img"
            />
            <div v-else class="partner-logo-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span class="dim-text">300 × 300</span>
            </div>
          </div>


          <h3 class="partner-name">{{ partner.name }}</h3>


          <p class="partner-desc">{{ partner.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partnerships-section {
  width: 100%;
  padding-bottom: 2rem;
  background-color: rgb(27,27,27);
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
  color: hsl(0, 0%, 99%);
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
  color: white;
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
  font-family: 'Gill Sans MT', sans-serif;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.partner-card {
  background-color: rgb(41,41,41);
  border: 3px solid white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(56, 0, 107, 0.08);
  border-color: #cbd5e1;
}


.partner-logo-container {
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.partner-logo-img {
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  height: 300px;
  object-fit: contain;
}

.partner-logo-placeholder {
  width: 100%;
  max-width: 300px;
  height: 300px;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: hsl(276, 100%, 21%);
}

.dim-text {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  font-family: Arial, sans-serif;
}


.partner-name {
  color: rgb(255,163,26);
  font-size: 20px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  text-shadow: 0 0 3px black;
}


.partner-desc {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.55;
  margin: 0;
  font-family: Arial, sans-serif;
}

@media (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
  .partner-logo-container {
    height: 220px;
  }
  .partner-logo-img,
  .partner-logo-placeholder {
    height: 220px;
  }
  .section-title {
    font-size: 30px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .section-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 767px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .section-container {
    padding: 0 1rem;
  }
  .partner-card {
    padding: 1rem 0.75rem;
    border: 2px solid white;
    border-radius: 8px;
  }
  .partner-logo-container {
    max-width: 100%;
    height: 100px;
    margin-bottom: 0.75rem;
  }
  .partner-logo-img,
  .partner-logo-placeholder {
    max-width: 100%;
    height: 100px;
  }
  .partner-name {
    font-size: 15px;
    margin-bottom: 0.25rem;
  }
  .partner-desc {
    font-size: 12px;
  }
  .section-title {
    font-size: 26px;
  }
}
</style>
