<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import CTA from '../components/CTA.vue'
import { projects } from '../data/projects'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen bg-background pt-24 pb-12">
    <!-- Shared Navbar -->
    <Navbar />

    <div class="max-w-container-max mx-auto px-gutter mt-12 mb-section-padding text-center md:text-left">
      <span class="font-label-mono text-label-mono text-secondary mb-unit-sm block uppercase">All Work</span>
      <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-12">Selected Projects</h1>

      <div class="grid md:grid-cols-2 gap-unit-lg lg:gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="glass-card rounded-2xl p-unit-md md:p-unit-lg group transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden text-left"
        >
          <!-- Project Thumbnail (or placeholder) -->
          <div class="w-full rounded-xl overflow-hidden mb-unit-md shadow-lg bg-surface-variant flex items-center justify-center relative group-hover:shadow-primary/20 transition-all duration-300">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div v-else class="w-full aspect-video flex items-center justify-center">
              <span class="text-on-surface-variant/50 font-label-mono text-sm uppercase">Coming Soon</span>
            </div>
          </div>

          <!-- Category Label & Number -->
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-bold text-secondary tracking-widest uppercase font-label-mono">
              {{ String(index + 1).padStart(2, '0') }} {{ project.category }}
            </span>
          </div>

          <!-- Project Title -->
          <h3 class="font-headline-sm text-headline-sm text-primary mb-3">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 flex-grow">
            {{ project.description }}
          </p>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-unit-sm mb-unit-md">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="px-3 py-1 text-[10px] border border-secondary/20 rounded-full bg-secondary/5 text-on-surface-variant font-label-mono"
            >
              {{ tech }}
            </span>
          </div>

          <!-- View Project Link -->
          <a
            :href="project.link"
            target="_blank"
            class="mt-auto inline-flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase font-label-mono group/link hover:text-primary transition-colors duration-300"
          >
            View Project
            <span class="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Shared CTA -->
    <CTA />
  </div>
</template>
