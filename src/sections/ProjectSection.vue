<script setup lang="ts">
import { ref } from 'vue'

// ─────────────────────────────────────────────────────────────
//  Data proyek — tambah atau kurangi item di sini sesuai kebutuhan.
//  Hanya 4 proyek pertama yang ditampilkan secara default.
// ─────────────────────────────────────────────────────────────
interface Project {
  title: string
  category: string
  description: string
  stack: string[]
  image: string
  link: string
}

const projects = ref<Project[]>([
  {
    title: 'Numerix Accounting',
    category: 'Website',
    description:
      "Developed the business accounting website using WordPress and Elementor to create a custom experience that matches the brand's professional and clean identity.",
    stack: ['WordPress', 'Elementor', 'Responsive UI'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVD5d8m1i3L1csL93E5_QHwa6W-YVZhTz9PLWs6klFDYci6Di7wPOYFOTtyjpQ2ps1MdKecfsDy49MiyYPdjmt4PLK-0f0XXGmCr3ZW7hAoMbzjhd6WPfOhXLQf4L-c_GV9wMaY82oJabszwXY6DXrYZpkOzzowzFUMLaa8CX7YygtugwPJF_5guDLCEBMxCql35t0f4thczSKrQfU5icUeUQve-WGPwewFGPf1l4GsR1wOLM1jiLksg2u_YakFijIPzvvfLplWHxx',
    link: '#',
  },
  {
    title: 'Youtap Kiosk',
    category: 'SaaS Platform',
    description:
      'Empower your commerce and streamline business transactions with a specialized Kiosk mode application. Designed for versatile hardware and simple UI.',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOSLguv7rO18bCA2J14fSTjQO5b3QR3ffWcL4Q89G_3GllA4luFUmUBPWsHvL1tcaHQG24Rl4dghJfZHjuuSAvB04AmXlLS7WddwzZKHDEZaRjAhET-POf3o5vzs6VaXPxfkS5YPaJpDHsKS4XOOhoFz6UUb3CnWdaEZcJfjtpIchwZd-Rg9cPgDJgtewefpKcdeMRIfNRFh2r0iG5g-PQBrhBE_HHBRFUuzfhxc9a_29_hnCMjTdawBH_wE3WxN_o1S2cNV9sbQDw',
    link: '#',
  },
  {
    title: 'Youtap POS',
    category: 'Business Management',
    description:
      'Designed and developed the Youtap POS website to showcase an all-in-one solution for business owners. Focused on performance and SEO.',
    stack: ['React.js', 'Next.js', 'Framer Motion'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOSLguv7rO18bCA2J14fSTjQO5b3QR3ffWcL4Q89G_3GllA4luFUmUBPWsHvL1tcaHQG24Rl4dghJfZHjuuSAvB04AmXlLS7WddwzZKHDEZaRjAhET-POf3o5vzs6VaXPxfkS5YPaJpDHsKS4XOOhoFz6UUb3CnWdaEZcJfjtpIchwZd-Rg9cPgDJgtewefpKcdeMRIfNRFh2r0iG5g-PQBrhBE_HHBRFUuzfhxc9a_29_hnCMjTdawBH_wE3WxN_o1S2cNV9sbQDw',
    link: '#',
  },
  {
    title: 'Travgo Mobile',
    category: 'Travel App',
    description:
      'Redesign of the Travgo Mobile Flight Ticket App to provide a cleaner and more modern user experience and journey for booking.',
    stack: ['Figma', 'React Native', 'API Integration'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7-S74TPv_UrR5sIa8SEZ1B1_tiLohJEAzhBY98RMx8aW-3KIgUTtO9AaoSL-aO8HGXsQ6IOGjdIHiqJQt3BNBXI___K-S_dddRhNUgE-IqTzn3fAXzbSsXouMC6FcpLxnf3CGWeOt3vbRy_XDdLKTYOWmStQFWCWj2txJdDMB7Z7Ryrt3grOmmRg0oj-uyfrEzzVX5QaYaZYX6XAjBlVA5qkc8utbKp76AaUl_1cRXGad-1ODDRn5d0mSd75FNojyyribNCqUpYpN',
    link: '#',
  },
])
</script>

<template>
  <!-- ─────────────────────────────────────────────────
       PROJECT SECTION
       Menampilkan 4 proyek pilihan dalam grid 2 kolom
       dengan card bergaya glassmorphism + hover effect.
  ───────────────────────────────────────────────── -->
  <section id="work" class="py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter mb-section-padding">
      <span class="font-label-mono text-label-mono text-secondary mb-unit-sm block uppercase">Some things I've built</span>
      <h2 class="font-headline-md text-headline-md text-primary">Selected Work That Delivers Results</h2>
    </div>

    <div class="max-w-container-max mx-auto px-gutter">
      <!-- Card Grid: 2 columns on tablet, 2 or 3 on large screens to avoid cards being too huge -->
      <div class="grid md:grid-cols-2 gap-unit-lg lg:gap-12 mb-section-padding">
        <div
          v-for="project in projects"
          :key="project.title"
          class="glass-card rounded-2xl p-unit-md md:p-unit-lg group transition-all duration-300 hover:-translate-y-2 flex flex-col"
        >
          <!-- Project Thumbnail -->
          <div class="w-full h-56 md:h-64 rounded-xl overflow-hidden mb-unit-md shadow-lg">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <!-- Category Label -->
          <span class="text-[10px] font-bold text-secondary tracking-widest uppercase font-label-mono mb-2 block">
            {{ project.category }}
          </span>

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
            class="mt-auto inline-flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase font-label-mono group/link hover:text-primary transition-colors duration-300"
          >
            View Project
            <span class="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div> 

      <!-- See More Project Button -->
      <div class="text-center pb-section-padding">
        <button
          class="inline-block px-unit-lg py-unit-md border border-secondary text-secondary rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-secondary/10 transition-all duration-300 font-label-mono"
        >
          See More Project
        </button>
      </div>
    </div>
  </section>
</template>