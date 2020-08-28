<template>
  <AppHeader :class="virtualContainer" />
  <main :class="virtualContainer">
    <HeroSection />
    <ServicesSection />
    <BookMentorshipSection />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import HeroSection from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/Services'
import BookMentorshipSection from '@/components/sections/BookMentorship'

export default {
  name: 'Home',
  data: function() {
    return {
      virtualContainer: 'w-2/3 mx-auto'
    }
  },
  components: {
    AppHeader,
    HeroSection,
    ServicesSection,
    BookMentorshipSection
  }
}
</script>
