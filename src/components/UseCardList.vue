<script setup>
import UseCard from './UseCard.vue';
// import { inject } from 'vue';

defineProps({
  items: Array
});

// TODO: прокидывание данных с помощью inject

// const addToFavorite = inject('addToFavorite');

// const onClickFavorite = () => {
//   const obj = {
//     ...props,
//     parentId: props.id
//   };

//   addToFavorite(obj);
// };
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
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </div>
  </div>
</template>
