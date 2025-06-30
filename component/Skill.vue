<template>
    <section id="skills" class="py-16 px-4 bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
          <p class="text-xl text-gray-600">Tecnologías y herramientas que domino para crear soluciones robustas</p>
        </div>
  
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 class="text-black text-lg font-semibold text-center mb-4">{{ category.title }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                :class="category.color"
                class="px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
  
        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-4">
            Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades existentes
          </p>
          <div class="flex justify-center space-x-4">
            <span class="px-3 py-1 border border-gray-300 rounded-full text-sm text-black">Aprendizaje continuo</span>
            <span class="px-3 py-1 border border-gray-300 rounded-full text-sm text-black">Mejores prácticas</span>
            <span class="px-3 py-1 border border-gray-300 rounded-full text-sm text-black">Código limpio</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['Vue 3', 'Nuxt 3', 'React.js', 'TypeScript', 'JavaScript', 'jQuery'],
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Laravel', 'Node.js', 'GraphQL', 'Strapi v4', 'Strapi v5'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'Base de Datos',
      skills: ['MySQL', 'MariaDB'],
      color: 'bg-orange-100 text-orange-800'
    },
    {
      title: 'DevOps & Herramientas',
      skills: ['Docker', 'GitHub', 'GitLab'],
      color: 'bg-slate-100 text-slate-800'
    }
  ]
  </script>
  