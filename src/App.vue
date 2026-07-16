<script setup lang="ts">
import HeroSection from './sections/HeroSection.vue'
import ProjectSection from './sections/ProjectSection.vue'  
import ExperienceSection from './sections/ExperienceSection.vue'
import CTA from './sections/CTA.vue';
</script>

<template>
  <main class="min-h-screen bg-background w-full overflow-x-hidden">
    <HeroSection />
    <ProjectSection />
    <ExperienceSection />
    <CTA />
  </main>
</template>
