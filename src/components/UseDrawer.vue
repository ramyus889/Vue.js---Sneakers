<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import UseCartListItem from './UseCartListItem.vue';

const visible = ref(false);
</script>
<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="visible"
      position="right"
      header="Корзина"
      class="!bg-white !text-black !w-[360px]"
    >
      <UseCartListItem />

      <div class="flex flex-col gap-4">
        <div class="flex gap-1">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b class="">12990 ₽</b>
        </div>
        <div class="flex gap-1">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b class="">980 ₽</b>
        </div>
        <Button disabled class="w-full !py-3 mt-4 !rounded-xl font-semibold">Оформить заказ</Button>
      </div>
    </Drawer>
    <Button @click="visible = true" text="">
      <div class=""><img src="/img/cart.svg" alt="" class="w-[18px]" /></div>
      <b class="text-slate-800 hover:text-slate-400">1205 руб.</b></Button
    >
  </div>
</template>
