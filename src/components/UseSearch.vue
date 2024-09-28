<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
</script>
<template>
  <div class="flex justify-between px-10 pt-10">
    <div class="font-bold text-3xl">Все кроссовки</div>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText placeholder="Search" type="text" class="!bg-white !text-black" />
    </IconField>
  </div>
</template>
