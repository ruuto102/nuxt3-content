<script>
import HamburgerMenu from '@/components/content/HamburgerMenu.vue';

export default {
  components: {
    HamburgerMenu,
  },
};
</script>

<template>
    <header class="flex justify-between items-end">
        <h1 class="p-4 text-2xl font-semibold md:text-4xl">
            <NuxtLink to="/">
                <span class="font-bold">
                    Yoshi7
                </span>
                <span class="text-indigo-600 text-xl md:text-2xl">
                    .Blog
                </span>
            </NuxtLink>
        </h1>
        <nav class="hidden md:block">
            <ul class="flex text-xl md:text-2xl">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About Me</nuxt-link></li>
            </ul>
        </nav>
        <HamburgerMenu class="md:hidden p-4" />
        <!-- <p class="text-gray-500">Learn programming</p> -->
    </header>
</template>
<style scoped>
li {
    @apply p-4;
}
</style>