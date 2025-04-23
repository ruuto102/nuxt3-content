<template>
  <div :class="{ dark: isDark }" class="max-w-6xl px-4 flex flex-col mx-auto h-screen font-kawaii">
    <Header />

    <NuxtPage />

    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const setInitialDarkMode = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = prefersDark
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  setInitialDarkMode()
})
</script>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-900 text-black dark:text-white;
}
</style>

