<template>
  <div class="w-3/4 mx-auto">
    <AppHeader />
    <HeroSection />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/sections/Hero.vue'
export default {
  name: 'Home',
  components: {
    AppHeader,
    HeroSection
  }
}
</script>
