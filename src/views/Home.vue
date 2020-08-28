<template>
  <AppHeader :class="virtualContainer" />
  <main :class="virtualContainer">
    <HeroSection />
    <ServicesSection />
    <BookMentorshipSection />
    <BlogSection />
  </main>
  <AppFooter :innerSpacingClass="virtualContainer" />
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import HeroSection from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/Services'
import BookMentorshipSection from '@/components/sections/BookMentorship'
import BlogSection from '@/components/sections/Blog'

export default {
  name: 'Home',
  data: function() {
    return {
      virtualContainer: 'w-2/3 mx-auto'
    }
  },
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    ServicesSection,
    BookMentorshipSection,
    BlogSection
  }
}
</script>
