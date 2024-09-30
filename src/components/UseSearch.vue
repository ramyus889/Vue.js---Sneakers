<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
</script>
<template>
  <div class="flex justify-between px-10 pt-10">
    <div class="font-bold text-3xl">Все кроссовки</div>
    <div class="flex">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          placeholder="Search"
          type="text"
          class="!bg-white !text-black !rounded-r-none !rounded-l-2xl"
        />
      </IconField>
      <select class="bg-white text-black cursor-pointer border border-slate-700 rounded-r-2xl px-4">
        <option value="">По названию</option>
        <option value="">По цене (дешевые)</option>
        <option value="">По цене (дорогие)</option>
      </select>
    </div>
  </div>
</template>
