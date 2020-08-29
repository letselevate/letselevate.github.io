<template>
  <section id="blog" class="mt-16 md:mb-56 mb-16 text-center">
    <SectionHeader header="Confira nossos artigos" class="text-center" />
    <div class="md:flex md:justify-center md:mx-24">
      <BlogPost v-for="post in posts" :post="post" :key="post.title" />
    </div>
    <div class="mt-20">
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
        },
        {
          title: '10 dicas para montar um currículo atreaente',
          subject:
            'Um bom currículo é um dos primeiros passos para encontrar um emprego, mas será que você alguma vez já se perguntou: “Meu currículo está bem feito?”',
          image: {
            src:
              'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib&#x3D;rb-1.2.1&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;2000&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ',
            alt: 'Um quadro com texto "Youve got this", junto de um headset e um notebook'
          },
          url: 'http://blog.elevatte.me/10-dicas-para-montar-um-curriculo-atraente/'
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
