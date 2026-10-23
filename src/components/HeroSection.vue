<script setup>
import { ref } from 'vue'
import ccsLogoImg from '@/assets/CCSLogo.png'
import fallbackLogoImg from '@/assets/CPU_UNIV_LOGO.png'


const ccsLogo = ref(ccsLogoImg)
const fallbackLogo = fallbackLogoImg

const onLogoError = (e) => {
  if (e.target.src !== fallbackLogo) {
    e.target.src = fallbackLogo
  }
}
</script>

<template>
  <div id="hero" class="hero-wrapper">

    <main id="main-container">

      <section id="main-content-container">

        <section id="left-content-container" class="main-contents">
          <p id="left-quote">ESTABLISHED 1905 • COLLEGE OF COMPUTER STUDIES</p>
          <h1 class="left-titles">College of Computer Studies</h1>
          <p id="paragraph">
            The College of Computer Studies nurtures intellectual growth, technological innovation, and spiritual development through industry-driven computing education. Knowledge Drives a Brighter Tomorrow.
          </p>

          <section id="buttons-container">

            <a href="#programs" id="colored-btn" class="content-btn">Explore Programs</a>
            <a href="#partnerships" id="second-btn" class="content-btn">Our Partnerships</a>
          </section>

          <div class="stats-container">
            <div class="stat-item">
              <h3>118+</h3>
              <p>Years of Excellence</p>
            </div>
            <div class="stat-item">
              <h3>4</h3>
              <p>Degree Programs</p>
            </div>
            <div class="stat-item">
              <h3>1,200+</h3>
              <p>Active Students</p>
            </div>
            <div class="stat-item">
              <h3>20+</h3>
              <p>Partner Institutions</p>
            </div>
          </div>
        </section>


        <section id="right-content-container" class="main-contents">
          <section id="right-contents">
            <section id="right-image-container" class="right-sub-containers">
              <img
                id="right-image"
                :src="ccsLogo || fallbackLogo"
                alt="College of Computer Studies Logo"
                width="100"
                @error="onLogoError"
              />
            </section>
            <section id="right-title-container" class="right-sub-containers">
              <h1 id="main-school-name">College of<br />Computer Studies</h1>
              <p id="right-quote">the CCS core practices that build bridges between gaps</p>
            </section>
            <div id="line-design"></div>
            <section id="right-quote-container" class="right-sub-containers">
              <p id="bottom-quote">different PEOPLE, ONE goal</p>
            </section>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.hero-wrapper {
  width: 100%;
}

#main-container {
  width: 100%;
  min-height: 50vh;
  padding: 1.5rem 2rem 2.5rem 2rem;
  overflow: hidden;
}

#main-content-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-contents {
  width: 50%;
  height: 100%;
}

#left-content-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2rem;
}

#left-quote {
  color: rgb(255,255,255);
  text-shadow: 0 0 5px hsl(0, 0%, 0%);
  font-size: 18px;
  font-family: 'Gill Sans MT', sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.left-titles {
  color: rgb(255, 255, 255);
  font-size: 68px;
  line-height: 1.1;
  font-family: Arial, sans-serif;
  font-weight: 700;
  position: relative;
  text-shadow: 3px 3px 0px rgb(255,163,26), 0 0 6px rgba(0, 0, 0, 0.7);
}

.left-titles::after {
  display: none;
}

#paragraph {
  color: hsl(0, 0%, 100%);
  padding-top: 1rem;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Gill Sans MT', sans-serif;
  max-width: 560px;
  text-shadow: 0 0 5px black;
}

#buttons-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
  gap: 12px;
}

.content-btn {
  width: 220px;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.content-btn:hover {
  opacity: 0.92;
  transform: translateY(-2px);
}

#colored-btn {
  color: hsl(0, 0%, 0%);
  background-color: rgb(255,163,26);
  border: 2px solid hsl(0, 0%, 100%);
  box-shadow: 0 4px 10px rgba(56, 0, 107, 0.2);
}

#second-btn {
  border: 2px solid hsl(0, 0%, 100%);
  background-color: rgb(255, 255, 255);
  color: hsl(0, 0%, 0%);
}

#second-btn:hover {
  border-color: hsl(276, 100%, 21%);
  background-color: #faf5ff;
}

.stats-container {
  display: flex;
  clear: both;
  width: 100%;
  max-width: 550px;
  background: rgb(128,128,128);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;
  margin-top: 25px;
  padding: 15px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.stat-item:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}

.stat-item h3 {
  font-size: 24px;
  font-weight: bold;
  color: hsl(0, 0%, 0%);
  margin: 0 0 4px 0;
}

.stat-item p {
  font-size: 12px;
  color: #ffffff;
  margin: 0;
}

#right-content-container {
  padding: 1rem 2rem 1rem 6rem;
}

#right-contents {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  min-height: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgb(255,163,26) 50%, rgb(128,128,128) 50%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  border: 3px solid white;
}

.right-sub-containers {
  width: 100%;
}

#right-image-container {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

#right-image {
  width: 90px;
  height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

#right-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1.5rem;
}

#main-school-name {
  color: rgb(255, 255, 255);
  text-shadow: 0 0 5px hsl(0, 0%, 0%);
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 0.25rem;
  font-family: Arial, sans-serif;
}

#right-quote {
  font-size: 16px;
  color: hsl(0, 0%, 0%);
  font-weight: 600;
  font-family: 'Gill Sans MT', sans-serif;
}

#line-design {
  width: 80px;
  height: 3px;
  background-color: rgb(255,163,26);
  margin: 1.25rem 0;
  border-radius: 2px;
}

#right-quote-container {
  text-align: center;
  font-style: italic;
  color: hsl(0, 0%, 0%);
  font-family: Arial, sans-serif;
  font-size: 16px;
}

#bottom-quote {
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 992px) {
  #main-content-container {
    flex-direction: column;
  }
  .main-contents {
    width: 100%;
  }
  #left-content-container {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
  .left-titles {
    font-size: 48px;
  }
  #buttons-container {
    justify-content: center;
  }
  #right-content-container {
    padding: 2.5rem 0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #main-container {
    padding: 2rem 1.5rem;
  }
  #main-content-container {
    flex-direction: column;
  }
  .main-contents {
    width: 100%;
  }
  #left-content-container {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
  #buttons-container {
    justify-content: center;
  }
  #right-content-container {
    padding: 2rem 0;
    width: 100%;
  }
}

@media (max-width: 767px) {
  #main-container {
    padding: 1.5rem 1rem;
  }
  #main-content-container {
    flex-direction: column;
  }
  .main-contents {
    width: 100%;
  }
  #left-content-container {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
  .left-titles {
    font-size: 30px;
  }
  #paragraph {
    font-size: 15px;
    max-width: 100%;
  }
  #buttons-container {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    gap: 10px;
  }
  .content-btn {
    width: 100%;
    max-width: 100%;
  }
  .stats-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
    max-width: 100%;
  }
  .stat-item:not(:last-child) {
    border-right: none;
  }
  #right-content-container {
    padding: 1.5rem 0;
    width: 100%;
  }

  #right-contents {
    max-width: 320px;
    min-height: auto;
    padding: 1.5rem 1rem;
    margin: 0 auto;
  }
  #right-image {
    width: 65px;
    height: 65px;
  }
  #main-school-name {
    font-size: 22px;
  }
  #right-quote {
    font-size: 13px;
  }
  #line-design {
    margin: 0.75rem 0;
    width: 60px;
  }
  #bottom-quote {
    font-size: 13px;
  }
}
</style>
