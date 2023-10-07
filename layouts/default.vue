<template>
    <div class="w-full">
        <Navbar />
        <slot />
      <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>