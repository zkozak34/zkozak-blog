<template>
  <div class="min-h-screen antialiased text-gray-700 py-6">
    <HeaderVue />
    <main class="mt-6 mb-20">
      <Nuxt />
    </main>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from '~/components/App/Header.vue'
import FooterVue from '~/components/App/Footer.vue'
export default {
  components: { HeaderVue, FooterVue },
}
</script>
