<template>
  <div v-if="title && message" :class="[alertClass, 'border-l-4 p-4']" role="alert">
    <p class="font-bold">{{ title }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data: function() {
    return {
      alertClass: {
        'bg-orange-100 border-orange-500 text-orange-700': this.$props.type === 'error',
        'bg-green-100 border-green-500 text-green-700': this.$props.type === 'success'
      }
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>
