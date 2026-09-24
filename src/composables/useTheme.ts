import { ref, onMounted } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      isDark.value = true;
    }
    // No need to apply here because index.html script handles initial FOUC prevention.
    // We just want to sync the state with what index.html applied.
  };

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    applyTheme();
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  };

  onMounted(() => {
    initTheme();
  });

  return {
    isDark,
    toggleTheme,
  };
}
