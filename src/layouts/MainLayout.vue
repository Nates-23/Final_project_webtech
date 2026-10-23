<script setup>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <body>
    <div class="layout">

    <Navbar />

    <main class="page-content">
      <RouterView />
    </main>

    <Footer />

  </div>
    
  </body>
</template>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  border: 4px solid rgb(255,163,26);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.layout {
  width: 100%;
  height: 100%;
  background-color: rgb(27,27,27);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-content {
  flex: 1;
}

@media (max-width: 767px) {
  body {
    width: 100%;
    max-width: 100%;
    border-width: 3px;
    overflow-x: hidden;
  }
  .layout {
    width: 100%;
    overflow-x: hidden;
  }
  .page-content {
    width: 100%;
  }
}
</style>
