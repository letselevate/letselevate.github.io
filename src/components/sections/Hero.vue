<template>
  <section>
    <div class="grid grid-cols-2">
      <article class="mt-24">
        <h1 class="font-bold text-5.5xl leading-tight my-5">
          Você no controle
          <br />da sua carreira!
        </h1>
        <h2 class="font-light text-lg text-gray-600 my-3 leading-tight">
          Empodere-se da sua jornada e seja destaque
          <br />nos processos seletivos com a elevatte
        </h2>
        <div class="my-20">
          <a href="#book-mentorship" class="rounded-full bg-main text-white py-4 px-10 text-base">Agendar mentoria</a>
        </div>
      </article>
      <figure>
        <img class="float-right w-3/4 h-auto" :src="heroIllustration" alt="Mulher sentada com notebook" />
      </figure>
    </div>
  </section>
</template>

<script>
import heroIllustration from '@/assets/img/hero-illustration.svg'
export default {
  name: 'Hero',
  data: function() {
    return {
      heroIllustration
    }
  }
}
</script>

<style></style>
