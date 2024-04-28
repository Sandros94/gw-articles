<template>
  <USkeleton v-if="pending" />
  <div v-else>
    <MDC v-if="article && !error" :value="article" class="max-w-4xl px-2 mt-12 mx-auto prose dark:prose-invert" />
    <UAlert
      v-else
      :actions="[{ variant: 'solid', color: 'primary', label: 'Homepage', to: '/' }]"
      icon="i-heroicons-exclamation-triangle-20-solid"
      color="red"
      class="max-w-md mx-auto"
      variant="outline"
      title="Article not found!"
      description="Doulbe check the URL or try again later."
    />
  </div>
</template>

<script setup lang="ts">
import { joinURL } from 'ufo'

const _slug = useRoute().params.slug || 'index'
const slug = Array.isArray(_slug) ? _slug : [_slug]

const { data: article, pending, error } = await useFetch(joinURL('/api/article', ...slug), {
  parseResponse: md => md,
})

if (error.value) {
  console.error(error.value)
}
</script>
