<script setup>
import { ref } from 'vue'

const dean = ref({
  photo: '/src/assets/Dean.png', 
  name: 'Ma. Christina A. Quijano, MSCS', 
  role: 'Dean, College of Computer Studies'
})
const facultyMembers = ref([

  {
    photo: '/src/assets/Rea.jpg',
    name: 'Rea P. Balontong, MBA',
    role: 'Department Head (IT & IS)'
  },

  {
    photo: '/src/assets/Rose.jpg',
    name: 'Marjee Rose B. Parreño, MSCS, MBA',
    role: 'Program coordinator (BSCS, BSDMIA, and MSCS)'
  },

  {
    photo: '/src/assets/Mae.jpg',
    name: 'Ana Mae B. Cantel. MLIS',
    role: 'Program Coordinator (BLIS and MLIS)'
  },
 
  {
    photo: '/src/assets/Pajar.jpg', 
    name: 'Lennon D. Pajar',
    role: 'Computer Laboratory Coordinator'
  },

  {
    photo: '/src/assets/Beldia.jpg', 
    name: 'Leo Paulo B. Beldia',
    role: 'BSIT and BSIS Program'
  },

  {
    photo: '/src/assets/Eregia.jpg', 
    name: 'Rodolfo C. Eregia, Jr.',
    role: 'BSIT and BSIS Program'
  },

  {
    photo: '/src/assets/Antonio.jpg', 
    name: 'Antonio M. Montaño, Jr.',
    role: 'BSIT and BSIS Program'
  },
  
  {
    photo: '/src/assets/Sapul.jpg', 
    name: 'Ma. Sheila C. Sapul, Ph. D.',
    role: 'BSCS Program'
  }
])
</script>

<template>
  <section id="faculty" class="faculty-section">
    <div class="section-container">
      <div class="section-header">
        <p class="section-eyebrow">College Leadership & Mentors</p>
        <h2 class="section-title">Faculty and Staff</h2>
        <div class="header-line"></div>
        <p class="section-subtitle">
          Guided by industry-certified practitioners, seasoned scholars, and dedicated educators committed to student success.
        </p>
      </div>


      <div class="dean-container">
        <div class="faculty-card dean-card">
          <div class="faculty-image-container">
            <img
              v-if="dean.photo"
              :src="dean.photo"
              :alt="dean.name"
              class="faculty-img"
            />
            <div v-else class="faculty-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span class="dim-text">754 × 1024</span>
            </div>
          </div>
          <h3 class="faculty-name">{{ dean.name }}</h3>
          <p class="faculty-role">{{ dean.role }}</p>
        </div>
      </div>


      <div class="faculty-grid">
        <div v-for="(person, idx) in facultyMembers" :key="idx" class="faculty-card">
          <div class="faculty-image-container">
            <img
              v-if="person.photo"
              :src="person.photo"
              :alt="person.name"
              class="faculty-img"
            />
            <div v-else class="faculty-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span class="dim-text">754 × 1024</span>
            </div>
          </div>
          <h3 class="faculty-name">{{ person.name }}</h3>
          <p class="faculty-role">{{ person.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faculty-section {
  width: 100%;
  padding-bottom: 2rem;
  background-color: rgb(27,27,27);
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


.dean-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
}

.dean-card {
  width: 100%;
  max-width: 320px;
}


.faculty-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}


.faculty-card {
  background-color: rgb(41,41,41);
  border: 3px solid white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.faculty-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(56, 0, 107, 0.1);
  border-color: #cbd5e1;
}


.faculty-image-container {
  width: 100%;
  aspect-ratio: 754 / 1024;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.faculty-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.faculty-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: hsl(276, 100%, 21%);
}

.dim-text {
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  font-family: Arial, sans-serif;
}


.faculty-name {
  color: rgb(255,163,26);
  font-size: 18px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  margin: 0 0 0.4rem 0;
  line-height: 1.3;
  text-shadow: 0 0 3px black;
}


.faculty-role {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  font-family: Arial, sans-serif;
}

@media (max-width: 1024px) {
  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .faculty-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 30px;
  }
}

/* Tablet: Maintain 2-column layout for faculty members on tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .dean-card {
    max-width: 280px;
  }
  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .section-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 767px) {
  .section-container {
    padding: 0 1rem;
  }
  .section-title {
    font-size: 26px;
  }
  .dean-container {
    margin-bottom: 2rem;
  }

  .dean-card {
    max-width: 250px;
    margin: 0 auto;
    padding: 1rem;
    border: 2.5px solid rgb(255,163,26);
  }
  .dean-card .faculty-image-container {
    max-height: 250px;
  }
  .dean-card .faculty-name {
    font-size: 16px;
  }
  .dean-card .faculty-role {
    font-size: 12px;
  }

  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .faculty-card {
    padding: 0.75rem 0.5rem;
    border: 2px solid white;
    border-radius: 8px;
  }
  .faculty-image-container {
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
  .faculty-name {
    font-size: 13px;
    line-height: 1.25;
    margin-bottom: 0.25rem;
  }
  .faculty-role {
    font-size: 11px;
    line-height: 1.25;
  }
}
</style>
