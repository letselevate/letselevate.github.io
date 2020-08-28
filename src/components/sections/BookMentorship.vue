<template>
  <section id="book-mentorship" class="md:my-40 my-20">
    <div class="md:flex md:justify-center md:mx-6 m-0">
      <!-- FIX: Mover inputs para componente FormInput com 2way data binding -->
      <BookMentorshipText class="md:hidden block" />
      <form @submit.prevent class="md:w-1/2 w-full md:mx-16 mt-5">
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
        <Alert
          v-if="showAlert && errors.onSubmit"
          title="Ops algo deu errado!"
          :message="`Você ainda pode entrar em contato conosco através do email ${contactEmail}`"
          type="error"
        />
        <Alert
          v-if="showAlert && !errors.onSubmit"
          :title="`Muito obrigado ${name}!`"
          message="Verifique seu email para baixar o e-book e saber dos próximos passos"
          type="success"
        />
      </form>
      <BookMentorshipText class="hidden md:block" />
    </div>
  </section>
</template>

<script>
import Button from '@/components/theme/Button'
import Alert from '@/components/theme/Alert'
import FormInputError from '@/components/theme/FormInputError'
import BookMentorshipText from '@/components/BookMentorshipText'
import leadsApi from '@/api/leads'
import socialConfig from '@/config/social'

export default {
  name: 'BookMentorship',
  components: { Button, FormInputError, BookMentorshipText, Alert },
  data: function() {
    return { ...this.resetData(), contactEmail: socialConfig.email, showAlert: false }
  },
  methods: {
    resetData() {
      return {
        name: '',
        email: '',
        phone: '',
        errors: {}
      }
    },
    async createLead() {
      this.showAlert = false
      this.errors.name = this.name ? false : 'Nome deve ser preenchido'
      this.errors.email = this.email ? false : 'Email deve ser preenchido'
      this.errors.phone = this.phone ? false : 'Telefone deve ser preenchido'

      if (!this.errors.name && !this.errors.email && !this.errors.phone) {
        try {
          await leadsApi.create({ name: this.name, email: this.email, phone: this.phone })
          this.showAlert = true
          Object.assign(this, this.resetData())
        } catch (err) {
          this.errors.onSubmit = true
          this.showAlert = true
          console.error(err)
        }
      }
    }
  }
}
</script>
