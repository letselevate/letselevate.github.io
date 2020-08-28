<template>
  <a v-if="isLink" :class="defaultClasses">
    <slot></slot>
  </a>
  <button v-else :class="defaultClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data: function() {
    return {
      defaultClasses:
        'rounded-full bg-primary text-white font-bold py-4 px-10 text-base w-full lg:w-auto hover:bg-blue-dark'
    }
  },
  props: {
    isLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>
