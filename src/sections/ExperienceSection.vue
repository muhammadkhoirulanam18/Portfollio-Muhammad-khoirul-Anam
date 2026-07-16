<script setup lang="ts">
import { ref } from 'vue'

const experiences = [
  {
    company: 'DMS Group',
    role: 'Freelance Web Developer',
    period: 'January 2026 - Present',
    description: [
      'Freelance Web Developer at DMS Group, working remotely to develop responsive and high-performance websites tailored to business needs. Experienced in building company profile and UMKM websites using WordPress, Wix, and Lovable, with a focus on modern design, functionality, and user-friendly experiences.'
    ],
    link: 'https://corefreelancers.id/'
  },
  {
    company: 'Youtap Indonesia',
    role: 'Web Developer',
    period: 'October 2024 - June 2026',
    description: [
      'I contributed to the website development for Youtap.id, a digital POS platform that offers integrated business solutions, including Point of Sale (POS), E-commerce (BOS), Digital Kiosk, Loyalty Programs, and Enterprise Solutions. In this project, I utilized Webflow and Wix CMS to build a modern, responsive, and user-friendly website interface.',
      'My responsibilities included:',
      '- Collaborating with the product team to design and develop the website pages.',
      '- Customizing layouts and UI elements to reflect Youtap’s brand identity.',
      '- Optimizing website performance and responsiveness across multiple devices.',
      '- Integrating content and features based on marketing and business requirements.',
      'This project focused on delivering a professional and intuitive user experience while supporting Youtap’s mission to provide reliable digital services for business owners.'
    ],
    link: 'https://www.youtap.id/'
  },
  {
    company: 'Dinamis Biro Psikologi',
    role: 'Website Development Internship',
    period: 'February 2024 - July 2024',
    description: [
      'Manage and develop the company website using WordPress, by designing new features according to business strategy, as well as ensuring security and optimal performance through regular updates and collaboration with the content design team. SEO optimization and monitoring of industry trends to increase site visibility and traffic.',
      '- Design and implement new features based on business needs and user feedback.',
      '- Optimizing site performance by improving page loading speed and ensuring responsiveness across devices.',
      '- Collaborate with content and design teams to maintain brand consistency and create an attractive and easy-to-use user interface.'
    ],
    link: 'https://dinamispsikologi.id/'
  }
]

const activeIndex = ref<number | null>(0)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const hover = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <section id="experience" class="w-full bg-background py-section-padding px-4 md:px-gutter text-on-surface">
    <div class="max-w-container-max mx-auto">
      <div class="mb-12">
        <div class="text-brand-yellow font-label-mono uppercase tracking-widest mb-4">The Companies I've worked with</div>
        <h1 class="text-display-lg-mobile md:text-display-lg font-display-lg uppercase text-primary">experience</h1>
      </div>

      <div class="flex flex-col gap-6">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="border-b border-surface-variant pb-6 transition-all duration-300 cursor-pointer group"
          @click="toggle(index)"
          @mouseenter="hover(index)"
        >
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-4">
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <h3 class="text-headline-sm md:text-headline-md font-headline-md text-primary transition-colors duration-300 group-hover:text-brand-yellow">
                {{ exp.company }}
              </h3>
              <div class="text-primary-fixed bg-primary-fixed/10 px-4 py-1.5 rounded-full text-label-mono font-label-mono w-fit">
                {{ exp.role }}
              </div>
            </div>
            <div class="text-on-surface-variant font-label-mono text-sm uppercase tracking-wider">
              {{ exp.period }}
            </div>
          </div>

          <div 
            class="grid transition-all duration-500 ease-in-out"
            :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div class="max-w-3xl flex flex-col gap-4 pb-2">
                <p 
                  v-for="(desc, dIndex) in exp.description" 
                  :key="dIndex"
                  class="text-body-md font-body-md text-on-surface-variant leading-relaxed"
                >
                  {{ desc }}
                </p>
                
                <a 
                  :href="exp.link" 
                  target="_blank" 
                  class="inline-flex items-center gap-2 text-brand-yellow hover:text-white transition-colors duration-300 font-label-mono uppercase tracking-wider mt-4 w-fit"
                  @click.stop
                >
                  <span class="link-text">Visit Website</span>
                  <span class="text-lg">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
