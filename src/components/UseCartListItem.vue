<script setup>
import { inject } from 'vue';
import UseCartItem from './UseCartItem.vue';

const { cart, removeFromCart } = inject('cart');
</script>
<template>
  <div class="">
    <div class="flex flex-col gap-4" v-auto-animate>
      <UseCartItem
        v-for="item in cart"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :imageUrl="item.imageUrl"
        @onClickRemove="() => removeFromCart(item)"
      />
    </div>
  </div>
</template>
