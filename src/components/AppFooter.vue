<template>
  <footer class="h-48 w-full py-5 bg-primary flex items-center text-white">
    <div :class="`${innerSpacingClass} flex justify-between`">
      <figure>
        <h1>hello</h1>
        <p>asoidjoasjdoasjdiasjoid</p>
      </figure>
      <div>
        <p>
          <a href="mailto:contato@elevatte.me">contato@elevatte.me</a>
        </p>
        <ul>
          <li>linkedin</li>
          <li>instagram</li>
          <li>facebook</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: ['innerSpacingClass']
}
</script>
