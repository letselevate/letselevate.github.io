<template>
  <section id="book-mentorship" class="my-40">
    <div class="flex justify-center mx-12">
      <!-- FIX: Mover inputs para componente FormInput com 2way data binding -->
      <form @submit.prevent>
        <fieldset class="my-6">
          <input
            type="text"
            placeholder="Nome"
            required="true"
            class="border-2 border-primary bg-blue-soft p-4 rounded-lg placeholder-blue-500"
            v-model="name"
          />
        </fieldset>
        <fieldset class="my-6">
          <input
            type="email"
            placeholder="Email"
            required="true"
            class="border-2 border-primary bg-blue-soft p-4 rounded-lg placeholder-blue-500"
            v-model="email"
          />
        </fieldset>
        <fieldset class="my-6">
          <input
            type="tel"
            placeholder="Telefone"
            required="true"
            class="border-2 border-primary bg-blue-soft p-4 rounded-lg placeholder-blue-500"
            v-model="phone"
          />
        </fieldset>
        <ButtonPrimary type="submit" @click="createLead">Agendar mentoria</ButtonPrimary>
      </form>
      <div>
        <h3 class="font-bold text-4xl leading-tight my-5">
          Faça parte dos
          <span class="text-primary">2%</span> melhores
        </h3>
        <h3 class="font-semibold text-xl leading-tight my-3 text-gray-700">
          Agende uma mentoria agora e receba nosso
          <span class="text-primary">e-book</span> exclusivo!
        </h3>
        <p class="font-light text-lg text-gray-600 my-3 leading-tight">
          Você já teve a sensação de ser invisível nos processos seletivos?
        </p>
        <p class="font-light text-lg text-gray-600 my-3 leading-tight">
          Saiba que muitas pessoas passam por isso diariamente e até
          <b>98%</b> dos currículos são rejeitados na primeira etapa do processo.
        </p>
        <p class="font-light text-lg text-gray-600 my-3 leading-tight">
          Através da mentoria qualificada da elevatte suas chances de conseguir o emprego dos sonhos aumentam em até
          60%.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPrimary from '@/components/theme/ButtonPrimary'

export default {
  name: 'BookMentorship',
  components: { ButtonPrimary },
  data: function() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    createLead: function() {
      console.log(this.name, this.email, this.phone)
    }
  }
}
</script>
