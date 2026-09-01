<script setup lang="ts">
const companies = [
  { name: 'Youtap Indonesia' },
  { name: 'Numerix Accounting' },
  { name: 'Dinamis Psikologi' },
  { name: 'Serenity Bali' },
  { name: 'Windofa Apparel' },
  { name: 'Energy Event' }
]
</script>

<template>
  <section class="py-section-padding border-y border-white/5 bg-surface/30 overflow-hidden">
    <div class="max-w-container-max mx-auto px-gutter text-center">
      <span v-reveal class="font-label-mono text-secondary mb-12 block uppercase tracking-widest text-sm">
        Companies I've Worked With
      </span>
      
      <div class="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
        <div 
          v-for="(company, index) in companies" 
          :key="company.name"
          v-reveal="{ delay: index * 100 }"
          class="grayscale hover:grayscale-0 text-on-surface-variant hover:text-primary transition-all duration-500 font-display-md text-2xl md:text-3xl font-bold tracking-tight cursor-default"
        >
          {{ company.name }}
        </div>
      </div>
    </div>
  </section>
</template>
