<script setup lang="ts">
import { ref } from 'vue'
import profileImg from '../assets/images/PROFILE.png'

const navigation_links = ref([
  { name: 'Project', path: '/projects' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Contact', path: '/contact' }
])
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-background/80 nav-blur border-b border-primary/10">
    <div class="flex justify-between items-center px-gutter py-unit-md max-w-container-max mx-auto">
      <router-link to="/" class="flex items-center gap-3 group">
        <img :src="profileImg" alt="Profile" class="w-10 h-10 rounded-full object-cover group-hover:border-primary transition-colors" />
        <span class="font-label-mono text-xs md:text-sm font-bold text-primary group-hover:text-secondary transition-colors lowercase">mkhoirulanam</span>
      </router-link>
      <div class="hidden md:flex gap-unit-lg">
        <router-link :key="link.name" class="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300" :to="link.path" v-for="link in navigation_links">
          {{ link.name }}
        </router-link>
      </div>
      <router-link to="/contact" class="bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-full font-label-mono text-label-mono hover:scale-95 transition-all inline-block text-center">
        Hire Me
      </router-link>
    </div>
  </nav>
</template>
