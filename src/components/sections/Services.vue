<template>
  <section id="services" class="my-16 text-center">
    <SectionHeader
      header="Nossos serviços"
      subHeader="Desenhamos o método de crescimento profissional ideal com o objetivo de alavancar a sua carreira"
    />
    <div class="md:flex md:justify-center md:mx-24">
      <!-- TODO: mover esses cards para um componente -->
      <div class="bg-white shadow-linear rounded-xlg md:w-3/4 w-full md:mx-8 mb-10 h-auto md:py-10 md:px-16 py-5 px-8">
        <figure>
          <img :src="growthArt" class="h-40 w-auto my-5 mx-auto" alt="Homem subindo escada para alcançar bandeira" />
        </figure>
        <h3 class="text-2xl font-medium my-3">Growth de Carreira</h3>
        <p class="font-light text-sm text-gray-600">
          Você irá se destacar no mercado de trabalho usando técnicas avançadas para desenvolvimento do seu perfil
          profissional, podendo ter até 10 vezes mais engajamento nos processos seletivos
        </p>
      </div>
      <div class="bg-white shadow-linear rounded-xlg md:w-3/4 w-full md:mx-8 mb-10 h-auto md:py-10 md:px-16 py-5 px-8">
        <figure>
          <img
            :src="storytellingArt"
            class="h-40 w-auto my-5 mx-auto"
            alt="Curriculo com checkmark e mulher por trás"
          />
        </figure>
        <h3 class="text-2xl font-medium my-3">Storytelling de Currículo</h3>
        <p class="font-light text-sm text-gray-600">
          Você não precisa mais se preocupar em fazer currículos, o nosso time de especialistas irá revisar e criar
          currículos para você que irão aumentar suas chances de ser chamado para uma entrevista
        </p>
      </div>
    </div>
    <!-- <img :src="servicesBgArt" class="z-none" /> -->
  </section>
</template>

<script>
import growthArt from '@/assets/img/growth-art.svg'
import storytellingArt from '@/assets/img/storytelling-art.svg'
import servicesBgArt from '@/assets/img/services-bg-art.svg'
import SectionHeader from '@/components/theme/SectionHeader'

export default {
  data: function() {
    return {
      growthArt,
      storytellingArt,
      servicesBgArt
    }
  },
  components: {
    SectionHeader
  }
}
</script>
