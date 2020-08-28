<template>
  <a v-if="isLink" :class="buttonClass">
    <slot></slot>
  </a>
  <button v-else :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data: function() {
    const defaultClasses = 'rounded-full font-bold py-4 px-12 text-base w-full lg:w-auto'
    const { type } = this.$props
    return {
      buttonClass: {
        [`${defaultClasses} bg-primary text-white hover:bg-blue-dark`]: type === 'primary',
        [`${defaultClasses} border-2 border-primary text-primary hover:text-blue-dark`]: type === 'secondary'
      }
    }
  },
  props: {
    isLink: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
