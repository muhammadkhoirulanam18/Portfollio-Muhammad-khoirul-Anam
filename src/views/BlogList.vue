<template>
  <div class="min-h-screen bg-background text-on-background pt-24 pb-section-padding">
    <Navbar />
    
    <div class="max-w-container-max mx-auto px-gutter md:px-8">
      <!-- 1. Header Section -->
      <div v-reveal="{ delay: 0 }" class="mb-12">
        <span class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold font-label-mono mb-4 uppercase tracking-wider">
          Read Our Blog
        </span>
        <h1 class="text-display-lg-mobile md:text-display-lg font-headline-md text-primary mb-4 leading-tight">
          Browse Our Resources
        </h1>
        <p class="text-on-surface-variant text-body-lg max-w-2xl">
          We provide tips and resources from industry leaders. For real.
        </p>
      </div>

      <!-- 2. Featured Post -->
      <div v-if="featuredPost" v-reveal="{ delay: 100 }" class="mb-16">
        <router-link :to="'/blog/' + featuredPost.slug" class="group relative block w-full rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[21/9]">
          <img :src="featuredPost.coverImage" :alt="featuredPost.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div class="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div class="max-w-3xl">
                <h2 class="text-2xl md:text-4xl font-headline-md text-white mb-3 group-hover:text-secondary transition-colors inline-flex items-center gap-3">
                  {{ featuredPost.title }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </h2>
                <p class="text-gray-300 line-clamp-2 md:line-clamp-3 mb-6 md:text-lg">
                  {{ featuredPost.summary }}
                </p>
                
                <div class="flex items-center gap-4 text-sm text-gray-400">
                  <div class="flex items-center gap-2">
                    <img :src="featuredPost.authorAvatar" :alt="featuredPost.author" class="w-8 h-8 rounded-full border border-gray-600" />
                    <span class="text-white">{{ featuredPost.author }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>{{ featuredPost.date }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Badges -->
              <!-- <div class="flex flex-wrap gap-2">
                <span v-for="tag in featuredPost.tags" :key="tag" class="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-medium hover:bg-white/20 transition-colors">
                  {{ tag }}
                </span>
              </div> -->
            </div>
          </div>
        </router-link>
      </div>

      <!-- 3. Filter & Search Bar -->
      <div v-reveal="{ delay: 200 }" class="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-surface-variant pb-4">
        <!-- Categories -->
        <div class="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'text-sm font-medium whitespace-nowrap pb-4 -mb-4 border-b-2 transition-colors duration-300',
              selectedCategory === cat ? 'text-primary border-secondary' : 'text-on-surface-variant border-transparent hover:text-primary hover:border-surface-variant'
            ]"
          >
            {{ cat }}
          </button>
        </div>
        
        <!-- Search -->
        <div class="relative w-full md:w-72">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search blog..." 
            class="w-full pl-10 pr-4 py-2.5 bg-surface-container rounded-full border border-surface-variant text-primary focus:outline-none focus:border-secondary transition-colors text-sm"
          >
        </div>
      </div>

      <!-- 4. Grid Blog List -->
      <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link 
          v-for="(post, index) in filteredPosts" 
          :key="post.slug"
          :to="'/blog/' + post.slug"
          v-reveal="{ delay: (index % 3) * 100 }"
          class="group flex flex-col h-full bg-transparent"
        >
          <div class="aspect-[4/3] w-full overflow-hidden relative rounded-xl mb-4">
            <img :src="post.coverImage" :alt="post.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur text-blue-800 text-[10px] uppercase font-bold rounded-full shadow-sm tracking-wider">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="flex flex-col flex-grow">
            <h3 class="text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2 font-headline-sm">
              {{ post.title }}
            </h3>
            <p class="text-on-surface-variant text-sm line-clamp-2 mb-6 flex-grow">
              {{ post.summary }}
            </p>
            
            <div class="flex items-center gap-3 mt-auto pt-2">
              <img :src="post.authorAvatar" :alt="post.author" class="w-8 h-8 rounded-full border border-surface-variant" />
              <div class="flex flex-col">
                <span class="text-xs font-medium text-primary">{{ post.author }}</span>
                <span class="text-[10px] text-on-surface-variant">{{ post.readTime }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      
      <!-- Empty State -->
      <div v-else class="py-20 text-center text-on-surface-variant">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p class="text-lg">No articles found for your search.</p>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Navbar from '../components/Navbar.vue';
import { getAllPosts } from '../utils/posts';

const allPosts = ref(getAllPosts());

const categories = computed(() => {
  return ['All', ...new Set(allPosts.value.map(p => p.category))].filter(Boolean);
});
const selectedCategory = ref('All');
const searchQuery = ref('');

// Featured post is always the latest one (index 0)
const featuredPost = computed(() => {
  return allPosts.value.length > 0 ? allPosts.value[0] : null;
});

// Filter logic for grid cards
const filteredPosts = computed(() => {
  let posts = allPosts.value;
  
  // If we are looking at the default "All" state with no search, 
  // exclude the featured post from the grid so it's not duplicated.
  if (selectedCategory.value === 'All' && !searchQuery.value.trim()) {
    posts = posts.slice(1);
  }

  // Filter by category
  if (selectedCategory.value !== 'All') {
    posts = posts.filter(p => p.category === selectedCategory.value);
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    posts = posts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.summary.toLowerCase().includes(q) ||
      (p.category && p.category.toLowerCase().includes(q))
    );
  }

  return posts;
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
