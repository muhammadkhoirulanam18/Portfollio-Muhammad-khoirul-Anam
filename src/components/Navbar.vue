<script setup lang="ts">
import { ref } from 'vue'

const navigation_links = ref(["Work", "Project", "Experience", "Contact"])
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-background/80 nav-blur border-b border-primary/10">
    <div class="flex justify-between items-center px-gutter py-unit-md max-w-container-max mx-auto">
      <a class="font-headline-md text-headline-md font-bold text-primary" href="#">mkh.</a>
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
</template>
