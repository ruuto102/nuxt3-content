<script>
  import HamburgerMenu from '@/components/content/HamburgerMenu.vue';

  export default {
      data() {
          return {
          isDark: false,
          email: 'nana.yoshizawa.1002@gmail.com',
          subject: 'お問い合わせ',
          body: 'ここにメッセージを入力してください',
          };
    },
    computed: {
      mailtoLink() {
        return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
      },
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      toggleDark() {
        this.isDark = !this.isDark;
        document.documentElement.classList.toggle('dark', this.isDark);
      },
      setInitialDarkMode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark = prefersDark;
        document.documentElement.classList.toggle('dark', this.isDark);
      }
    },
    mounted() {
      this.setInitialDarkMode();
    },
    components: {
      HamburgerMenu,
    },
  };
</script>

<template>
    <header class="flex justify-between items-end">
        <h1 class="p-4 text-2xl font-cherry font-semibold md:text-4xl">
            <NuxtLink to="/">
                <span class="font-bold scroll-pr-1">
                    Yoshi7
                </span>
                <span class="text-indigo-600 text-xl -ml-[7px] md:text-2xl">
                    .Blog
                </span>
            </NuxtLink>
        </h1>

        <div class="flex items-center">
            <nav class="hidden md:block mr-4">
                <ul class="flex text-xl md:text-2xl">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About Me</nuxt-link></li>
                    <li><a :href="mailtoLink" @click="toggleMenu" class="block">Contact</a></li>
                </ul>
            </nav>
    
            <!-- modeトグルボタン -->
            <button
                @click="toggleDark"
                class="hidden md:block relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1 transition-colors duration-300"
            >
                <span
                class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
                :class="{ 'translate-x-8': isDark }"
                ></span>
                <span class="z-10 w-full flex justify-between text-xs px-2 font-bold text-gray-700 dark:text-white">
                <span>☀️</span>
                <span>🌙</span>
                </span>
            </button>
        </div>
        <HamburgerMenu class="md:hidden p-4" />
    </header>
</template>
<style scoped>
li {
    @apply p-4;
}
</style>