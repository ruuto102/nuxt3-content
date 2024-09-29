<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: null,
        required: true
      },
      date: {
        type: String,
        default: null,
        required: true
      },
      link: {
        type: String,
        default: null,
        required: true
      },
      image: {
        type: String,
        default: '/img/hello-world.png',
        required: true
      }
})
</script>

<template>
    <div class="blog-card bg-white rounded-2xl overflow-hidden mb-4 max-w-lg relative">
        <NuxtLink :to="`/${link}`">
            <div class="h-24 md:h-40 relative">
                <img
                    :src="image"
                    class="w-full h-full object-cover absolute"
                />
            </div>

            <div class="blog-card--meta px-2 py-4">
                <h3 class="text-sm md:text-xl font-semibold mb-8">
                    {{ title }}
                </h3>
                <div class="text-xs md:text-sm text-gray-500 absolute bottom-4 left-2">
                    {{ date }}
                </div>
            </div>
        </NuxtLink>
    </div>
</template>