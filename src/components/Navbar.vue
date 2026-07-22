<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import profileImg from '../assets/images/PROFILE.png'

const route = useRoute()

const isActive = (path: string) => {
  if (path.includes('#')) {
    return route.hash === path.substring(path.indexOf('#'))
  }
  return route.path.startsWith(path) && path !== '/'
}

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
  <nav 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 nav-blur border-b border-primary/10 py-2' : 'bg-transparent border-transparent py-4'
    ]"
  >
    <div class="flex justify-between items-center px-gutter max-w-container-max mx-auto relative">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group z-50">
        <img :src="profileImg" alt="Profile" class="w-10 h-10 rounded-full object-cover group-hover:border-primary transition-colors" />
        <span class="font-label-mono text-xs md:text-sm font-bold text-primary group-hover:text-secondary transition-colors lowercase">mkhoirulanam</span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-unit-lg items-center">
        <router-link 
          v-for="link in navigation_links" 
          :key="link.name" 
          :class="[
            'font-label-mono text-label-mono hover:text-secondary transition-colors duration-300 border-b-2 pb-1',
            isActive(link.path) ? 'text-secondary border-secondary' : 'text-on-surface-variant border-transparent'
          ]"
          :to="link.path"
        >
          {{ link.name }}
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
      <Transition name="fade">
        <div 
          v-if="isMenuOpen"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          @click="toggleMenu"
        ></div>
      </Transition>

      <!-- Mobile Sidebar Menu -->
      <Transition name="slide-fade">
        <div 
          v-if="isMenuOpen"
          class="fixed top-0 right-0 h-screen w-64 bg-surface border-l border-primary/10 shadow-2xl z-40 md:hidden flex flex-col pt-24 px-6 gap-6"
        >
        <router-link 
          :key="link.name" 
          :class="[
            'font-label-mono text-lg hover:text-secondary transition-colors duration-300 border-b border-surface-variant pb-4',
            isActive(link.path) ? 'text-secondary border-secondary' : 'text-primary'
          ]"
          :to="link.path" 
          v-for="link in navigation_links"
          @click="toggleMenu"
        >
          {{ link.name }}
        </router-link>
        
        <router-link 
          to="/contact" 
          class="bg-secondary text-on-secondary px-unit-lg py-3 rounded-full font-label-mono text-center font-bold mt-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20"
          @click="toggleMenu"
        >
          Hire Me
        </router-link>
      </div>
      </Transition>
    </div>
  </nav>
</template>
