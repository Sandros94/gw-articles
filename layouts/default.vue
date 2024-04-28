<template>
  <div>
    <SMain class="max-w-screen-2xl">
      <slot />
    </SMain>
    <SFooter
      :divider-avatar="{ src: 'https://avatars.githubusercontent.com/u/13056429?v=4', size: 'lg' }"
      :hide="{
        center: true,
      }"
    >
      <template #legal>
        <div class="pt-2">
          © 1994-{{ new Date().getFullYear() }}, Grown up by
          <NuxtLink class="underline underline-offset-2 hover:text-primary" target="_blank" to="https://github.com/sandros94">
            <span>Sandros94 (me)</span>
          </NuxtLink>
          & parents
        </div>
      </template>
    </SFooter>
  </div>
</template>
