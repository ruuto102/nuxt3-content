<template>
  <div class="max-w-6xl px-4 flex flex-col mx-auto h-screen">
    <Header />

     <!-- Main Content -->
     
    <NuxtPage />

     <!-- ./Main Content -->

     <Footer
      class="mt-auto"
     />
  </div>
</template>

<style>
body {
  @apply bg-gray-100;
}
</style>
