<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="text-xl font-bold text-gray-900">&lt;Dev /&gt;</div>

        <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#about" class="hover:text-green-600">Sobre mí</a>
          <a href="#skills" class="hover:text-green-600">Habilidades</a>
          <a href="#projects" class="hover:text-green-600">Proyectos</a>
          <a href="#contact" class="hover:text-green-600">Contacto</a>
        </nav>

        <!-- Botón CV -->
        <div>
          <a
            href="/Developer_Ariel_Perez.pdf"
            download
            class="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            <span class="text-l font-bold text-gray-900"> Descargar CV </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

