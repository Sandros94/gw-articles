<template>
  <USkeleton v-if="pending" />
  <div v-else>
    <div v-if="article && !error" class="max-w-4xl px-2 mt-12 mx-auto prose dark:prose-invert">
      <p>
        Original article:
        <ULink :to="joinURL('https://gunsweek.com', ...slug)" target="_blank" class="underline" rel="noopener noreferrer">
          {{ joinURL('https://gunsweek.com', ...slug) }}
        </ULink>
      </p>
      <MDC :value="article" />
    </div>
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
