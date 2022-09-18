<template>
  <div class="container">
    <div v-if="post.length == 0">loading...</div>
    <article v-else>
      <h1 class="text-4xl font-bold">{{ post.title }}</h1>
      <p class="my-2">{{ post.description }}</p>
      <p class="text-right text-gray-400 font-medium text-xs">
        {{ post.author }} • {{ dateFormat(post.date) }}
      </p>
      <hr class="my-4" />
      <nuxt-content :document="post" class="prose" />
    </article>
  </div>
</template>

<script>
import { formatDate } from '../../mixins'

export default {
  data() {
    return {
      post: {},
    }
  },
  async fetch() {
    this.post = await this.$content('blog', this.$route.params.slug).fetch()
  },
  methods: {
    dateFormat(date) {
      return formatDate(date)
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'c/profile.jpg',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'i-am',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/profile.jpg',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'i-am',
        },
      ],
    }
  },
}
</script>
