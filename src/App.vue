<script setup>
import UseHeader from '@/components/UseHeader.vue';

import { computed, provide, ref, watch } from 'vue';

const cart = ref([]);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  },
  { deep: true }
);

provide('cart', { cart, addToCart, removeFromCart });
</script>

<template>
  <div class="">
    <UseHeader :totalPrice="totalPrice" :vatPrice="vatPrice" />
    <RouterView></RouterView>
  </div>
</template>
