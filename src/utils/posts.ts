import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

// Vite's import.meta.glob to load all markdown files in the folder
const postFiles = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  html: string;
  coverImage: string;
  author: string;
  authorAvatar: string;
  category: string;
  readTime: string;
}

// Simple frontmatter parser to avoid Node.js 'Buffer' and 'fs' errors in browser
function parseFrontmatter(rawContent: string) {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: rawContent };
  
  const yamlString = match[1];
  const content = match[2];
  
  const data: Record<string, any> = {};
  yamlString.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(s => {
          let str = s.trim();
          if (str.startsWith('"') && str.endsWith('"')) return str.slice(1, -1);
          if (str.startsWith("'") && str.endsWith("'")) return str.slice(1, -1);
          return str;
        });
      }
      data[key] = value;
    }
  });
  
  return { data, content };
}

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const path in postFiles) {
    const rawContent = postFiles[path] as string;
    const slug = path.replace(/\\/g, '/').split('/').pop()?.replace('.md', '') || '';
    
    try {
      const { data, content } = parseFrontmatter(rawContent);
      const html = md.render(content);

      const readTime = Math.ceil((content.split(/\s+/).length || 0) / 200);
      const tags = data.tags || [];
      const fallbackImage = slug === 'seo-fundamentals-2026' ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' :
                            slug === 'website-performance-matters' ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop' :
                            slug === 'mobile-first-design' ? 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1200&auto=format&fit=crop' :
                            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop';

      posts.push({
        slug,
        title: data.title || '',
        date: data.date || '',
        summary: data.summary || '',
        tags,
        content,
        html,
        coverImage: data.coverImage || fallbackImage,
        author: data.author || 'Muhammad Khoirul Anam',
        authorAvatar: data.authorAvatar || 'https://ui-avatars.com/api/?name=Khoirul+Anam&background=0D8ABC&color=fff',
        category: data.category || (tags.length > 0 ? tags[0] : 'Blog'),
        readTime: data.readTime || `${readTime} min read`,
      });
    } catch (e) {
      console.error(`Error parsing markdown file: ${path}`, e);
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
