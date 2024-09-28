<script setup></script>
<template>
  <header class="flex justify-between items-center px-[40px] py-[20px] border-b border-slate-600">
    <RouterLink to="/" class="flex gap-2 items-center">
      <div class=""><img src="/img/logo.png" alt="" class="w-[40px] h-[40px]" /></div>
      <div class="flex flex-col">
        <div class="uppercase font-[700] text-[20px]">vue sneakers</div>
        <div class="">Магазин лучших кроссовок</div>
      </div>
    </RouterLink>
    <div class="flex gap-5 items-center">
      <RouterLink to="#" class="flex gap-1 items-center">
        <div class=""><img src="/img/cart.svg" alt="" class="w-[18px]" /></div>
        <b class="text-slate-800 hover:text-slate-400">1205 руб.</b>
      </RouterLink>
      <RouterLink to="#" class="flex gap-1 items-center">
        <div class=""><img src="/img/heart.svg" alt="" class="w-[18px]" /></div>
        <div class="text-slate-800 hover:text-slate-400">Закладки</div>
      </RouterLink>
      <RouterLink to="#" class="flex gap-1 items-center">
        <div class=""><img src="/img/profile.svg" alt="" class="w-[18px]" /></div>
        <div class="text-slate-800 hover:text-slate-400">Профиль</div>
      </RouterLink>
    </div>
  </header>
</template>
