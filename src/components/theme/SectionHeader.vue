<template>
  <div class="w-1/3 mx-auto mb-12">
    <h2 class="font-medium text-3xl">{{ header }}</h2>
    <hr class="w-16 mx-auto my-8 border-2 border-primary" />
    <p v-if="subHeader" class="font-light text-base text-gray-600">{{ subHeader }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    header: {
      type: String,
      required: true
    },
    subHeader: String
  }
}
</script>
