<template>
  <section id="book-mentorship" class="md:my-40 my-20">
    <div class="md:flex md:justify-center md:mx-6 m-0">
      <BookMentorshipText class="md:hidden block" />
      <form @submit.prevent class="md:w-1/2 w-full md:mx-16 mt-5">
        <FormInput
          :placeholder="'Nome'"
          :value="form.name"
          @input="e => (form.name = e.target.value)"
          :error="errors.name"
        />
        <FormInput
          :placeholder="'Email'"
          :value="form.email"
          @input="e => (form.email = e.target.value)"
          :error="errors.email"
        />
        <FormInput
          :placeholder="'Telefone'"
          :value="form.phone"
          @input="e => (form.phone = e.target.value)"
          :error="errors.phone"
        />
        <fieldset class="my-6 text-center">
          <Button @click="createLead">Agendar mentoria</Button>
        </fieldset>
        <Alert
          v-if="showAlert && errors.onSubmit"
          title="Ops algo deu errado!"
          :message="`Você ainda pode entrar em contato conosco através do email ${contactEmail}.`"
          type="error"
        />
        <Alert
          v-if="showAlert && !errors.onSubmit"
          :title="'Muito obrigado!'"
          message="Verifique seu email para baixar o ebook e saber dos próximos passos."
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
import FormInput from '@/components/theme/FormInput'
import BookMentorshipText from '@/components/BookMentorshipText'
import leadsApi from '@/api/leads'
import socialConfig from '@/config/social'

export default {
  name: 'BookMentorship',
  components: { Button, FormInput, BookMentorshipText, Alert },
  data: function() {
    return {
      ...this.initialState(),
      contactEmail: socialConfig.email,
      showAlert: false
    }
  },
  methods: {
    initialState() {
      return {
        form: {
          name: '',
          email: '',
          phone: ''
        },
        errors: {
          name: false,
          email: false,
          phone: false,
          onSubmit: false
        }
      }
    },
    async createLead() {
      this.showAlert = false
      const { form, errors } = this

      errors.name = form.name ? false : 'Nome deve ser preenchido'
      errors.email = form.email ? false : 'Email deve ser preenchido'
      errors.phone = form.phone ? false : 'Telefone deve ser preenchido'

      if (!errors.name && !errors.email && !errors.phone) {
        try {
          await leadsApi.create({ name: form.name, email: form.email, phone: form.phone })
          this.showAlert = true
          Object.assign(this, this.initialState())
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
