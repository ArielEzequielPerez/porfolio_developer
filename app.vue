<script setup lang="ts">
import { NuxtPage } from '#components';
import Footer from './component/Footer.vue';
import Header from './component/Header.vue';

</script>

<template>
  <div class="container-app">

    <Header />
    <main class="container mx-auto">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>