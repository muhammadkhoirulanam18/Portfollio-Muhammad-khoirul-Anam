<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="bg-background">
    <!-- Navigation -->
    <Navbar />

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
          <div class="flex items-center gap-unit-md">
            <button class="bg-secondary text-on-secondary px-unit-lg py-unit-md rounded-lg font-label-mono text-label-mono font-bold hover:bg-primary-container transition-all">Contact Me</button>
            <a href="/cv.pdf" download class="border border-secondary/30 text-secondary px-unit-lg py-unit-md rounded-lg font-label-mono text-label-mono font-bold hover:bg-secondary/5 transition-all flex items-center gap-2">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn" class="w-11 h-11 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/10 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 group-hover:scale-110 transition-transform">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="WhatsApp" class="w-11 h-11 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/10 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 group-hover:scale-110 transition-transform">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.439 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
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