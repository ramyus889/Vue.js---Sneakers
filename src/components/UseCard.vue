<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean
});
</script>
<template>
  <div class="">
    <div class="">
      <div
        class="relative border border-slate-200 rounded-3xl max-w-[330px] p-8 cursor-pointer hover:-translate-y-2 transition duration-400 hover:shadow-xl"
      >
        <img
          :src="!isFavorite ? '/img/like-1.svg' : '/img/like-2.svg'"
          alt=""
          class="absolute top-8 left-8"
        />
        <img :src="imageUrl" alt="" class="" />
        <p>{{ title }}</p>

        <div class="flex justify-between items-center mt-5">
          <div class="flex flex-col">
            <span>Цена:</span>
            <span class="font-bold">{{ price }} ₽</span>
          </div>

          <img :src="!isAdded ? '/img/plus.svg' : '/img/checked.svg'" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
