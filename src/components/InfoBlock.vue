<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
});
</script>
<template>
  <div class="">
    <div class="flex place-content-center">
      <img :src="imageUrl" alt="" width="80" height="80" />
    </div>
    <h2 class="mt-4 text-2xl font-medium text-center">{{ title }}</h2>
    <p class="text-center text-gray-400">{{ description }}</p>
  </div>
</template>
