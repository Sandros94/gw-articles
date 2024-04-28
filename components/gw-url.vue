<template>
  <UForm :validate="validate" :state="state" class="space-y-4 mx-auto p-2 max-w-lg w-full" @submit="onSubmit">
    <UFormGroup :label="label ? 'GUNSweek URL' : ''" name="url" class="w-full">
      <UButtonGroup :size="label ? 'md' : 'sm'" orientation="horizontal" class="w-full">
        <UInput v-model="state.link" :placeholder="label ? '' : 'GUNSweek URL'" class="w-full" />
        <UButton icon="i-heroicons-magnifying-glass" color="primary" type="submit" />
      </UButtonGroup>
    </UFormGroup>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

withDefaults(defineProps<{
  label?: boolean
}>(), {
  label: true,
})

const state = reactive({
  link: undefined,
})

const validate = (state: { link?: string }): FormError[] => {
  const errors = []
  if (!state.link) errors.push({ path: 'url', message: 'Required' })
  if (state.link && !/^https?:\/\/gunsweek\.com/.test(state.link)) errors.push({ path: 'url', message: 'Invalid URL' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<{ link: string }>) {
  const path = event.data.link.replace(/^https?:\/\/gunsweek\.com/, '')
  await navigateTo(path)
}
</script>
