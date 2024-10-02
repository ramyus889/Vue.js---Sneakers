<script setup>
import UseCardList from '@/components/UseCardList.vue';
import axios from 'axios';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { inject, onMounted, reactive, ref, watch } from 'vue';

const { cart, addToCart, removeFromCart } = inject('cart');
const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
});

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

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
      const favorite = favorites.find((favorite) => favorite.item_id === item.id);
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

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(`https://2fb4a0db868f6dac.mokky.dev/items`, { params });
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }));
  } catch (error) {
    console.log(error);
  }
};

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      };
      item.isFavorite = true;
      const { data } = await axios.post(`https://2fb4a0db868f6dac.mokky.dev/favorites`, obj);
      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(`https://2fb4a0db868f6dac.mokky.dev/favorites/${item.favoriteId}`);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }));
});

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }));
});

watch(filters, fetchItems);
</script>
<template>
  <div class="flex md:flex-row gap-5 flex-col md:justify-between sm:px-10 px-5 pt-10">
    <div class="font-bold text-3xl">Все кроссовки</div>
    <div class="flex gap-4 sm:flex-row flex-col sm:place-content-center">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          @input="onChangeSearchInput"
          v-model="filters.searchQuery"
          placeholder="Search"
          type="text"
          class="!bg-white !text-black w-full"
        />
      </IconField>
      <select
        @change="onChangeSelect"
        class="bg-white outline-none text-black cursor-pointer border border-slate-700 rounded-xl px-4 max-[640px]:py-3 transition"
      >
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
    </div>
  </div>
  <UseCardList :items="items" @addToFavorite="addToFavorite" @addToCart="onClickAddPlus" />
</template>
