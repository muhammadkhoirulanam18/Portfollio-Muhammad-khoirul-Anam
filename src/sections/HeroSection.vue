<script setup lang="ts">
import { ref } from 'vue'

const navigation_links = ref(["Work", "Experience", "Contact"])


</script>

<template>
  <div class="bg-background">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-background/80 nav-blur border-b border-primary/10">
      <div class="flex justify-between items-center px-gutter py-unit-md max-w-container-max mx-auto">
        <a class="font-headline-md text-headline-md font-bold text-primary" href="#">A.</a>
        <div class="hidden md:flex gap-unit-lg">
          <a :key="link" class="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#" v-for="link in navigation_links">
            {{ link }}
          </a>
        </div>
        <button class="bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-full font-label-mono text-label-mono hover:scale-95 transition-all">
          Hire Me
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div class="absolute inset-0 bg-mesh -z-10"></div>
      <div class="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-unit-lg items-center">
        <div>
          <span class="font-label-mono text-label-mono text-secondary tracking-widest block mb-unit-md">HELLO EVERYONE!</span>
          <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit-lg leading-none">
            Building websites that <span class="text-secondary text-glow">look good</span> and work well.
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-unit-lg">
            Front-End Developer with experience in Webflow, Wix, WordPress, JavaScript, and the Astro framework, focused on building clean, responsive, and user-friendly experience.
          </p>
          <div class="flex gap-unit-md">
            <button class="bg-secondary text-on-secondary px-unit-lg py-unit-md rounded-lg font-label-mono text-label-mono font-bold hover:bg-primary-container transition-all">EXPLORE PROJECTS</button>
            <button class="border border-secondary/30 text-secondary px-unit-lg py-unit-md rounded-lg font-label-mono text-label-mono font-bold hover:bg-secondary/5 transition-all">CONTACT ME</button>
          </div>
        </div>
        <div class="relative mt-12 md:mt-0 flex justify-center">
          <div class="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            <div class="absolute inset-0 rounded-full border border-secondary/20 animate-pulse"></div>
            <div class="absolute inset-4 rounded-full border border-secondary/10"></div>
            <img class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="A professional and modern portrait of a developer, Muhammad Khoirul Anam, integrated with technical UI elements and digital overlays. The background is dark obsidian with soft emerald glow accents, matching a high-tech corporate aesthetic. The lighting is dramatic and moody, emphasizing a sharp, professional look suitable for a high-end portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUitHh6EOwiXwB5SSCvyhUALCAdanivKQJ6UsOlnWGGFy0yMzbImViZd3q_Ntucrin-uo9ZJwsKxY28t3EG28BdQhpXVO6xO-DRQhl80yB9P4W1iJqwBUG0DkOe7qQczKA6wtBq8jQasxyGjMyOlXRb9vz5NDZFy44o8ilB7f7fAxhYE25uZcdb1LwV9DH27a81_2sO8bKQg60icnIt0gK434Uo-HxLDGO5s8TQanukhJY-fnYpWQL0Zoz-cHyLPXaVEz0v2RXOIL7"/>
          </div>
        </div>
      </div>
    </header>


  </div>
</template>