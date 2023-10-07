<template>
  <div class="flex flex-col md:flex-row" >
    <div class="lg:w-[70%] md:w-[50%] w-[100%]">
      <h2 class="leading-[140%] lg:pl-[100px] not-italic font-semibold capitalize md:text-left text-center text-h3 my-[50px]">Featured This month</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div class=" w-[373px]  h-full mb-[40px]  bg-white rounded-[7px] flex flex-col" v-for="n in 6">
          <div class="mb:w-[373px] xs:w-[320px] w-[280px] mx-auto  px-4 md:px-0  mb:h-[271px] xs:h-[240px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-[7px]"></div>
          <div class="pl-[0px] mx-auto mb:w-[373px] xs:w-[320px] w-[280px]">
            <div class="inline-flex justify-center mt-[8px] items-center gap-2.5 bg-[#DFF1F0] px-2 py-1  rounded-[3px]">
              <p class="text-[#666] text-xs not-italic  font-normal leading-[100%] capitalize font-Noto">Lifestyle</p>
            </div>
            <h1 class="text-[#222] mt-2  md:text-h2 mb:text-h3 text-h4 not-italic font-Noto font-semibold leading-[140%] capitalize">set video playback speed
              with javascript
            </h1>
            <div class="mt-[23px]">
              <AuthorBlogDetail/>
            </div>
            <p class="text-[#555] mb:text-[15px] text-[13px] mt-[19px] not-italic font-normal leading-[150%] mb:w-[341px] w-full font-Noto">
              Did you come here for something in particular or just general Riker-bashing
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-[30%] md:w-[50%] w-[100%] flex flex-col ">
      <h2 class="leading-[140%] not-italic font-semibold capitalize text-h3 my-[50px] text-center lg:text-left">Popular Post</h2>
      <PopularPost/>
      <h2 class="leading-[140%] not-italic font-semibold capitalize text-h3 my-[50px] text-center lg:text-left">Top Authors</h2>
     <div v-for="n in 3" class="md:self-end lg:self-start self-center">
      <div class="flex mb-[40px]">
        <div class=" w-20 h-20 shrink-0 bg-[#D9D9D9] rounded-[57.5px]"></div>
        <div class="ml-[10px]">
          <h1 class="text-[#222] mt-[8px] font-Noto text-[17px] not-italic font-semibold leading-[100%] capitalize">
            Jenny Kia
          </h1>
          <p class="text-[#666] mb-[10px] text-xs not-italic font-light leading-[150%] capitalize">Fashion designer, Blogger, activist</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 20" fill="none">
            <rect width="20" height="20" rx="3" fill="#00AAA1"/>
            <path d="M75.3317 8.06441C75.3259 7.62847 75.2443 7.19687 75.0906 6.78891C74.9572 6.4448 74.7536 6.13229 74.4926 5.87134C74.2317 5.61039 73.9192 5.40674 73.575 5.2734C73.1723 5.12223 72.7469 5.04049 72.3168 5.03166C71.7631 5.00691 71.5876 5 70.182 5C68.7764 5 68.5962 5 68.0466 5.03166C67.6167 5.04055 67.1914 5.12229 66.7889 5.2734C66.4447 5.40664 66.1322 5.61026 65.8712 5.87122C65.6103 6.13219 65.4066 6.44475 65.2734 6.78891C65.1219 7.19132 65.0404 7.61667 65.0322 8.04657C65.0075 8.60085 65 8.77641 65 10.182C65 11.5876 65 11.7671 65.0322 12.3174C65.0409 12.7479 65.122 13.1727 65.2734 13.5762C65.4069 13.9203 65.6106 14.2327 65.8717 14.4935C66.1327 14.7544 66.4453 14.9579 66.7895 15.0911C67.1909 15.2484 67.6162 15.336 68.0471 15.3501C68.6014 15.3749 68.777 15.3824 70.1826 15.3824C71.5881 15.3824 71.7683 15.3824 72.318 15.3501C72.748 15.3417 73.1735 15.2601 73.5762 15.109C73.9202 14.9755 74.2327 14.7718 74.4936 14.5109C74.7545 14.2499 74.9582 13.9375 75.0917 13.5935C75.2431 13.1906 75.3242 12.7658 75.3329 12.3347C75.3576 11.781 75.3651 11.6054 75.3651 10.1992C75.364 8.79367 75.364 8.61524 75.3317 8.06441ZM70.1785 12.84C68.7085 12.84 67.5176 11.6491 67.5176 10.1791C67.5176 8.70906 68.7085 7.51818 70.1785 7.51818C70.8842 7.51818 71.5611 7.79853 72.0601 8.29755C72.5591 8.79657 72.8395 9.47338 72.8395 10.1791C72.8395 10.8848 72.5591 11.5616 72.0601 12.0607C71.5611 12.5597 70.8842 12.84 70.1785 12.84ZM72.9454 8.04023C72.8639 8.04031 72.7831 8.02431 72.7078 7.99316C72.6325 7.962 72.5641 7.9163 72.5064 7.85867C72.4488 7.80104 72.4031 7.73261 72.372 7.65729C72.3408 7.58198 72.3248 7.50126 72.3249 7.41975C72.3249 7.33831 72.3409 7.25766 72.3721 7.18242C72.4033 7.10717 72.4489 7.0388 72.5065 6.98121C72.5641 6.92362 72.6325 6.87794 72.7077 6.84677C72.783 6.8156 72.8636 6.79956 72.9451 6.79956C73.0265 6.79956 73.1072 6.8156 73.1824 6.84677C73.2577 6.87794 73.326 6.92362 73.3836 6.98121C73.4412 7.0388 73.4869 7.10717 73.5181 7.18242C73.5492 7.25766 73.5653 7.33831 73.5653 7.41975C73.5653 7.7628 73.2878 8.04023 72.9454 8.04023Z" fill="#999999"/>
            <path d="M70.1787 11.9072C71.1333 11.9072 71.9072 11.1333 71.9072 10.1787C71.9072 9.22406 71.1333 8.4502 70.1787 8.4502C69.2241 8.4502 68.4502 9.22406 68.4502 10.1787C68.4502 11.1333 69.2241 11.9072 70.1787 11.9072Z" fill="#999999"/>
            <path d="M46 7.0654C45.5952 7.24609 45.1603 7.36822 44.7038 7.42316C45.1698 7.14197 45.5276 6.6967 45.6961 6.16616C45.2531 6.43082 44.7684 6.61728 44.263 6.7175C43.8513 6.27595 43.2649 6 42.6157 6C41.3694 6 40.3589 7.01729 40.3589 8.272C40.3589 8.4501 40.3789 8.62348 40.4173 8.78982C38.5417 8.69503 36.8789 7.79052 35.7657 6.4159C35.5715 6.75146 35.4602 7.1418 35.4602 7.55813C35.4602 8.3464 35.8587 9.0418 36.4642 9.44927C36.1058 9.43797 35.7553 9.34052 35.442 9.16505C35.4418 9.17457 35.4418 9.18408 35.4418 9.19365C35.4418 10.2945 36.2198 11.2128 37.2521 11.4215C36.9198 11.5125 36.5712 11.5258 36.233 11.4605C36.5201 12.3631 37.3536 13.02 38.3411 13.0383C37.5688 13.6477 36.5956 14.011 35.5384 14.011C35.3562 14.011 35.1766 14.0002 35 13.9792C35.9987 14.6239 37.185 15 38.4594 15C42.6105 15 44.8804 11.5379 44.8804 8.53549C44.8804 8.43695 44.8783 8.33896 44.8739 8.24154C45.3157 7.91999 45.697 7.52171 46 7.0654Z" fill="#999999"/>
            <path d="M8.77617 15H10.8917V10.4375H12.6606L12.9278 8.6625H10.8917V7.525C10.8917 7.0125 11.0578 6.6625 11.9097 6.6625H13V5.06875C12.8123 5.05 12.1697 5 11.4188 5C9.84477 5 8.77617 5.83125 8.77617 7.35V8.6625H7V10.4375H8.77617V15Z" fill="white"/>
            <rect x="30.4" y="0.4" width="19.2" height="19.2" rx="2.6" stroke="#C4C4C4" stroke-width="0.8"/>
            <rect x="60.4" y="0.4" width="19.2" height="19.2" rx="2.6" stroke="#C4C4C4" stroke-width="0.8"/>
          </svg>
        </div>
      </div>
     </div>
      <h2 class="leading-[140%] not-italic font-semibold capitalize text-h3 my-[50px] text-center lg:text-left">Top Categories</h2>
      <div class="flex flex-col w-[80%] self-center md:self-end lg:self-start" v-for="n in 5">
         <div class="flex items-center justify-between">
           <h3 class="text-[#1C1C1C] mt-[10px]  text-[15px] font-Noto not-italic font-bold leading-[150%] capitalize">Travel</h3>
           <h3 class="text-[#1C1C1C] mt-[10px] text-[15px] font-Noto not-italic font-bold leading-[150%] capitalize">04</h3>
         </div>
        <div class="bg-[#D1E7E5] h-[1px] w-full mt-[11px]"></div>
      </div>
      <h2 class="leading-[140%] not-italic font-semibold capitalize text-h3 my-[50px] text-center lg:text-left">Search with Tags</h2>
      <div  class="flex justify-center items-center flex-wrap w-[70%] space-x-4 self-center md:self-end lg:self-start ">
        <div v-for="n in 5" >
          <div class="border w-[max-content] mb-4 border-[#666] px-2 py-2 flex items-center justify-center">
            <NuxtLink to="/" class="text-[#666] text-[15px] not-italic font-normal  capitalize font-Noto" >Tecnology</NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
</script>