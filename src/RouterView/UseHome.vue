<script setup>
import UseCardList from '@/components/UseCardList.vue';
import axios from 'axios';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { onMounted, provide, reactive, ref, watch } from 'vue';

const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
});

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value;
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://2fb4a0db868f6dac.mokky.dev/favorites`);
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id);
      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const addToFavorite = async (item) => {
  item.isFavorite = true;
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(`https://2fb4a0db868f6dac.mokky.dev/items`, { params });
    items.value = data.map((obj) => ({ ...obj, isFavorite: false, isAdded: false }));
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});
watch(filters, fetchItems);

provide('addToFavorite', addToFavorite);
</script>

<template>
  <div class="">
    <div class="flex justify-between px-10 pt-10">
      <div class="font-bold text-3xl">Все кроссовки</div>
      <div class="flex">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            @input="onChangeSearchInput"
            v-model="filters.searchQuery"
            placeholder="Search"
            type="text"
            class="!bg-white !text-black !rounded-r-none !rounded-l-2xl"
          />
        </IconField>
        <select
          @change="onChangeSelect"
          class="bg-white outline-none text-black cursor-pointer border border-slate-700 rounded-r-2xl px-4 transition"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
      </div>
    </div>
    <UseCardList :items="items" />
  </div>
</template>
