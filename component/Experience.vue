<template>
  <section id="experience" class="py-16 px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Experiencia Laboral</h2>
        <p class="text-xl text-gray-600">Mi trayectoria profesional y proyectos destacados</p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
          
          <div class="space-y-12">
            <div
              v-for="(job, index) in experienceData"
              :key="index"
              class="relative flex items-start space-x-6"
            >
              <div class="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              
              <!-- Contenido -->
              <div class="flex-grow bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ job.position }}</h3>
                    <h4 class="text-lg text-purple-700 font-medium">{{ job.company }}</h4>
                  </div>
                  <div class="flex flex-col lg:items-end mt-2 lg:mt-0">
                    <span class="text-purple-600 font-medium">{{ job.period }}</span>
                    <span class="text-sm text-gray-500">{{ job.location }}</span>
                  </div>
                </div>
                
                <p class="text-gray-600 mb-4">{{ job.description }}</p>
                
                <!-- Responsabilidades -->
                <div class="mb-4">
                  <h5 class="font-medium text-gray-900 mb-2">Responsabilidades principales:</h5>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li v-for="(responsibility, rIndex) in job.responsibilities" :key="rIndex">
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>
                
                <!-- Tecnologías utilizadas -->
                <div class="mb-4">
                  <h5 class="font-medium text-gray-900 mb-2">Tecnologías utilizadas:</h5>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tech, tIndex) in job.technologies"
                      :key="tIndex"
                      class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <!-- Logros -->
                <div v-if="job.achievements" class="bg-gray-50 rounded-lg p-4">
                  <h5 class="font-medium text-gray-900 mb-2 flex items-center">
                    <svg class="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Logros destacados:
                  </h5>
                  <ul class="list-disc list-inside space-y-1 text-gray-600">
                    <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Estadísticas de experiencia -->
      <div class="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
        <h3 class="text-2xl font-semibold text-center mb-8 text-gray-900">Resumen de Experiencia</h3>
        <div class="grid md:grid-cols-4 gap-6 text-center">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-3xl font-bold text-emerald-600 mb-2">{{ totalYearsExperience }}+</div>
            <div class="text-gray-600">Años de Experiencia</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-3xl font-bold text-emerald-600 mb-2">{{ totalProjects }}+</div>
            <div class="text-gray-600">Proyectos Completados</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-3xl font-bold text-emerald-600 mb-2">{{ totalTechnologies }}+</div>
            <div class="text-gray-600">Tecnologías Dominadas</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <div class="text-3xl font-bold text-emerald-600 mb-2">{{ totalClients }}+</div>
            <div class="text-gray-600">Clientes Atendidos</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experienceData = [
  {
    position: 'Software Developer',
    company: 'Agencia de Acceso a la Información Pública',
    period: '2022 - Actualidad',
    location: 'Argentina',
    description: 'Desarrollo y mantenimiento de sistemas web para la gestión de información pública. Implementación de soluciones tecnológicas que facilitan el acceso ciudadano a la información gubernamental.',
    responsibilities: [
      'Desarrollo de aplicaciones web con Vue.js, Php',
      'Implementación de APIs REST con Laravel y Node.js',
      'Gestión y optimización de bases de datos Mariadb',
      'Integración con sistemas de gestión documental',
      'Mantenimiento y actualización de sistemas legacy',
      'Implementación de medidas de seguridad y protección de datos'
    ],
    technologies: ['Vue 3', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'TypeScript', "Jquery", "Graphql"],
    achievements: [
      'Modernización de sistemas legacy mejorando la eficiencia operativa',
      'Implementación de nuevas funcionalidades que optimizaron los procesos internos',
      'Desarrollo de interfaces intuitivas que mejoraron la experiencia del usuario'
    ]
  },
  {
    position: 'Ayudante de Cátedra - Paradigmas de Programación',
    company: 'Universidad',
    period: '2021 - 2023',
    location: 'Argentina',
    description: 'Apoyo académico en la enseñanza de diferentes paradigmas de programación. Asistencia a estudiantes en el aprendizaje de conceptos fundamentales y resolución de ejercicios prácticos.',
    responsibilities: [
      'Asistencia en clases teóricas y prácticas',
      'Corrección y evaluación de trabajos prácticos',
      'Tutoría personalizada a estudiantes con dificultades',
      'Preparación de material didáctico y ejercicios',
      'Apoyo en laboratorios de programación',
      'Organización de consultas y clases de repaso'
    ],
    technologies: ['Haskell', 'Prolog', 'Wollok'],
    achievements: [
      'Contribución al aprendizaje de más de 200 estudiantes',
      'Desarrollo de material didáctico que mejoró la comprensión de conceptos complejos',
      'Reconocimiento por parte de profesores y estudiantes por dedicación y claridad explicativa'
    ]
  },
  {
    position: 'Soporte Técnico',
    company: 'Servicio Técnico Independiente',
    period: '2019 - 2022',
    location: 'Argentina',
    description: 'Especialista en armado, reparación y mantenimiento de equipos de computación. Diagnóstico de fallas de hardware y software, instalación de sistemas operativos y configuración de equipos.',
    responsibilities: [
      'Diagnóstico y reparación de fallas de hardware',
      'Armado de equipos de computación personalizados',
      'Instalación y configuración de sistemas operativos',
      'Recuperación de datos y backup de información',
      'Mantenimiento preventivo y correctivo de equipos',
      'Asesoramiento técnico a clientes sobre compra de componentes'
    ],
    technologies: ['Windows', 'Linux', 'Hardware PC', 'Redes', 'Diagnóstico de Hardware'],
    achievements: [
      'Reparación exitosa de más de 500 equipos de computación',
      'Desarrollo de metodología propia de diagnóstico que redujo tiempos de reparación',
      'Alta satisfacción del cliente con índice de reincidencia menor al 5%'
    ]
  }
]

// Estadísticas calculadas
const totalYearsExperience = 5
const totalProjects = 20
const totalTechnologies = 12
const totalClients = 50
</script>
