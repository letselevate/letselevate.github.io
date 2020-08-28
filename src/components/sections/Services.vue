<template>
  <section id="services" class="my-16 text-center">
    <!-- TODO: Transformar esse texto de sessão em componente -->
    <div class="w-1/3 mx-auto mb-12">
      <h2 class="font-medium text-3xl">Nossos serviços</h2>
      <hr class="w-16 mx-auto my-8 border-2 border-primary" />
      <p class="font-light text-base text-gray-600">
        Desenhamos o método de crescimento profissional ideal com o objetivo de alavancar a sua carreira
      </p>
    </div>
    <div class="flex justify-center mx-24">
      <!-- TODO: mover esses cards para um componente -->
      <div class="bg-white shadow-linear rounded-xlg w-3/4 mx-8 h-auto py-10 px-16">
        <figure>
          <img :src="growthArt" class="h-40 w-auto my-5 mx-auto" alt="Homem subindo escada para alcançar bandeira" />
        </figure>
        <h3 class="text-2xl font-medium my-3">Growth de Carreira</h3>
        <p class="font-light text-sm text-gray-600">
          Você irá se destacar no mercado de trabalho usando técnicas avançadas para desenvolvimento do seu perfil
          profissional, podendo ter até 10 vezes mais engajamento nos processos seletivos
        </p>
      </div>
      <div class="bg-white shadow-linear rounded-xlg w-3/4 mx-8 h-auto py-10 px-16">
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
  </section>
</template>

<script>
import growthArt from '@/assets/img/growth-art.svg'
import storytellingArt from '@/assets/img/storytelling-art.svg'
export default {
  data: function() {
    return {
      growthArt,
      storytellingArt
    }
  }
}
</script>
