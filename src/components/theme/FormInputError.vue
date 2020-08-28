<template>
  <span v-if="error" class="text-sm my-3 ml-4 text-red-600">{{ error }}</span>
</template>

<script>
export default {
  name: 'FormInputError',
  props: ['error']
}
</script>

<style></style>
