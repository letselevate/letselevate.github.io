<template>
  <section>
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div class="mt-12 md:mt-24">
        <h1 class="font-bold text-5.5xl leading-tight my-5">
          Você no controle
          <br class="invisible md:visible" />da sua carreira!
        </h1>
        <p class="font-light text-lg text-gray-600 my-3 leading-tight">
          Empodere-se da sua jornada e seja destaque
          <br class="invisible md:visible" />nos processos seletivos com a elevatte
        </p>
        <div class="my-20">
          <a href="#book-mentorship" class="rounded-full bg-primary text-white py-4 px-10 text-base w-full lg:w-auto"
            >Agendar mentoria</a
          >
        </div>
      </div>
      <figure class="invisible md:visible">
        <img class="float-right w-4/5 h-auto" :src="heroArt" alt="Mulher sentada com notebook" />
      </figure>
    </div>
  </section>
</template>

<script>
import heroArt from '@/assets/img/hero-art.svg'
export default {
  name: 'Hero',
  data: function() {
    return {
      heroArt
    }
  }
}
</script>

<style></style>
