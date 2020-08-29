<template>
  <section id="hero" class="mb-32">
    <div class="md:grid md:grid-cols-2 text-center md:text-left">
      <div class="md:mt-24">
        <h1 class="font-bold md:text-5.5xl text-3xl leading-tight my-5">
          Você no controle
          <br class="invisible md:visible" />da sua carreira!
        </h1>
        <!-- TODO: mover ilustração para componente -->
        <figure class="block md:hidden">
          <img class="float-right w-auto h-1/2" :src="heroArt" alt="Mulher sentada com notebook" />
        </figure>
        <p class="font-light text-sm md:text-lg text-gray-600 my-3 leading-tight">
          Empodere-se da sua jornada e seja destaque
          <br class="invisible md:visible" />nos processos seletivos com a elevatte
        </p>
        <div class="my-12">
          <Button :isLink="true" href="#book-mentorship">Agendar mentoria</Button>
        </div>
      </div>
      <figure class="hidden md:block">
        <img class="float-right w-auto h-1/2" :src="heroArt" alt="Mulher sentada com notebook" />
      </figure>
    </div>
  </section>
</template>

<script>
import heroArt from '@/assets/img/hero-art.svg'
import Button from '@/components/theme/Button'

export default {
  name: 'Hero',
  components: {
    Button
  },
  data: function() {
    return {
      heroArt
    }
  }
}
</script>

<style></style>
