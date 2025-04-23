<template>
  <div>
    <!-- ハンバーガーアイコン（メニュー閉時） -->
    <button
      v-if="!isOpen"
      @click="toggleMenu"
      class="hamburger focus:outline-none z-50 fixed"
    >
      <span class="block w-8 h-0.5 bg-black dark:bg-white mb-1 transition-all duration-300"></span>
      <span class="block w-8 h-0.5 bg-black mb-1 dark:bg-white transition-all duration-300"></span>
      <span class="block w-8 h-0.5 bg-black dark:bg-white transition-all duration-300"></span>
    </button>

    <!-- メニュー本体 -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 flex flex-col justify-center items-center z-40"
    >
      <ul class="text-black dark:text-white text-2xl space-y-8 text-center pb-9">
        <li><nuxt-link to="/" @click="toggleMenu" class="block">Home</nuxt-link></li>
        <li><nuxt-link to="/about" @click="toggleMenu" class="block">About Me</nuxt-link></li>
        <li><a :href="mailtoLink" @click="toggleMenu" class="block">Contact</a></li>
      </ul>


      <!-- modeトグルボタン -->
      <button
        @click="toggleDark"
        class="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1 transition-colors duration-300"
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

      <!-- バツボタン（メニュー開時の下中央） -->
      <button
        @click="toggleMenu"
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 text-3xl dark:text-white"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
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
};
</script>


<style scoped>
.hamburger {
  position: relative;
  z-index: 50;
}

.important-class {
  @apply bg-white !important;
}
</style>
