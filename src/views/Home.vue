<template>
  <AppHeader :class="defaultContainer" />
  <main>
    <HeroSection :class="`${defaultContainer} ${defaultSectionSpacing}`" />
    <ServicesSection :class="`${defaultContainer} ${defaultSectionSpacing}`" />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/sections/Hero.vue'
import ServicesSection from '@/components/sections/Services.vue'

export default {
  name: 'Home',
  data: function() {
    return {
      defaultContainer: 'w-2/3 mx-auto',
      defaultSectionSpacing: 'mb-32'
    }
  },
  components: {
    AppHeader,
    HeroSection,
    ServicesSection
  }
}
</script>
