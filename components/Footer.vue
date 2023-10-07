<template>
  <div class="bg-bg-main w-full">
    <footer class="container md:p-[100px] p-[50px] flex flex-wrap items-center  justify-center md:justify-between ">
       <div class="flex flex-col mb-[60px] md:mb-0">
         <h1 class="text-h1 not-italic font-Noto font-semibold leading-[140%]"> <strong class="text-green-500"> its</strong>Bilal</h1>
         <p class="text-[#555] text-[15px] font-Noto not-italic font-normal mt-[24px] leading-[150%] w-[275px]">Did you come here for something in particular or just general Riker-bashing</p>
       </div>
      <div class="flex space-x-[100px]">
        <div>
          <h2 class="text-[#222] text-[17px] not-italic font-semibold leading-[100%] capitalize font-Noto mb-[30px]">blogs</h2>
          <ul class="flex flex-col space-y-[18px] ">
            <li>
              <NuxtLink to="/lifestyle"  class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Lifestyle</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/technology" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Technology</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fashion" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Fashion</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Travel" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Travel</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-[#222] text-[17px] not-italic font-semibold leading-[100%] capitalize font-Noto mb-[30px]">Quick Links</h2>
          <ul class="flex flex-col space-y-[18px] ">
            <li>
              <NuxtLink to="/lifestyle"  class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Travel" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Article</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fashion" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">Contact us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/technology" class="text-[#555] text-[15px] not-italic font-normal leading-[100%] capitalize font-Noto">About</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  </div>
</template>
<script setup lang="ts">
</script>