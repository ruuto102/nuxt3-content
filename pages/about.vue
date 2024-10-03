<template>
  <div class="bg-white shadow-lg rounded-lg p-6">
    <h1 class="text-4xl font-semibold mb-4">About Me</h1>
    <img src="/img/girl.png" alt="My Profile Picture" class="w-full md:w-2/5 rounded-full mx-auto" />
    <h2 class="text-2xl font-semibold mb-2">Yoshi7</h2>
    <p class="text-gray-600 mb-4">Web Developer from Saitama, Japan.<br>I love coding and building beautiful websites.</p>
    
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
    <p class="text-gray-600">I have been working as a web developer and web Designer for 3 years, focusing on frontend development.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
