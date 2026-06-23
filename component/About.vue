<script setup lang="ts">
const features = [
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Desarrollo Full Stack",
    description: "Experiencia en desarrollo frontend y backend con tecnologías modernas",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Innovación",
    description: "Siempre explorando nuevas tecnologías y mejores prácticas de desarrollo",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Colaboración",
    description: "Trabajo efectivo en equipo y comunicación clara con stakeholders",
  },
];
</script>

<template>
  <section id="about" class="container mx-auto py-16 px-4 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Sobre mí</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Soy un desarrollador de software apasionado por crear aplicaciones web modernas y eficientes.
          Con experiencia en Vue.js, Nuxt 3, React, Laravel y más, me especializo en desarrollar
          soluciones completas que combinan funcionalidad, rendimiento y una excelente experiencia de usuario.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4 place-items-stretch">
        <div v-for="feature in features" :key="feature.title"
          class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
            </svg>
          </div>
          <h3 class="text-black text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>