<template>
  <section id="contact" class="py-16 px-4 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-black text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
        <p class="text-black text-xl text-gray-600">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 class="text-black text-2xl font-semibold mb-6">Información de contacto</h3>
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-black font-medium">Email</p>
                <p class="text-gray-600">arielezequielperez@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-black font-medium">Teléfono</p>
                <p class="text-gray-600">+54 9 11 2255-5457</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-black font-medium">Ubicación</p>
                <p class="text-gray-600">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-black text-xl font-semibold mb-6">Envíame un mensaje</h3>
          <FormKit type="form" @submit="handleSubmit" :actions="false" #default="{ state: { valid } }">
            <FormKit type="text" name="name" label="Nombre completo" placeholder="Tu nombre" validation="required"
              :classes="{
                outer: 'mb-4',
                label: 'block text-sm font-medium text-gray-700 mb-1',
                input: 'w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                message: 'text-sm text-red-500 mt-1'
              }" />
            <FormKit type="email" name="email" label="Email" placeholder="tu@email.com" validation="required|email"
              :classes="{
                outer: 'mb-4',
                label: 'block text-sm font-medium text-gray-700 mb-1',
                input: 'w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                message: 'text-sm text-red-500 mt-1'
              }" />
            <FormKit type="text" name="subject" label="Asunto" placeholder="Asunto del mensaje" validation="required"
              :classes="{
                outer: 'mb-4',
                label: 'block text-sm font-medium text-gray-700 mb-1',
                input: 'w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                message: 'text-sm text-red-500 mt-1'
              }" />
            <FormKit type="textarea" name="message" label="Mensaje" placeholder="Escribe tu mensaje aquí..."
              validation="required" :classes="{
                outer: 'mb-6',
                label: 'block text-sm font-medium text-gray-700 mb-1',
                input: 'w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-32 resize-none',
                message: 'text-sm text-red-500 mt-1'
              }" />
            <button type="submit" :disabled="!valid || isSubmitting" :class="[
              'w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors',
              valid && !isSubmitting
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            ]">
              
              <span>{{ isSubmitting ? 'Enviando...' : 'Enviar' }}</span>
            </button>
          </FormKit>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const formData = reactive({
  name: "",
  email: "",
  issue: "",
  message: ""
})
const handleSubmit = async (formData: any, context:any) => {
  isSubmitting.value = true

  try {
    const res = await fetch('https://formspree.io/f/xpwlkavl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      alert('✅ ¡Mensaje enviado con éxito!')
    } else {
      alert('❌ Error al enviar el mensaje. Intenta de nuevo.')
    }
  } catch (err) {
    alert('❌ Error de conexión. Intenta de nuevo.')
  } finally {
    isSubmitting.value = false
  }
}
</script>