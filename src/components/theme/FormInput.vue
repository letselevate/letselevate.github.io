<template>
  <fieldset class="my-6">
    <input
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="border-2 border-primary bg-blue-soft p-4 rounded-lg placeholder-blue-500"
    />
  </fieldset>
</template>

<script>
export default {
  name: 'FormInput',
  props: []
}
</script>
