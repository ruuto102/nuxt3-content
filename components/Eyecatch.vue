<template>
  <div class="relative h-64 md:h-96">
    <div
      class="absolute -top-3 right-4 hidden h-64 w-64 transform rounded-full bg-yellow-50 opacity-40 transition-transform duration-700 ease-out dark:block md:right-96 md:top-1 md:h-80 md:w-80"
      :class="{ 'scale-0': !loaded, 'scale-100': loaded }"
    />

    <div
      class="absolute right-16 top-12 hidden h-48 w-48 transform rounded-full bg-yellow-100 opacity-90 transition-transform duration-700 ease-out dark:block md:right-[27rem] md:top-12 md:h-64 md:w-64"
      :class="{ 'scale-0': !loaded, 'scale-100': loaded }"
    />

    <p
      class="speechBubble font-gloria absolute left-2 top-5 text-sm transition-opacity duration-1000 md:left-80 md:top-10 md:text-xl"
      :class="{ 'opacity-0': !loaded, 'opacity-100': loaded, 'animate-seesaw': isShaking }"
    >
      I'm learning to code 🐾
    </p>

    <div class="md:translate-x- absolute -right-4 top-12 md:right-96 md:top-8">
      <NuxtImg
        src="/img/girl.png"
        alt="My Profile Picture"
        placeholder="blur"
        class="inline-block h-48 w-80 rounded-full object-cover transition-opacity duration-500 md:h-96 md:w-96"
        :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
        @load="loaded = true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loaded = ref(false)
const isShaking = ref(false)

onMounted(() => {
  setInterval(() => {
    isShaking.value = true
    setTimeout(() => {
      isShaking.value = false
    }, 800)
  }, 5000)
})
</script>

<style scoped>
.speechBubble {
  position: relative;
  display: inline-block;
  margin-bottom: 22px;
  padding: 16px 24px;
  border: 2px solid #000000;
  border-radius: 30px;
  background-color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
}

.speechBubble::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 79%;
  border-style: solid;
  border-width: 22px 0 0 20px;
  border-color: #000000 transparent transparent;
  translate: -50% 100%;
  transform: skew(27deg);
  transform-origin: top;
}

.speechBubble::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 79%;
  border-style: solid;
  border-width: 16.8px 0 0 15.3px;
  border-color: #ffffff transparent transparent;
  translate: calc(-50% + 0.4px) 100%;
  transform: skew(27deg);
  transform-origin: top;
}
</style>
