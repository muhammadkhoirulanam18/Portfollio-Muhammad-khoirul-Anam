<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '../sections/HeroSection.vue'
import ProjectSection from '../sections/ProjectSection.vue'  
import ExperienceSection from '../sections/ExperienceSection.vue'
import CTA from '../components/CTA.vue';

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <ProjectSection />
    <ExperienceSection />
    <CTA />
  </div>
</template>
