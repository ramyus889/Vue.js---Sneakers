<script setup>
import UseCard from './UseCard.vue';

defineProps({
  items: Array,
  isFavorites: Boolean
});

const emit = defineEmits(['addToFavorite', 'addToCart']);
</script>
<template>
  <div class="sm:px-10 px-5 pb-10 max-[1024px]:flex max-[1024px]:place-content-center">
    <div
      class="grid grid-cols-1 min-[1700px]:grid-cols-6 min-[1500px]:grid-cols-5 min-[1280px]:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 items-center gap-10 mt-10"
      v-auto-animate
    >
      <UseCard
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
        :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </div>
  </div>
</template>
