<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

//scrolling
const scrollTo = (hash) => {
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push({ path: '/', hash })
  }
}
</script>

<template>
  <header id="header-container" class="body-contents-container">

    <section id="header-contents-container">

      <RouterLink to="/" class="logo-link">

        <section id="logo-title-container" class="header-contents">

          <section id="logo-container" class="header-sub-con">
            <img id="cpu-logo" src="@/assets/CCSLogo.png" alt="CCS LOGO" width="100">
          </section>

          <section id="title-container" class="header-sub-con">
            <h1 id="school-name">College of Computer Studies</h1>
            <p id="school-quote">Knowledge Drives a Brighter Tomorrow</p>
          </section>

        </section>

      </RouterLink>

      <nav id="nav-container" class="header-contents">


        <ul id="links-container">

          <li class="links">
            <a href="#hero" class="actual-links" @click.prevent="scrollTo('#hero')">Home</a>
          </li>

          <li class="links">
            <a href="#programs" class="actual-links" @click.prevent="scrollTo('#programs')">Programs Offered</a>
          </li>

          <li class="links">
            <a href="#partnerships" class="actual-links" @click.prevent="scrollTo('#partnerships')">Partnerships & Memberships</a>
          </li>

          <li class="links">
            <RouterLink
              to="/admissions"
              class="actual-links"
              active-class="active-link"
            >
              Admissions
            </RouterLink>
          </li>

        </ul>

      </nav>

      <button id="login-btn">Portal Login</button>

    </section>
  </header>
</template>

<style scoped>
#header-container {
  width: 100%;
  flex-shrink: 0;
  background-color: rgb(41,41,41);
  border-bottom: 3px solid rgb(255,163,26);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

#header-contents-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.header-contents {
  height: 100%;
}

#logo-title-container,
#links-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-title-container {
  width: auto;
  gap: 5px;
  margin-right: 10px;
  margin-left: -50px;
}

#nav-container {
  width: auto;
}

#links-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  font-family: Arial, sans-serif;
}

.links {
  list-style: none;
  color: hsl(0, 0%, 31%);
  font-weight: bold;
  text-shadow: 0 0 1px hsl(0, 0%, 0%);
  font-size: 15px;
}

.actual-links {
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: color 0.15s ease;
  white-space: nowrap;
}

.actual-links:hover {
  color: rgb(255,163,26);
}

.active-link {
  color: hsl(0, 0%, 100%);
  font-size: 15px;
  text-decoration: underline 2px hsl(51, 100%, 36%);
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
}

.header-sub-con {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
}

#logo-container {
  width: auto;
}

#title-container {
  width: auto;
  align-items: flex-start;
}

#cpu-logo {
  width: 60px;
}

#school-name {
  color: hsl(0, 100%, 100%);
  text-shadow: 0 0 2px hsl(0, 0%, 0%);
  font-size: 26px;
  margin: 0;
  line-height: 1.2;
}

#school-quote {
  color: rgb(255,163,26);
  text-shadow: 0 0 1px hsl(0, 0%, 0%);
  font-family: Arial, sans-serif;
  font-size: 13px;
  margin: 0;
}


#login-btn {
  width: 110px;
  height: 44px;
  background-color: rgb(255,163,26);
  border-radius: 8px;
  border: none;
  color: rgb(27,27,27);
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-left: 20px;
  margin-right: -50px;
}

#login-btn:hover {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  #header-contents-container {
    flex-direction: column;
    gap: 10px;
  }
  #links-container {
    flex-wrap: wrap;
    gap: 15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #logo-title-container {
    margin-left: 0;
    margin-right: 0;
  }
  #login-btn {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  #header-container {
    padding: 12px 16px;
  }
  #links-container {
    padding: 0;
    margin: 0;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  #header-container {
    padding: 10px 12px;
  }
  #header-contents-container {
    flex-direction: column;
    gap: 10px;
  }
  #logo-title-container {
    margin: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  #cpu-logo {
    width: 45px;
  }
  #title-container {
    align-items: flex-start;
    text-align: left;
  }
  #school-name {
    font-size: 18px;
    white-space: normal;
    text-align: left;
    line-height: 1.2;
  }
  #school-quote {
    font-size: 11px;
    white-space: normal;
    text-align: left;
  }
  #nav-container {
    width: 100%;
  }
  #links-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 14px;
    padding: 0;
    margin: 0;
    justify-content: center;
  }
  .links {
    font-size: 14px;
  }
  #login-btn {
    margin: 4px auto 0 auto;
    width: auto;
    padding: 6px 18px;
    height: 36px;
    font-size: 14px;
    border-radius: 6px;
  }
}
</style>
