<template>
  <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
      <h1 class="text-4xl font-semibold mb-4">About Me</h1>
      <NuxtImg
        src="/img/girl.png"
        alt="My Profile Picture"
        placeholder="blur"
        class="w-full md:w-2/5 aspect-square rounded-full mx-auto transition-opacity duration-700"
        :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
        @load="loaded = true"
      />
      <h2 class="text-2xl font-semibold mb-2">Yoshi7</h2>
      <p class="text-gray-600 mb-4 dark:text-gray-200">Web Developer from Saitama, Japan.<br>I love coding and building beautiful websites.</p>
      
      <h3 class="text-xl font-bold mt-4">Skills</h3>
      <ul class="list-disc list-inside">
        <li>HTML, CSS, JavaScript</li>
        <li>Vue.js, Nuxt.js</li>
        <li>Node.js</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Figma</li>
      </ul>
  
      <h3 class="text-xl font-bold mt-4">Experience</h3>
      <p class="text-gray-600 dark:text-gray-200">I have been working as a web developer and web Designer for 3 years, focusing on frontend development.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loaded = ref(false)
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
