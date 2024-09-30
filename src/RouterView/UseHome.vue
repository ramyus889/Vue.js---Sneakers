<script setup>
import UseCardList from '@/components/UseCardList.vue';
import UseSearch from '@/components/UseSearch.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const items = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://2fb4a0db868f6dac.mokky.dev/items');
    items.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="">
    <UseSearch />
    <UseCardList :items="items" />
  </div>
</template>
