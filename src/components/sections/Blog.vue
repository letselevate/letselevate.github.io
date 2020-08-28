<template>
  <section id="blog" class="mt-16 mb-32 text-center">
    <SectionHeader header="Confira nossos artigos" class="text-center" />
    <div class="flex justify-center mx-24">
      <BlogPost v-for="post in posts" :post="post" :key="post.title" />
    </div>
    <div class="mt-20 mb-56">
      <Button :isLink="true" type="secondary" href="http://blog.elevatte.me/" target="_blank">Ver mais</Button>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/theme/SectionHeader'
import BlogPost from '@/components/BlogPost'
import growthArt from '@/assets/img/growth-art.svg'
import storytellingArt from '@/assets/img/storytelling-art.svg'
import Button from '@/components/theme/Button'

export default {
  data: function() {
    return {
      growthArt,
      storytellingArt,
      posts: [
        {
          title: 'Growth de Carreira',
          subject:
            'Um dos erros mais comuns que a maioria das pessoas cometem é valorizar a importância de alguém ou algo' +
            'apenas quando já não podemos ter ou quando de fato estamos precisando de ajuda',
          image: {
            src: 'https://res-5.cloudinary.com/hucbah0bl/image/upload/q_auto/v1/ghost-blog-images/Logo.png',
            alt: 'Mãos apoiadas no macbook com uma agenda ao lado'
          },
          url: 'http://blog.elevatte.me/growth-de-carreira/'
        }
      ]
    }
  },
  components: {
    SectionHeader,
    BlogPost,
    Button
  }
}
</script>
