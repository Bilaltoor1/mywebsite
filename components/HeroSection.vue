<template>
  <div class="flex xl:flex-row flex-col ">
    <div class="xl:w-[70%] w-[100%]">
      <h2 class="leading-[140%] lg:pl-[100px] not-italic font-semibold capitalize mb:text-h3 text-h4 text-center mb:text-left my-[50px]">Featured This month</h2>
      <div class="flex flex-col " v-for="n in 2">
        <BlogCard />
      </div>
    </div>
    <div class="xl:w-[30%] w-[100%]">
      <h2 class="leading-[140%] not-italic font-semibold capitalize text-center mb:text-left mb:text-h3 text-h4 my-[50px]">Popular Posts</h2>
         <PopularPost/>
    </div>
  </div>
</template>
<script setup lang="ts">
import PopularPost from "~/components/popularPost.vue";
</script>