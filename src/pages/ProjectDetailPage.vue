<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar.vue'

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug as string)
const project = computed(() => projects.find(p => p.slug === slug.value))
const otherProjects = computed(() => projects.filter(p => p.slug !== slug.value).slice(0, 3))

onMounted(() => {
  window.scrollTo(0, 0)
  // If project is not found, redirect to projects page
  if (!project.value) {
    router.replace('/projects')
  }
})

watch(() => route.params.slug, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen bg-background pt-24 pb-0 flex flex-col" v-if="project">
    <Navbar />

    <main class="flex-grow max-w-container-max mx-auto px-gutter mt-12 mb-section-padding w-full">
      <!-- Back Link -->
      <router-link
        to="/projects"
        class="inline-flex items-center gap-2 text-secondary mb-8 font-label-mono text-sm tracking-widest uppercase hover:text-primary transition-colors"
      >
        <span class="text-lg">←</span> Back to Projects
      </router-link>

      <!-- Project Header -->
      <div class="mb-12" v-reveal>
        <span class="font-label-mono text-secondary mb-4 block uppercase tracking-widest">{{ project.category }}</span>
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">{{ project.title }}</h1>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="px-4 py-2 text-xs border border-secondary/20 rounded-full bg-secondary/10 text-primary font-label-mono uppercase tracking-wider"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="w-full rounded-2xl overflow-hidden mb-16 shadow-2xl shadow-primary/5 bg-surface-variant flex items-center justify-center relative" v-reveal="{ delay: 100 }">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="w-full h-auto object-cover"
        />
        <div v-else class="flex items-center justify-center w-full aspect-video">
          <span class="text-on-surface-variant/50 font-label-mono text-lg uppercase">Coming Soon</span>
        </div>
      </div>

      <!-- Project Details -->
      <div class="grid md:grid-cols-3 gap-12" v-reveal="{ delay: 200 }">
        <div class="md:col-span-2">
          <h2 class="font-headline-md text-headline-md text-primary mb-6">About the Project</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
            {{ project.description }}
          </p>
          
          <div class="mt-12">
            <a
              :href="project.link"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out font-label-mono"
            >
              Visit Live Website
              <span>↗</span>
            </a>
          </div>
        </div>
        
        <div class="bg-surface p-8 rounded-2xl border border-white/5 h-fit">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-6 border-b border-white/10 pb-4">Project Overview</h3>
          <ul class="space-y-4">
            <li>
              <span class="block text-secondary font-label-mono text-xs uppercase mb-1">Role</span>
              <span class="text-on-surface-variant font-body-md">Web Developer</span>
            </li>
            <li>
              <span class="block text-secondary font-label-mono text-xs uppercase mb-1">Timeline</span>
              <span class="text-on-surface-variant font-body-md">2023 - 2024</span>
            </li>
            <li>
              <span class="block text-secondary font-label-mono text-xs uppercase mb-1">Client</span>
              <span class="text-on-surface-variant font-body-md">{{ project.title }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- More Projects Section -->
      <div class="mt-24 pt-16 border-t border-white/5">
        <div class="flex items-center justify-between mb-12" v-reveal>
          <h2 class="font-headline-md text-headline-md text-primary">More Projects</h2>
          <router-link to="/projects" class="text-secondary font-label-mono text-sm tracking-widest uppercase hover:text-primary transition-colors">
            View All →
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <router-link
            v-for="(p, index) in otherProjects"
            :key="p.slug"
            :to="'/project/' + p.slug"
            v-reveal="{ delay: index * 100 }"
            class="glass-card rounded-2xl p-unit-md group transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden text-left"
          >
            <div class="w-full rounded-xl overflow-hidden mb-unit-md shadow-lg bg-surface-variant flex items-center justify-center relative aspect-video">
              <img
                v-if="p.image"
                :src="p.image"
                :alt="p.title"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div v-else class="flex items-center justify-center h-full w-full">
                <span class="text-on-surface-variant/50 font-label-mono text-xs uppercase">Coming Soon</span>
              </div>
            </div>
            
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[10px] font-bold text-secondary tracking-widest uppercase font-label-mono">
                {{ p.category }}
              </span>
            </div>
            
            <h3 class="font-headline-sm text-headline-sm text-primary mb-3 line-clamp-1">
              {{ p.title }}
            </h3>
            
            <div class="mt-auto inline-flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase font-label-mono">
              View Project
              <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
