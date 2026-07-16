<template>
  <section class="relative overflow-hidden bg-background py-24 px-6 text-center">
    <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      
      <h2 class="text-4xl font-display-lg text-primary tracking-tight mb-4 sm:text-5xl uppercase">
        Let’s Work Together
      </h2>
      
      <p class="text-on-surface-variant font-body-lg text-lg leading-relaxed max-w-2xl mb-10">
        I am always open to new opportunities, including freelance, part-time, or full-time work. 
        If you have a potential project or would like to connect, please don’t hesitate to contact me—I 
        will do my best to respond as promptly as possible.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a 
          href="#projects" 
          class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-surface-variant text-primary font-label-mono uppercase tracking-wider rounded-full hover:bg-surface-variant transition-all duration-300 transform hover:-translate-y-0.5"
        >
          See all projects
        </a>
        <a 
          href="mailto:mkhoirulanam930@gmail.com" 
          class="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-on-secondary font-label-mono uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
        >
          Email Me
        </a>
      </div>

      <!-- Image Area / Jarak antara gambar dengan button (mb-16 di atas mengatur jarak ke atas, mb-8 mengatur jarak ke bawah) -->
      <div class="relative w-full max-w-md mx-auto mb-8 z-20">
        <!-- Placeholder untuk gambar (seperti gambar HP/Mockup di referensi) -->
        <div class="w-[300px] h-[400px] mx-auto bg-surface-variant/50 rounded-[40px] border border-surface-variant flex items-center justify-center backdrop-blur-sm">
          <span class="text-on-surface-variant font-label-mono text-sm">Image Placeholder</span>
        </div>    
      </div>
    </div>

    <!-- Background Bulat Biru -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue rounded-full opacity-80 pointer-events-none transform translate-y-1/2 flex items-center justify-center">
      <div class="absolute inset-8 border-2 border-white/20 rounded-full"></div>
      <div class="absolute inset-16 border border-white/10 rounded-full"></div>
    </div>
  </section>
</template>

<script setup>
// Kamu bisa mengganti Image Placeholder dengan tag <img> yang sesungguhnya nanti
</script>

<style scoped>
/* Tambahan kustomisasi style jika tidak tercover oleh Tailwind */
</style>