<template>
  <div>
    <!-- ハンバーガーアイコン -->
    <button @click="toggleMenu" class="hamburger focus:outline-none z-50 relative">
      <span :class="{ 'transform rotate-45': isOpen }" class="block w-8 h-0.5 bg-black mb-1 transition-all duration-300"></span>
      <span :class="{ 'opacity-0': isOpen }" class="block w-8 h-0.5 bg-black mb-1 transition-all duration-300"></span>
      <span :class="{ '-rotate-45 -translate-y-2': isOpen }" class="block w-8 h-0.5 bg-black transition-all duration-300"></span>
    </button>

    <!-- 全画面表示のメニュー -->
    <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center z-40">
      <ul class="text-white text-2xl space-y-6">
        <li><nuxt-link to="/" @click="toggleMenu">Home</nuxt-link></li>
        <li><nuxt-link to="/about" @click="toggleMenu">About Me</nuxt-link></li>
        <!-- <li><nuxt-link to="/contact" @click="toggleMenu">Contact</nuxt-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, 
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* ハンバーガーアイコンのスタイル */
.hamburger {
  position: relative;
  z-index: 50;
}

/* メニューを開いたときのアニメーション */
.hamburger span {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>
