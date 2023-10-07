<template>
  <nav class="flex h-[70px] container mx-auto items-center justify-between flex-wrap bg-[ #E8F3F3] lg:px-[100px]">
    <div class="flex items-center justify-between w-full flex-shrink-0 text-white mr-6 px-[15px] md:px-[0px]">
      <ul class="hidden md:flex lg:space-x-[55px] md:space-x-[20px] ">
        <li>
          <NuxtLink to="/"  class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/articles" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Article</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Contact us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">About</NuxtLink>
        </li>
      </ul>
      <h1 class="text-h3 not-italic font-Noto font-semibold leading-[140%] text-gray-500"> <strong class="text-green-500"> its</strong>Bilal</h1>
      <!-- component -->
      <div class=" hidden md:block relative text-gray-600 ">
        <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm border focus:outline-none">
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
        </button>
      </div>
      <div class="md:hidden " @click="showMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" class=" text-black" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd"/></svg>
      </div>
    </div>
  </nav>
<!--  Mobile Navbar -->
  <div v-show="showMobile" class="w-full h-full flex justify-center items-center md:hidden fixed top-0 left-0 bg-bg-main">
     <div class="absolute right-[25px] top-[25px]" @click="showMenu">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM9.879 8.464L12 10.586l2.121-2.122a1 1 0 1 1 1.415 1.415l-2.122 2.12l2.122 2.122a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 0 1-1.415-1.415L10.586 12L8.465 9.879a1 1 0 0 1 1.414-1.415Z"/></g></svg>
     </div>
    <div>
      <ul class="flex flex-col space-y-[35px] ">
        <li>
          <NuxtLink to="/lifestyle"  class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Travel" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Article</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/fashion" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">Contact us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/technology" class="text-[#333] text-[15px] not-italic font-medium leading-[100%] capitalize font-Noto">About</NuxtLink>
        </li>
      </ul>

    </div>
  </div>
</template>
<script setup >
const showMobile = ref(false)
const showMenu = () => {
  showMobile.value = !showMobile.value
}
</script>