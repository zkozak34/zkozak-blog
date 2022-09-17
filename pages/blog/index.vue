<template>
  <div class="container space-y-4">
    <!-- <pre>{{ blogs[0] }}</pre> -->
    <article v-for="(blog, index) in blogs" :key="index">
      <h2 class="text-xl font-bold">
        <nuxt-link :to="blog.path">{{ blog.title }}</nuxt-link>
      </h2>
      <p>{{ blog.description }}</p>
      <div class="text-gray-500">
        {{ dateFormat(blog.date) }}
      </div>
    </article>
  </div>
</template>

<script>
import { formatDate } from '../../mixins'
export default {
  async asyncData({ $content }) {
    console.log(await $content('blog').fetch())
    const blogs = await $content('blog').fetch()
    return { blogs }
  },
  methods: {
    dateFormat(date) {
      return formatDate(date)
    },
  },
}
</script>
