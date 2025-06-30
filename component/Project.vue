<template>
  <section id="projects" class="container mx-auto py-16 px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Proyectos Personales
        </h2>
        <p class="text-xl text-gray-600">
          Algunos de los proyectos en los que he trabajado recientemente
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="aspect-video bg-gray-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-black">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-2">
              <a
                class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <a
                :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span class="text-black">Demo</span>
                </a>
              </a>
              <a
                class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg class="w-4 h-4" fill="black" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <span class="text-black">Código</span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">¿Interesado en ver más proyectos?</p>
        <a
          href="https://github.com/ArielEzequielPerez?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <svg class="w-4 h-4" fill="black" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span class="text-black">Ver más en GitHub</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa desarrollada con React.js. Incluye carrito de compras, sistema de pagos, gestión de productos y panel de administración.",
    technologies: ["React.js", "JavaScript", "CSS3", "API REST", "Vite"],
    image: "/e-commerce.png",
    demo: "",
    link: "https://github.com/ArielEzequielPerez/proyecto_final",
  },
  {
    title: "Implementación Strapi v5",
    description:
      "Migración y implementación de un CMS headless utilizando Strapi v5. Configuración de API, tipos de contenido personalizados y integración con frontend.",
    technologies: ["Strapi v5", "Node.js", "GraphQL", "MySQL"],
    image: "/strapiV5.png",
    demo: "",
    link: "https://github.com/ArielEzequielPerez/my_shopping_strapiV5",
  },
  {
    title: "GuitarLA",
    description:"Este proyecto es una simulación de un carrito de compras desarrollado con React y Vite.Permite seleccionar productos, actualizar el estado del carrito y mantener la información incluso después de recargar la página usando localStorage.",
    technologies: ["React.js", "JavaScript", "tailwind css", "CSS3", "Vite"],
    image: "/guitarLA.png",
    demo: "https://iridescent-seahorse-69c2bf.netlify.app/",
    link: "https://github.com/ArielEzequielPerez/GuitarLA",
  },
];
</script>
