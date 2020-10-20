<template>
  <section id="blog" class="mt-16 md:mb-56 mb-16 text-center">
    <SectionHeader header="Confira nossos artigos" class="text-center" />
    <div class="md:flex md:justify-center md:mx-6">
      <BlogPost v-for="post in posts" :post="post" :key="post.title" />
    </div>
    <div class="mt-20">
      <Button :isLink="true" type="secondary" :href="blogUrl" target="_blank">Ver mais</Button>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/theme/SectionHeader'
import BlogPost from '@/components/BlogPost'
import growthArt from '@/assets/img/growth-art.svg'
import storytellingArt from '@/assets/img/storytelling-art.svg'
import Button from '@/components/theme/Button'
import blogConfig from '@/config/blog.js'

export default {
  data: function() {
    return {
      growthArt,
      storytellingArt,
      blogUrl: blogConfig.url,
      posts: [
        {
          title: 'A mente da pessoa que recruta',
          subject:
            'O Growth de carreira tem como objetivo empoderar as pessoas de suas carreiras.' +
            'Ele foi desenvolvido pensando em como podemos ajudá-las a conquistar o seu emprego dos sonhos',
          image: {
            src: 'https://miro.medium.com/max/2160/1*tRvQJJZTY_dDu4Se3v9VYg.jpeg',
            alt: 'Macbook sobre uma mesa de madeira com um copo de água e Iphone'
          },
          url: 'https://medium.com/elevatte/a-mente-da-pessoa-que-recruta-4fcacfbdcd04'
        },
        {
          title: 'Growth de Carreira',
          subject:
            'Um dos erros mais comuns que a maioria das pessoas cometem é valorizar a importância de alguém ou algo apenas quando já não podemos ter ou quando de fato estamos precisando de ajuda.',
          image: {
            src: 'https://miro.medium.com/max/2160/1*mhW-IR7S3z9xkTWPHbY0cg.jpeg',
            alt: 'iMac sobre mesa do frase "Do More" na tela'
          },
          url: 'https://medium.com/elevatte/growth-de-carreira-b338b36c14e'
        },
        {
          title: '10 Dicas para montar um currículo atraente',
          subject:
            'Um bom currículo é um dos primeiros passos para encontrar um emprego, mas será que você alguma vez já se perguntou: “Meu currículo está bem feito?”',
          image: {
            src: 'https://miro.medium.com/max/2160/1*nvK_JaRMB9a_sBsSqHI0Gw.jpeg',
            alt: 'Quadro escrito "Youve got this" ao lado de um notebok em um tapete cor de rosa'
          },
          url: 'https://medium.com/elevatte/10-dicas-para-criar-um-curr%C3%ADculo-atraente-7d1af3d980d8'
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
