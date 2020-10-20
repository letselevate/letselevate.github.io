<template>
  <fieldset class="my-6">
    <input
      type="text"
      :placeholder="placeholder"
      :class="[
        error ? 'border-red-600' : 'border-primary',
        'border-2 bg-blue-light p-4 rounded-lg placeholder-blue-500 w-full'
      ]"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <FormInputError :error="error" />
  </fieldset>
</template>

<script>
import FormInputError from '@/components/theme/FormInputError'

export default {
  name: 'FormInput',
  components: { FormInputError },
  props: {
    error: String,
    placeholder: String
  }
}
</script>
