<template>
  <header id="home" class="md:py-8 py-3">
    <div class="flex lg:justify-between justify-center">
      <a href="/">
        <img class="w-32 h-auto md:block hidden" :src="logoImg" alt="Elevatte logo" />
        <img class="w-20 h-auto md:hidden block" :src="logoIconWiImg" alt="Elevatte logo" />
      </a>
      <nav id="header-menu" class="hidden lg:flex">
        <ul class="text-md font-normal text-gray-600 list-none">
          <li class="inline mx-8">
            <a href="#home" :class="[selectedItem === '#home' ? highlightedClass : '', itemClass]">Home</a>
          </li>
          <li class="inline mx-8">
            <a href="#services" :class="[selectedItem === '#services' ? highlightedClass : '', itemClass]">Serviços</a>
          </li>
          <li class="inline mx-8">
            <a href="#book-mentorship" :class="[selectedItem === '#book-mentorship' ? highlightedClass : '', itemClass]"
              >Agendar mentoria</a
            >
          </li>
          <li class="inline mx-8">
            <a :href="blogUrl" target="_blank" :class="[itemClass, 'font-semibold text-blue-600']">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImg from '@/assets/img/logo.png'
import logoIconWiImg from '@/assets/img/logo-wi.png'
import blogConfig from '@/config/blog.js'

export default {
  name: 'AppHeader',
  data: function() {
    return {
      logoImg,
      logoIconWiImg,
      selectedItem: '#home',
      itemClass: 'text-xs uppercase',
      highlightedClass: 'font-bold text-black',
      blogUrl: blogConfig.url
    }
  },
  watch: {
    $route: function(route) {
      this.selectedItem = route.hash
    }
  }
}
</script>
