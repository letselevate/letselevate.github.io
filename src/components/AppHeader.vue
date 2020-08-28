<template>
  <header id="home" class="py-8">
    <div class="flex lg:justify-between justify-center">
      <a href="/">
        <img class="mr-2 w-32 h-auto block" :src="logoImg" alt="Elevatte logo" />
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
            <a href="#blog" :class="[selectedItem === '#blog' ? highlightedClass : '', itemClass]">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImg from '@/assets/img/logo.png'

export default {
  name: 'AppHeader',
  data: function() {
    return {
      logoImg,
      selectedItem: '#home',
      itemClass: 'text-xs uppercase',
      highlightedClass: 'font-bold text-black'
    }
  },
  watch: {
    $route: function(route) {
      this.selectedItem = route.hash
    }
  }
}
</script>
