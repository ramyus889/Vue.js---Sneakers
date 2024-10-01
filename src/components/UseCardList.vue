<script setup>
import UseCard from './UseCard.vue';

defineProps({
  items: Array
});

const emit = defineEmits(['addToFavorite', 'addToCart']);
</script>
<template>
  <div class="px-10 pb-10">
    <div class="grid grid-cols-6 items-center gap-10 mt-10">
      <UseCard
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :onClickFavorite="() => emit('addToFavorite', item)"
        :onClickAdd="() => emit('addToCart', item)"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </div>
  </div>
</template>
