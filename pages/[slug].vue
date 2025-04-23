<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '#app'
import { format } from 'date-fns'

const { slug } = useRoute().params
const { data: doc } = await useAsyncData(() => queryContent(`/posts/${slug}`).findOne())
const formattedDate = computed(() => {
  return doc.value?.date ? format(new Date(doc.value.date), 'yyyy/MM/dd') : '日付なし'
})
const loaded = ref(false)
</script>

<template>
  <article class="mb-4 rounded-2xl bg-white dark:bg-gray-700">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
      <!-- Header  -->
      <header>
        <div class="px-4">
          <h1 class="ml:py-10 mx-auto py-5 text-xl font-bold leading-8 md:text-4xl">
            {{ doc.title }}
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-100">公開日: {{ formattedDate }}</p>
        </div>
        <NuxtImg
          v-if="doc.thumbnail"
          :src="doc.thumbnail"
          :alt="doc.title"
          placeholder="blur"
          class="aspect-square max-h-96 w-full object-contain p-4 transition-opacity duration-500"
          :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
          @load="loaded = true"
        />
      </header>
      <!-- ./ Header  -->

      <!-- textarea -->
      <div class="content p-4 text-sm">
        <ContentRenderer :value="doc"></ContentRenderer>
      </div>
      <!-- ./textarea -->
    </ContentDoc>
    <div class="text-center">
      <NuxtLink to="/">
        <button class="my-3 rounded-xl border bg-white px-4 py-2 dark:bg-gray-500">
          Back to Top
        </button>
      </NuxtLink>
    </div>
  </article>
</template>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}
.content p,
.content li,
.content blockquote,
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content pre,
.content table {
  @apply leading-7 tracking-widest;
}
.content li {
  @apply pl-3;
}
.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}
.content img {
  @apply mx-auto w-full md:w-3/4;
}
</style>
