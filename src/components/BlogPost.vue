<template>
  <article class="max-w-sm rounded-xlg overflow-hidden shadow-linear text-left">
    <a :href="post.url" target="_blank">
      <img class="w-full" :src="post.image.src" :alt="post.image.alt" />
    </a>
    <div class="p-8">
      <div class="font-bold text-xl">{{ post.title }}</div>
      <p class="text-gray-500 text-sm py-6">{{ post.subject }}</p>
      <a :href="post.url" target="_blank" class="text-base font-medium text-primary hover:text-blue-dark"
        >Continuar lendo</a
      >
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
