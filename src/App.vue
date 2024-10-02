<script setup>
import UseHeader from '@/components/UseHeader.vue';
import axios from 'axios';

import { computed, provide, ref, watch } from 'vue';

const cart = ref([]);
const isCreatingOrder = ref(false);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const cartIsEmpty = computed(() => cart.value.length === 0);

const cartbuttonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value);

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(`https://2fb4a0db868f6dac.mokky.dev/orders`, {
      items: cart.value,
      totalPrice: totalPrice.value
    });

    cart.value = [];

    return data;
  } catch (err) {
    console.log(err);
  } finally {
    isCreatingOrder.value = false;
  }
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
    <UseHeader
      :totalPrice="totalPrice"
      :vatPrice="vatPrice"
      @createOrder="createOrder"
      :cartbuttonDisabled="cartbuttonDisabled"
    />
    <RouterView></RouterView>
  </div>
</template>
