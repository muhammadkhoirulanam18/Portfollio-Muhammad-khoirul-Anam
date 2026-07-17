<template>
  <section class="relative overflow-hidden bg-background pt-12 pb-section-padding">
    <div class="relative z-10 max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-unit-lg items-center">
      
      <!-- Image Area (Left) -->
      <div class="relative w-full flex justify-center z-20 order-2 md:order-1 mt-8 md:mt-0">
        <div class="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl relative group">
          <div class="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            :src="profileImage" 
            alt="Muhammad Khoirul Anam Profile" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>    
      </div>

      <!-- Text Area (Right) -->
      <div class="text-left order-1 md:order-2">
        <h2 class="text-4xl font-display-lg text-primary tracking-tight mb-4 sm:text-5xl uppercase">
          Let’s Work Together
        </h2>
        
        <p class="text-on-surface-variant font-body-lg text-lg leading-relaxed mb-10 max-w-lg md:max-w-none">
          I am always open to new opportunities, including freelance, part-time, or full-time work. 
          If you have a potential project or would like to connect, please don’t hesitate to contact me—I 
          will do my best to respond as promptly as possible.
        </p>

        <div class="flex flex-wrap items-center justify-start gap-4">
          <router-link 
            to="/projects" 
            class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-surface-variant text-primary font-label-mono uppercase tracking-wider rounded-full hover:bg-surface-variant transition-all duration-300 transform hover:-translate-y-0.5"
          >
            See all projects
          </router-link>
          <router-link 
            to="/contact" 
            class="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-on-secondary font-label-mono uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
          >
            Contact Me
          </router-link>
        </div>
      </div>
      
    </div>

    <!-- Background Bulat Biru -->
    <!-- <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue rounded-full opacity-80 pointer-events-none transform translate-y-1/2 flex items-center justify-center">
      <div class="absolute inset-8 border-2 border-white/20 rounded-full"></div>
      <div class="absolute inset-16 border border-white/10 rounded-full"></div>
    </div> -->
  </section>
</template>

<script setup>
import profileImage from '../assets/images/PROFILE.png'
</script>

<style scoped>
/* Tambahan kustomisasi style jika tidak tercover oleh Tailwind */
</style>