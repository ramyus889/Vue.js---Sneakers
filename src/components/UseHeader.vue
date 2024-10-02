<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import InfoBlock from './InfoBlock.vue';
import UseCartListItem from './UseCartListItem.vue';

const emit = defineEmits(['createOrder']);

defineProps({
  totalPrice: Number,
  vatPrice: Number,
  cartbuttonDisabled: Boolean
});

const visibleRight = ref(false);
</script>
<template>
  <header class="flex justify-between items-center px-[40px] py-[20px] border-b border-slate-600">
    <RouterLink to="/" class="flex gap-2 items-center">
      <div class=""><img src="/img/logo.png" alt="" class="w-[40px] h-[40px]" /></div>
      <div class="sm:flex flex-col leading-[18px] hidden">
        <div class="uppercase font-[700] text-[20px]">vue sneakers</div>
        <div class="">Магазин лучших кроссовок</div>
      </div>
    </RouterLink>
    <div class="flex sm:gap-5 gap-2 items-center">
      <div class="flex justify-center">
        <Drawer
          v-model:visible="visibleRight"
          position="right"
          header="Корзина"
          class="!bg-white !text-black !w-[360px]"
        >
          <div v-if="!totalPrice" class="h-[80%] flex items-center">
            <InfoBlock
              title="Корзина пустая"
              description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              imageUrl="/img/package-icon.png"
            />
          </div>
          <div v-else class="">
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
              <Button
                :disabled="cartbuttonDisabled"
                @click="emit('createOrder')"
                class="w-full !py-3 mt-4 !rounded-xl font-semibold"
                >Оформить заказ</Button
              >
            </div>
          </div>
        </Drawer>
        <Button @click="visibleRight = true" text="">
          <div class=""><img src="/img/cart.svg" alt="" class="w-[18px]" /></div>
          <b class="text-slate-800 hover:text-slate-400 sm:text-base text-[14px]"
            >{{ totalPrice }} руб.</b
          ></Button
        >
      </div>
      <RouterLink to="/favorites" class="flex gap-1 items-center">
        <div class=""><img src="/img/heart.svg" alt="" class="w-[18px]" /></div>
        <div class="text-slate-800 hover:text-slate-400 sm:text-base text-[14px]">Закладки</div>
      </RouterLink>
    </div>
  </header>
</template>
