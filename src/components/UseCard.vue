<script setup>
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
});

const visibleModal = ref(false);
const visibleFavoriteButton = Boolean(props.onClickAdd);
</script>
<template>
  <div class="">
    <div class="">
      <Dialog
        v-model:visible="visibleModal"
        modal
        class="!bg-white !text-black mx-5"
        :header="title"
        :style="{ width: '50rem' }"
      >
        <div class="relative cursor-pointer pb-4">
          <img
            v-if="visibleFavoriteButton"
            :src="!isFavorite ? '/img/like-1.svg' : '/img/like-2.svg'"
            alt=""
            class="absolute top-8 left-8"
            @click="onClickFavorite"
          />
          <div class="flex place-content-center">
            <img :src="imageUrl" alt="" class="sm:w-[400px] w-[270px]" />
          </div>

          <p class="sm:text-start text-center px-5 mb-4">{{ title }}</p>
          <div class="px-5 mb-4 text-gray-400 font-medium line-clamp-3">
            lucky beside quarter die radio fall lot straw own bound somehow balance write excited
            local material aware stock dropped simplest account barn truth industry
          </div>
          <div class="flex items-center justify-between px-5">
            <div class="flex flex-col">
              <span>Цена:</span>
              <span class="font-bold">{{ price }} ₽</span>
            </div>
            <img
              v-if="visibleFavoriteButton"
              @click="onClickAdd"
              :src="!isAdded ? '/img/plus.svg' : '/img/checked.svg'"
              alt=""
            />
          </div>
        </div>
      </Dialog>
      <button @click="visibleModal = true" class="hover:bg-transparent !text-black">
        <div
          class="relative border border-slate-200 w-full rounded-3xl md:max-w-[330px] p-8 cursor-pointer hover:-translate-y-2 transition duration-400 hover:shadow-xl"
        >
          <img
            v-if="visibleFavoriteButton"
            :src="!isFavorite ? '/img/like-1.svg' : '/img/like-2.svg'"
            alt=""
            class="absolute top-8 left-8"
            @click="onClickFavorite"
          />
          <div class="flex place-content-end">
            <img :src="imageUrl" alt="" class="" />
          </div>
          <p class="sm:text-start text-center">{{ title }}</p>

          <div class="flex justify-between items-center mt-5">
            <div class="flex flex-col">
              <span>Цена:</span>
              <span class="font-bold">{{ price }} ₽</span>
            </div>

            <div class="flex gap-2">
              <img
                v-if="visibleFavoriteButton"
                @click="onClickAdd"
                :src="!isAdded ? '/img/plus.svg' : '/img/checked.svg'"
                alt=""
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
