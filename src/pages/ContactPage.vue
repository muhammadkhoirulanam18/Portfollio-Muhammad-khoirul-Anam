<template>
  <div class="bg-black text-white min-h-screen font-sans antialiased selection:bg-blue-500/30 pt-24">
    <Navbar />
    
    <!-- SECTION 1: CONTACT US (Foto Pertama) -->
    <section class="py-20 px-6 max-w-7xl mx-auto text-center relative">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact us</h1>
      <p class="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-16 leading-relaxed">
        <b>Let’s Build Something Great Together </b><br>
Have a project in mind, a position to fill, or just want to say hi? Drop me a message and let's turn your ideas into clean, functional code.
      </p>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 border border-gray-800 rounded-xl overflow-hidden bg-[#050505]">
        
        <!-- Card 1: Email -->
        <div class="p-10 flex flex-col items-start text-left border-b md:border-b-0 md:border-r border-gray-800 hover:bg-neutral-900/40 transition-colors">
          <div class="mb-8 p-3 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
            <!-- Icon Email -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-gray-200">Email Address</h3>
          <p class="text-gray-400 text-sm leading-6">mkhoirulanam930@gmail.com</p>
        </div>

        <!-- Card 2: Phone -->
        <div class="p-10 flex flex-col items-start text-left border-b md:border-b-0 md:border-r border-gray-800 hover:bg-neutral-900/40 transition-colors">
          <div class="mb-8 p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
            <!-- Icon Phone -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.115-3.76-6.585-6.586l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-gray-200">Call Us</h3>
          <p class="text-gray-400 text-sm leading-6">0857 8392 8671</p>
        </div>

        <!-- Card 3: Location -->
        <div class="p-10 flex flex-col items-start text-left hover:bg-neutral-900/40 transition-colors">
          <div class="mb-8 p-3 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
            <!-- Icon Location -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-gray-200">Indonesia - Jakarta</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Jl. Gatot Subroto, Jakarta, Indonesia
          </p>
        </div>

      </div>

      <!-- Efek ambient glow di bagian bawah -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-gradient-to-t from-blue-900/20 to-transparent blur-3xl pointer-events-none"></div>
    </section>

    <CTA />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import CTA from '../sections/CTA.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>
/* Opsional jika ingin membuat gradasi warna halus di belakang image jika gambar transparan */
.bg-radial-gradient {
  background: radial-gradient(circle at center, #1b2030 0%, #111215 100%);
}
</style>