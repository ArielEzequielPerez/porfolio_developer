<template>
    <section id="education" class="py-16 px-4 bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Educación</h2>
          <p class="text-xl text-gray-600">Mi formación académica y certificaciones profesionales</p>
        </div>
  
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Línea vertical -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            
            <div class="space-y-8">
              <div
                v-for="(education, index) in educationData"
                :key="index"
                class="relative flex items-start space-x-6"
              >
                <!-- Punto en la línea -->
                <div class="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                
                <!-- Contenido -->
                <div class="flex-grow bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 class="text-xl font-semibold text-gray-900">{{ education.degree }}</h3>
                    <span class="text-emerald-600 font-medium text-sm md:text-base">{{ education.period }}</span>
                  </div>
                  <h4 class="text-lg text-emerald-700 font-medium mb-2">{{ education.institution }}</h4>
                  <p class="text-gray-600 mb-3">{{ education.description }}</p>
                  
                  <!-- Materias/Habilidades destacadas -->
                  <div v-if="education.highlights" class="flex flex-wrap gap-2">
                    <span
                      v-for="(highlight, hIndex) in education.highlights"
                      :key="hIndex"
                      class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {{ highlight }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Certificaciones adicionales -->
        <div class="mt-16">
          <h3 class="text-2xl font-semibold text-center mb-8 text-gray-900">Certificaciones y Cursos</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ cert.name }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ cert.issuer }}</p>
              <p class="text-xs text-emerald-600 font-medium">{{ cert.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const educationData = [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad',
      period: '2017 - Actualidad',
      description: 'Estudiante avanzado en la carrera de Ingeniería en Sistemas. Formación integral en desarrollo de software, bases de datos, algoritmos, arquitectura de sistemas y metodologías de desarrollo.',
      highlights: ['Algoritmos y Estructuras de Datos', 'Base de Datos', 'Ingeniería de Software', 'Redes', 'Paradigmas de Programación', 'Arquitectura de Software']
    }
  ]
  
  const certifications = [
    {
      name: 'Developer Frontend con React.js',
      issuer: 'Talento Tech',
      year: '2025'
    },
    {
      name: 'Next.js y Nest.js - Curso Completo',
      issuer: 'Udemy',
      year: '2024-2025'
    },
    {
      name: 'Vue.js - Desarrollo Avanzado',
      issuer: 'Autodidacta',
      year: '2023'
    },
    {
      name: 'Laravel - Framework PHP',
      issuer: 'Autodidacta',
      year: '2022'
    },
    {
      name: 'Docker - Containerización',
      issuer: 'Autodidacta',
      year: '2022'
    },
    {
      name: 'GraphQL - API Development',
      issuer: 'Autodidacta',
      year: '2021'
    }
  ]
  </script>
  