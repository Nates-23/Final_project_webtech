<script setup>
//excluding faculty for publc deplyment

import HeroSection from '@/components/HeroSection.vue'
import ProgramsSection from '@/components/ProgramsSection.vue'
import PartnershipsSection from '@/components/PartnershipsSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />
    <ProgramsSection />
    <PartnershipsSection />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
