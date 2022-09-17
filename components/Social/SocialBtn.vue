<template>
  <a :href="href" class="social-icon" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props: ['href'],
}
</script>
