<template>
  <!-- SECTION 2: CTA BANNER (Foto Kedua) -->
  <section class="py-16 px-6 max-w-7xl mx-auto">
    <div class="bg-[#111215] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center relative border border-neutral-800">
      
      <!-- Kiri: Konten Teks -->
      <div v-reveal="{ delay: 0 }" class="p-8 md:p-16 md:col-span-7 space-y-6 z-10 text-left flex flex-col items-start">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white">
          Let’s Work Together
        </h2>
        <p class="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
          I am always open to new opportunities, including freelance, part-time, or full-time work. 
          If you have a potential project or would like to connect, please don’t hesitate to contact 
          me—I will do my best to respond as promptly as possible.
        </p>
        <div class="pt-4 w-full flex justify-start">
          <a 
            href="https://wa.me/6285783928671"
            target="_blank"
            class="inline-block bg-secondary text-on-secondary px-unit-lg py-unit-md rounded-lg font-label-mono text-label-mono font-bold hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 ease-out"
          >
            Book A Free Call Today
          </a>
        </div>
      </div>

      <!-- Kanan: Gambar & Efek Glow -->
      <div v-reveal="{ delay: 200 }" class="relative md:col-span-5 h-full min-h-[300px] md:min-h-[400px] flex items-end justify-end overflow-hidden">
        <!-- Background radial glow mirip di foto -->
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent pointer-events-none"></div>
        
        <!-- Asset Image -->
        <img 
          src="../assets/images/Herosection.png" 
          alt="Expert Profile" 
          class="w-full h-full object-cover object-center md:absolute md:bottom-0 md:right-0"
        />
      </div>

    </div>
  </section>
</template>