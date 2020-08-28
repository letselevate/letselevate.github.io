<template>
  <footer class="h-56 w-full py-5 bg-primary flex items-center text-white">
    <div :class="`${innerSpacingClass} flex justify-between`">
      <figure class="w-1/3">
        <img :src="logoWhite" class="w-auto h-12" alt="Elevatte logo" />
        <p class="py-1 text-white text-xs font-light">
          Com o Growth de carreira da elevatte, você irá se destacar no mercado de trabalho usando técnicas avançadas
          para desenvolvimento do seu perfil profissional.
        </p>
        <p class="py-1 text-white text-xs font-light">Agende sua mentoria conosco.</p>
      </figure>
      <div class="my-auto text-right text-xs font-light">
        <div class="w-ful">
          <a :href="`mailto:${email}`">{{ email }}</a>
        </div>
        <ul class="flex float-right py-5">
          <li class="inline mx-2">
            <a :href="linkedin" target="_blank">
              <img :src="linkedinIcon" class="w-5 h-auto" alt="Linkedin elevatte" />
            </a>
          </li>
          <li class="inline mx-2">
            <a :href="github" target="_blank">
              <img :src="githubIcon" class="w-5 h-auto" alt="Github elevatte" />
            </a>
          </li>
          <li class="inline mx-2">
            <a :href="instagram" target="_blank">
              <img :src="instagramIcon" class="w-5 h-auto" alt="Instagram elevatte" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import logoWhite from '@/assets/img/logo-white.png'
import linkedinIcon from '@/assets/img/linkedin-icon.svg'
import instagramIcon from '@/assets/img/instagram-icon.svg'
import githubIcon from '@/assets/img/github-icon.svg'

import socialConfig from '@/config/social'

export default {
  name: 'AppFooter',
  props: ['innerSpacingClass'],
  data: function() {
    return { logoWhite, ...socialConfig, linkedinIcon, instagramIcon, githubIcon }
  }
}
</script>
