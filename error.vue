<template>
  <Navbar/>
   <div class="container flex flex-col items-center justify-center w-full h-full">
     <h1 class="text-green-color text-center text-[200px] not-italic font-bold leading-[100%] font-Noto">404</h1>
     <p class="text-[#333] text-center text-[17px] mt-[20px] not-italic font-medium leading-[150%] capitalize font-Noto">The page you are looking for is not found </p>
     <NuxtLink to="/" class="text-green-color flex  justify-center items-center font-Noto  my-[40px] text-[19px] not-italic font-semibold leading-[140%] capitalize">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" class="text-green-color" height="16" viewBox="0 0 23 16" fill="none">
         <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM23 7L1 7V9L23 9V7Z" fill="#00AAA1"/>
       </svg>
       <span class="ml-2">Back to HomePage</span>
     </NuxtLink>
   </div>
  <Footer/>
</template>