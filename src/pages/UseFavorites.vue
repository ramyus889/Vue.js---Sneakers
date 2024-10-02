<script>
export default {
  name: 'UseFavorites',
  mounted() {
    document.title = 'Vue Sneakers - Favorites';
  }
};
</script>
<script setup>
import UseCardList from '@/components/UseCardList.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://2fb4a0db868f6dac.mokky.dev/favorites?_relations=items`
    );
    favorites.value = data.map((obj) => obj.item);
  } catch (err) {
    console.log(err);
  }
});
</script>
<template>
  <div class="p-10 text-3xl font-bold">Мои закладки</div>
  <UseCardList :items="favorites" isFavorites />
</template>
