<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import UseCartListItem from './UseCartListItem.vue';

defineProps({
  totalPrice: Number,
  vatPrice: Number
});

const visibleRight = ref(false);
</script>
<template>
  <header class="flex justify-between items-center px-[40px] py-[20px] border-b border-slate-600">
    <a href="#" to="/" class="flex gap-2 items-center">
      <div class=""><img src="/img/logo.png" alt="" class="w-[40px] h-[40px]" /></div>
      <div class="flex flex-col leading-[18px]">
        <div class="uppercase font-[700] text-[20px]">vue sneakers</div>
        <div class="">Магазин лучших кроссовок</div>
      </div>
    </a>
    <div class="flex gap-5 items-center">
      <div class="flex justify-center">
        <Drawer
          v-model:visible="visibleRight"
          position="right"
          header="Корзина"
          class="!bg-white !text-black !w-[360px]"
        >
          <UseCartListItem />

          <div class="flex flex-col gap-4 mt-5">
            <div class="flex gap-1">
              <span>Итого:</span>
              <div class="flex-1 border-b border-dashed"></div>
              <b class="">{{ totalPrice }} ₽</b>
            </div>
            <div class="flex gap-1">
              <span>Налог 5%:</span>
              <div class="flex-1 border-b border-dashed"></div>
              <b class="">{{ vatPrice }} ₽</b>
            </div>
            <Button disabled class="w-full !py-3 mt-4 !rounded-xl font-semibold"
              >Оформить заказ</Button
            >
          </div>
        </Drawer>
        <Button @click="visibleRight = true" text="">
          <div class=""><img src="/img/cart.svg" alt="" class="w-[18px]" /></div>
          <b class="text-slate-800 hover:text-slate-400">{{ totalPrice }} руб.</b></Button
        >
      </div>
      <a href="#" to="#" class="flex gap-1 items-center">
        <div class=""><img src="/img/heart.svg" alt="" class="w-[18px]" /></div>
        <div class="text-slate-800 hover:text-slate-400">Закладки</div>
      </a>
      <a href="#" to="#" class="flex gap-1 items-center">
        <div class=""><img src="/img/profile.svg" alt="" class="w-[18px]" /></div>
        <div class="text-slate-800 hover:text-slate-400">Профиль</div>
      </a>
    </div>
  </header>
</template>
