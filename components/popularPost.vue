<template>
  <div class="flex flex-wrap gap-6">
    <div class="flex mb-[40px] mx-1" v-for="n in 4">
      <div class=" mb:w-[129px] mb:h-[115px] w-[100px] h-[100px] shrink-0 bg-[#D9D9D9] rounded-[7px]"></div>
      <div class="ml-[20px]">
        <div class="inline-flex justify-center items-center gap-2.5 bg-[#DFF1F0] px-2 py-1  rounded-[3px]">
          <p class="text-[#666] text-xs not-italic font-normal leading-[100%] capitalize font-Noto">Lifestyle</p>
        </div>
        <h1 class="text-[#222] mt-[8px] font-Noto mb:text-[17px] text-[13px] not-italic font-medium leading-[150%] capitalize w-[211px]">
          set video playback speed with javascript
        </h1>
        <div class="flex space-x-2 items-center mt-[10px]">
          <div class="w-[18px] h-[18px] shrink-0 rounded-[18px]">
            <img src="/Ellipse%20322.svg" class="w-full object-contain h-full" alt="profile">
          </div>
          <p class="text-[#777] text-xs not-italic font-normal leading-[100%] capitalize">
            Jesica koli
          </p>
          <div class="w-[0.5px] h-3 bg-[#999] mx-1"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#555555"/>
            <path d="M6.60015 3H5.40015V6.2484L7.37595 8.2242L8.22435 7.3758L6.60015 5.7516V3Z" fill="#555555"/>
          </svg>
          <p class="text-[#777] text-xs not-italic font-normal leading-[100%] capitalize">3 min. to read</p>
        </div>
      </div>
    </div>
  </div>
</template>