import type { Directive, DirectiveBinding } from 'vue'

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay;
        
        if (delay) {
          el.style.transitionDelay = `${delay}ms`;
        }
        
        // Add class to trigger animation
        el.classList.remove('reveal-hidden');
        el.classList.add('reveal-visible');
        
        // Unobserve to only animate once
        observer.unobserve(el);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  }
);

export const vReveal: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // Add base hidden class
    el.classList.add('reveal-hidden');
    
    // Support v-reveal="100" or v-reveal="{ delay: 100 }"
    if (binding.value && typeof binding.value === 'object' && binding.value.delay) {
      el.dataset.revealDelay = binding.value.delay.toString();
    } else if (typeof binding.value === 'number') {
      el.dataset.revealDelay = binding.value.toString();
    }

    revealObserver.observe(el);
  },
  unmounted(el: HTMLElement) {
    revealObserver.unobserve(el);
  }
};
