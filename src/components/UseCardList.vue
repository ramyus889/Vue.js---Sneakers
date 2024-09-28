<script setup>
import UseCard from './UseCard.vue';
</script>
<template>
  <div class="px-10 py-10">
    <div class="grid grid-cols-6 gap-10 mt-10">
      <UseCard
        imageUrl="/img/sneakers/sneakers-1.jpg"
        title="Мужские кроссовки Nike"
        :price="1433"
        :isFavorite="false"
        :isAdded="true"
      />
      <UseCard
        imageUrl="/img/sneakers/sneakers-2.jpg"
        title="Мужские кроссовки Nike"
        :price="4739"
        :isFavorite="true"
        :isAdded="false"
      />
      <UseCard
        imageUrl="/img/sneakers/sneakers-3.jpg"
        title="Мужские кроссовки Nike"
        :price="4568"
        :isFavorite="false"
        :isAdded="false"
      />
      <UseCard
        imageUrl="/img/sneakers/sneakers-4.jpg"
        title="Мужские кроссовки Puma"
        :price="4055"
        :isFavorite="true"
        :isAdded="false"
      />
    </div>
  </div>
</template>
