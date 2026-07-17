<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'

const featuredProjects = computed(() => projects.filter(p => p.image).slice(0, 4))
</script>

<template>
  <!-- ─────────────────────────────────────────────────
       PROJECT SECTION
       Menampilkan 4 proyek pilihan dalam grid 2 kolom
       dengan card bergaya glassmorphism + hover effect.
  ───────────────────────────────────────────────── -->
  <section id="work" class="py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter mb-section-padding text-center md:text-left">
      <span class="font-label-mono text-label-mono text-secondary mb-unit-sm block uppercase">Some things I've built</span>
      <h2 class="font-headline-md text-headline-md text-primary">Selected Work That Delivers Results</h2>
    </div>

    <div class="max-w-container-max mx-auto px-gutter">
      <!-- Card Grid: 2 columns on tablet, 2 or 3 on large screens to avoid cards being too huge -->
      <div class="grid md:grid-cols-2 gap-unit-lg lg:gap-12 mb-section-padding">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="glass-card rounded-2xl p-unit-md md:p-unit-lg group transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden"
        >
          <!-- Project Thumbnail (or placeholder) -->
          <div class="w-full h-56 md:h-64 rounded-xl overflow-hidden mb-unit-md shadow-lg bg-surface-variant flex items-center justify-center">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span v-else class="text-on-surface-variant/50 font-label-mono text-sm uppercase">Coming Soon</span>
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

      <!-- See More Project Button -->
      <div class="text-center">
        <router-link
          to="/projects"
          class="inline-block px-unit-lg py-unit-md border border-secondary text-secondary rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-secondary/10 transition-all duration-300 font-label-mono"
        >
          See More Project
        </router-link>
      </div>
    </div>
  </section>
</template>