<script setup>
import UseCard from './UseCard.vue';

defineProps({
  items: Array
});
</script>
<template>
  <div class="px-10 pb-10">
    <div class="grid grid-cols-6 items-center gap-10 mt-10">
      <UseCard
        v-for="item in items"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
      />
    </div>
  </div>
</template>
