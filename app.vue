<script setup lang="ts">
import Header from "@/component/Header.vue";
import Introduction from "@/component/Introduction.vue";
import About from "@/component/About.vue";
import Skill from "@/component/Skill.vue";
import Project from "@/component/Project.vue";
import Contact from "@/component/Contact.vue";
import Footer from "@/component/Footer.vue";
</script>

<template>
  <div class="container-app">
    <header>
      <Header />
    </header>
    <main class="container mx-auto">
      <Introduction />
      <About />
      <Skill />
      <Project/>
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
