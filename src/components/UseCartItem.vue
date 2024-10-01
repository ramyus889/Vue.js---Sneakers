<script setup>
const emit = defineEmits(['onClickRemove']);

defineProps({
  id: Number,
  title: String,
  price: Number,
  imageUrl: String
});
</script>
<template>
  <div class="flex items-center gap-4 border border-slate-300 rounded-2xl p-4">
    <img :src="imageUrl" class="w-[70px]" alt="" />
    <div class="flex gap-4 justify-between">
      <div class="flex flex-col gap-1">
        <p class="leading-[18px]">{{ title }}</p>
        <div class="flex justify-between">
          <b class="text-slate-500">{{ price }} руб.</b>
          <img
            @click="emit('onClickRemove')"
            src="/img/close.svg"
            alt=""
            class="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  </div>
</template>
