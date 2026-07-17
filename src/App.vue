<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from './sections/HeroSection.vue'
import ProjectSection from './sections/ProjectSection.vue'  
import ExperienceSection from './sections/ExperienceSection.vue'
import CTA from './sections/CTA.vue';
import TheFooter from './components/TheFooter.vue';

const showScrollButton = ref(false);

const handleScroll = () => {
  // Munculkan button saat user scroll lewat 300px (melewati bagian awal hero)
  showScrollButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main id="top" class="min-h-screen bg-background w-full overflow-x-hidden relative">
    <HeroSection />
    <ProjectSection />
    <ExperienceSection />
    <CTA />
    <TheFooter />

    <!-- Scroll to Top Button -->
    <a 
      href="#top" 
      aria-label="Scroll to top" 
      :class="[
        'fixed bottom-8 right-8 w-12 h-12 bg-secondary text-on-secondary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-50',
        showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      ]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </a>
  </main>
</template>
