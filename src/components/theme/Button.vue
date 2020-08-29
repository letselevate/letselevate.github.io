<template>
  <a v-if="isLink" :class="[buttonClass, 'rounded-full font-bold py-4 px-12 text-base w-full lg:w-auto']">
    <slot></slot>
  </a>
  <button v-else :class="[buttonClass, 'rounded-full font-bold py-4 px-12 text-base w-full lg:w-auto']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data: function() {
    return {
      buttonClass: {
        'bg-primary text-white hover:bg-blue-dark': this.$props.type === 'primary',
        'border-2 border-primary text-primary hover:bg-blue-dark hover:text-white': this.$props.type === 'secondary'
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
