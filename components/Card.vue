<script setup lang="ts">
import { format } from 'date-fns'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '/img/hello-world.png',
    required: true,
  },
})
const loaded = ref(false)
const formattedDate = format(new Date(props.date), 'yyyy/MM/dd')
</script>

<template>
  <NuxtLink
    :to="`/${link}`"
    class="block overflow-hidden rounded-lg bg-white shadow-sm duration-300 hover:shadow-lg dark:bg-gray-800"
  >
    <div class="flex flex-row md:flex-col">
      <div class="h-auto w-1/3 md:h-48 md:w-full">
        <img
          :src="image"
          alt="ブログサムネイル"
          class="aspect-square h-full w-full object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
          @load="loaded = true"
        />
      </div>

      <div class="flex w-2/3 flex-col p-4 md:w-full">
        <p class="mb-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
          {{ formattedDate }}
        </p>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white md:text-base">
          {{ title }}
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>
