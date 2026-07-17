<script setup lang="ts">
import { ref } from 'vue'
import profileImg from '../assets/images/PROFILE.png'

const navigation_links = ref([
  { name: 'Project', path: '/projects' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Contact', path: '/contact' }
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-background/80 nav-blur border-b border-primary/10">
    <div class="flex justify-between items-center px-gutter py-unit-md max-w-container-max mx-auto relative">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group z-50">
        <img :src="profileImg" alt="Profile" class="w-10 h-10 rounded-full object-cover group-hover:border-primary transition-colors" />
        <span class="font-label-mono text-xs md:text-sm font-bold text-primary group-hover:text-secondary transition-colors lowercase">mkhoirulanam</span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-unit-lg items-center">
        <router-link :key="link.name" class="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300" :to="link.path" v-for="link in navigation_links">
          {{ link.name }}
        </router-link>
        <router-link to="/contact" class="bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-full font-label-mono text-label-mono hover:scale-95 transition-all inline-block text-center">
          Hire Me
        </router-link>
      </div>

      <!-- Hamburger Button (Mobile) -->
      <button @click="toggleMenu" class="md:hidden text-primary z-50 p-2 focus:outline-none" aria-label="Toggle Menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Sidebar Overlay -->
      <div 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity md:hidden"
        :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
        @click="toggleMenu"
      ></div>

      <!-- Mobile Sidebar Menu -->
      <div 
        class="fixed top-0 right-0 h-screen w-64 bg-surface border-l border-primary/10 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 gap-6"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <router-link 
          :key="link.name" 
          class="font-label-mono text-lg text-primary hover:text-secondary transition-colors duration-300 border-b border-surface-variant pb-4" 
          :to="link.path" 
          v-for="link in navigation_links"
          @click="toggleMenu"
        >
          {{ link.name }}
        </router-link>
        
        <router-link 
          to="/contact" 
          class="bg-secondary text-on-secondary px-unit-lg py-3 rounded-full font-label-mono text-center font-bold mt-4 hover:scale-95 transition-all shadow-lg shadow-secondary/20"
          @click="toggleMenu"
        >
          Hire Me
        </router-link>
      </div>
    </div>
  </nav>
</template>
