<script setup lang="ts">
import { useAsyncData } from '#app'; 
import { format } from 'date-fns';

const { slug } = useRoute().params;
const { data: doc } = await useAsyncData(() => queryContent(`/posts/${slug}`).findOne());
const formattedDate = computed(() => {
  return doc.value?.date ? format(new Date(doc.value.date), 'yyyy/MM/dd') : '日付なし';
});
</script>

<template>
    <article class="bg-white rounded-2xl mb-4">
      <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
        <!-- Header  -->
        <header>
          <div class="px-4">
            <h1 class="text-xl md:text-4xl font-bold mx-auto leading-8 py-5 ml:py-10">
              {{ doc.title }}
            </h1>
            <p class="text-gray-500 text-sm">
              公開日: {{ formattedDate }}
            </p>
          </div>
          <img
            v-if="doc.thumbnail"
            :src="doc.thumbnail"
            :alt="doc.title"
            class="w-full p-4 max-h-96 object-contain"
          />
        </header>
        <!-- ./ Header  -->

        <!-- textarea -->
        <div class="p-4 content">
          <ContentRenderer :value="doc"></ContentRenderer>
        </div>
        <!-- ./textarea -->
      </ContentDoc>
      <div class="text-center">
        <NuxtLink to="/">
          <button class="py-2 px-4 bg-white rounded-xl border my-3">Back to Top</button>
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
  @apply mb-5;
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
  @apply tracking-widest leading-7
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