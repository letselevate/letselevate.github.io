<template>
  <div class="bg-white p-8">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <a href="/">
          <img class="mr-2" id="header-logo" :src="logoImg" alt="Elevatte logo" />
        </a>
        <!-- TODO: mover dropdown para componente isolado -->
        <div class="relative inline-block text-left">
          <button
            type="button"
            id="header-menu"
            aria-haspopup="true"
            aria-expanded="true"
            class="font-bold text-gray-700 focus:outline-none"
            @click="toggleHeaderMenu"
          >
            {{ currentUser.name }}
            <i :class="`lni lni-chevron-${arrowDirection} ml-3 text-xs text-blue-700`"></i>
          </button>
          <div class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg" :hidden="!isDropdownOpened">
            <div
              ref="headerMenuOptions"
              class="rounded-md bg-white shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="header-menu"
            >
              <div class="py-1">
                <router-link
                  to="/logout"
                  class="block px-4 py-2 text-sm leading-5 text-red-500 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-800"
                  role="menuitem"
                  >Sair</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logoImg from '@/assets/img/logo.png'

export default {
  name: 'AppHeader',
  data: function() {
    return {
      logoImg,
      isDropdownOpened: false,
      arrowDirection: 'down'
    }
  },
  methods: {
    toggleHeaderMenu: function() {
      this.arrowDirection = this.isDropdownOpened ? 'down' : 'up'
      this.isDropdownOpened = !this.isDropdownOpened
    }
  },
  computed: mapGetters(['currentUser'])
}
</script>

<style lang="scss">
#header-logo {
  width: auto;
  display: block;
  height: 25px;
}
html {
  background-color: $blue-bg;
}
</style>
