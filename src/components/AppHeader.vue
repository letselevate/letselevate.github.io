<template>
  <header class="py-8">
    <div class="flex lg:justify-between justify-center">
      <a href="/">
        <img class="mr-2" id="header-logo" :src="logoImg" alt="Elevatte logo" />
      </a>
      <nav id="header-menu" class="hidden lg:flex">
        <ul class="text-md font-normal text-gray-600 list-none">
          <li class="inline mx-8">
            <a href="#header" class="font-bold text-black">Home</a>
          </li>
          <li class="inline mx-8">
            <a href="#solutions">Serviços</a>
          </li>
          <li class="inline mx-8">
            <a href="#book-mentorship">Agendar mentoria</a>
          </li>
          <li class="inline mx-8">
            <a href="#blog">Blog</a>
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
      logoImg
    }
  }
}
</script>

<style lang="scss">
#header-logo {
  width: 8rem;
  display: block;
  height: auto;
}
</style>
