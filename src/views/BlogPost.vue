<template>
  <div class="min-h-screen bg-background text-on-background pt-24 pb-section-padding">
    <Navbar />
    
    <div class="max-w-3xl mx-auto px-gutter md:px-0">
      <router-link to="/blog" class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Kembali ke Blog
      </router-link>

      <article v-if="post">
        <!-- Header -->
        <header class="mb-8 border-b border-surface-variant pb-8 text-center md:text-left">
          <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            <span v-for="tag in post.tags" :key="tag" class="text-xs font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20">
              {{ tag }}
            </span>
          </div>
          <h1 class="text-display-lg-mobile md:text-5xl font-headline-md text-primary mb-6 leading-tight">{{ post.title }}</h1>
          
          <div class="flex items-center justify-center md:justify-start gap-4 text-sm text-on-surface-variant">
            <div class="flex items-center gap-2">
              <img :src="post.authorAvatar" :alt="post.author" class="w-10 h-10 rounded-full border border-surface-variant" />
              <div class="flex flex-col text-left">
                <span class="text-primary font-bold">{{ post.author }}</span>
                <span>{{ post.date }} &middot; {{ post.readTime }}</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Cover Image -->
        <div class="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
          <img :src="post.coverImage" :alt="post.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-none prose-headings:font-headline-sm prose-a:text-secondary prose-a:underline hover:prose-a:text-primary-fixed prose-img:rounded-xl prose-img:shadow-lg" v-html="post.html"></div>
        
        <!-- 1. Share Footer -->
        <footer class="mt-16 pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
            <span class="text-sm font-medium text-on-surface-variant">Bagikan artikel ini:</span>
            <div class="flex gap-2">
              <button @click="copyLink" class="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary border border-surface-variant" title="Copy Link">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </button>
              <a :href="'https://twitter.com/intent/tweet?text=' + encodeURIComponent(post.title) + '&url=' + currentUrl" target="_blank" class="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-[#1DA1F2] border border-surface-variant" title="Share to Twitter">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </footer>

        <!-- 2. Author Bio Box -->
        <div class="mt-12 p-6 md:p-8 rounded-2xl bg-surface-container-low border border-surface-variant flex flex-col md:flex-row items-center md:items-start gap-6">
          <img :src="post.authorAvatar" :alt="post.author" class="w-20 h-20 rounded-full border-2 border-secondary" />
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold text-primary mb-2">Ditulis oleh {{ post.author }}</h3>
            <p class="text-on-surface-variant text-sm mb-4">
              Seorang pengembang perangkat lunak dan desainer UI/UX yang antusias dalam menciptakan pengalaman digital yang modern, responsif, dan interaktif.
            </p>
            <router-link to="/" class="text-sm font-bold text-secondary hover:underline">Lihat Profil Portfolio &rarr;</router-link>
          </div>
        </div>

        <!-- 3. Next / Prev Navigation -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <router-link v-if="nextPost" :to="'/blog/' + nextPost.slug" class="p-6 rounded-xl border border-surface-variant hover:border-secondary transition-colors group flex flex-col items-start text-left">
            <span class="text-xs text-on-surface-variant mb-2 uppercase tracking-wider font-bold">Artikel Sebelumnya</span>
            <h4 class="text-primary group-hover:text-secondary font-bold line-clamp-2">{{ nextPost.title }}</h4>
          </router-link>
          <div v-else></div> <!-- spacer if no next post -->
          
          <router-link v-if="prevPost" :to="'/blog/' + prevPost.slug" class="p-6 rounded-xl border border-surface-variant hover:border-secondary transition-colors group flex flex-col items-end text-right">
            <span class="text-xs text-on-surface-variant mb-2 uppercase tracking-wider font-bold">Artikel Selanjutnya</span>
            <h4 class="text-primary group-hover:text-secondary font-bold line-clamp-2">{{ prevPost.title }}</h4>
          </router-link>
        </div>

        <!-- 4. Related Articles -->
        <div v-if="relatedPosts.length > 0" class="mt-16 pt-12 border-t border-surface-variant">
          <h3 class="text-2xl font-headline-sm text-primary mb-8 text-center">Artikel Terkait</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <router-link 
              v-for="relPost in relatedPosts" 
              :key="relPost.slug"
              :to="'/blog/' + relPost.slug"
              class="group flex flex-col bg-surface hover:bg-surface-container transition-colors duration-300 rounded-xl overflow-hidden border border-transparent hover:border-surface-variant h-full"
            >
              <div class="aspect-video w-full overflow-hidden relative">
                <img :src="relPost.coverImage" :alt="relPost.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h4 class="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">{{ relPost.title }}</h4>
                <div class="text-xs text-on-surface-variant mt-auto pt-2">{{ relPost.date }} &middot; {{ relPost.readTime }}</div>
              </div>
            </router-link>
          </div>
        </div>

      </article>

      <div v-else class="text-center py-20">
        <h2 class="text-headline-sm text-error mb-4">Artikel tidak ditemukan</h2>
        <router-link to="/blog" class="px-6 py-2 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-fixed transition-colors">
          Kembali ke Blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';
import { getPostBySlug, getAllPosts } from '../utils/posts';

const route = useRoute();
const allPosts = getAllPosts();

const post = ref(getPostBySlug(route.params.slug as string));
const currentUrl = ref('');

onMounted(() => {
  currentUrl.value = window.location.href;
});

watchEffect(() => {
  post.value = getPostBySlug(route.params.slug as string);
  currentUrl.value = window.location.href;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (post.value) {
    document.title = `${post.value.title} | Blog`;
  }
});

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  alert('Link artikel berhasil disalin!');
};

// Next/Prev Logic
// allPosts is sorted newest to oldest. 
// Index 0 = Newest.
const postIndex = computed(() => {
  if (!post.value) return -1;
  return allPosts.findIndex(p => p.slug === post.value!.slug);
});

// Newer article (chronologically next)
const prevPost = computed(() => {
  if (postIndex.value > 0) return allPosts[postIndex.value - 1]; 
  return null;
});

// Older article (chronologically previous)
const nextPost = computed(() => {
  if (postIndex.value !== -1 && postIndex.value < allPosts.length - 1) return allPosts[postIndex.value + 1]; 
  return null;
});

// Related Posts Logic
const relatedPosts = computed(() => {
  if (!post.value) return [];
  return allPosts
    .filter(p => p.slug !== post.value!.slug && p.category === post.value!.category)
    .slice(0, 2); // Max 2 related posts
});
</script>
