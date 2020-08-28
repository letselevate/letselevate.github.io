<template>
  <section id="book-mentorship" class="my-40">
    <div class="flex justify-center mx-6">
      <!-- FIX: Mover inputs para componente FormInput com 2way data binding -->
      <form @submit.prevent class="w-1/2 mx-16 mt-5">
        <fieldset class="my-6">
          <input
            type="text"
            placeholder="Nome"
            :class="[
              errors.name ? 'border-red-600' : 'border-primary',
              'border-2  bg-blue-light p-4 rounded-lg placeholder-blue-500 w-full'
            ]"
            v-model="name"
          />
          <FormInputError :error="errors.name" />
        </fieldset>
        <fieldset class="my-6">
          <input
            type="text"
            placeholder="Email"
            :class="[
              errors.email ? 'border-red-600' : 'border-primary',
              'border-2  bg-blue-light p-4 rounded-lg placeholder-blue-500 w-full'
            ]"
            v-model="email"
          />
          <FormInputError :error="errors.email" />
        </fieldset>
        <fieldset class="my-6">
          <input
            type="text"
            placeholder="Telefone"
            :class="[
              errors.phone ? 'border-red-600' : 'border-primary',
              'border-2  bg-blue-light p-4 rounded-lg placeholder-blue-500 w-full'
            ]"
            v-model="phone"
          />
          <FormInputError :error="errors.phone" />
        </fieldset>
        <fieldset class="my-6 text-center">
          <Button @click="createLead">Agendar mentoria</Button>
        </fieldset>
      </form>
      <div class="w-1/2 mx-10">
        <h3 class="font-bold text-4xl leading-tight my-5">
          Faça parte dos
          <span class="text-primary">2%</span> melhores
        </h3>
        <h3 class="font-semibold text-xl leading-tight mt-3 mb-6 text-gray-700">
          Agende uma mentoria agora e receba nosso
          <span class="text-primary">e-book</span> exclusivo!
        </h3>
        <p class="font-light text-base text-gray-600 my-3 leading-tight">
          Você já teve a sensação de ser invisível nos processos seletivos?
        </p>
        <p class="font-light text-base text-gray-600 my-3 leading-tight">
          Saiba que muitas pessoas passam por isso diariamente e até
          <b>98%</b> dos currículos são rejeitados na primeira etapa do processo.
        </p>
        <p class="font-light text-base text-gray-600 my-3 leading-tight">
          Através da mentoria qualificada da elevatte suas chances de conseguir o emprego dos sonhos aumentam em até
          60%.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/theme/Button'
import FormInputError from '@/components/theme/FormInputError'

export default {
  name: 'BookMentorship',
  components: { Button, FormInputError },
  data: function() {
    return {
      name: '',
      email: '',
      phone: '',
      errors: {}
    }
  },
  methods: {
    createLead: function() {
      this.errors.name = this.name ? false : 'Nome deve ser preenchido'
      this.errors.email = this.email ? false : 'Email deve ser preenchido'
      this.errors.phone = this.phone ? false : 'Telefone deve ser preenchido'

      if (!this.errors.name || !this.errors.email || !this.errors.phone) {
        console.log('create lead', this.name, this.email, this.phone)
      }
    }
  }
}
</script>
