<template>
  <SHeader
    :links="links"
    :hide="{
      center: hideSearchbox,
    }"
    :socials="socials"
    :ui="{
      socials: {
        base: 'hover:decoration-primary',
        label: {
          base: 'hover:text-primary',
        },
        iconClass: 'hover:text-primary',
      },
    }"
    disable-socials
    sticky
    title="gw-articles"
  >
    <template #center>
      <div v-if="!hideSearchbox" class="hidden lg:flex">
        <GwUrl :label="false" />
      </div>
    </template>
  </SHeader>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Links, LinksGroup } from '#s94-ui/types'

const route = useRoute()
const hideSearchbox = computed(() => route.path === '/')
watch(() => route, () => {})
const links: Links = [
  {
    label: 'HOME',
    to: '/',
  }, {
    label: 'GUNSweek',
    target: '_blank',
    to: 'https://gunsweek.com',
  }, {
    icon: 'i-simple-icons-github',
    label: 'gw-articles',
    target: '_blank',
    to: 'https://github.com/sandros94/gw-articles',
  },
]

const socialsState = useState<Links | undefined>('socials', () => undefined)

const socials: Links = [
  {
    icon: 'i-simple-icons-github',
    target: '_blank',
    to: 'https://github.com/sandros94/gw-articles',
  }, {
    label: 'GUNSweek',
    target: '_blank',
    to: 'https://gunsweek.com',
  },
]

socialsState.value = socials

const otherLinksState = useState<LinksGroup[] | undefined>('linksGroup', () => undefined)

const otherLinks: LinksGroup[] = [
  {
    label: 'Navigation',
    links: [
      {
        label: 'Home',
        to: '/',
      },
      {
        label: 'Shop',
        target: '_blank',
        to: '/shop',
      },
      {
        label: 'About',
        to: '/about',
      },
      {
        label: 'Contact',
        to: '/contact',
      },
    ],
  },
  {
    label: 'Legal',
    links: [
      {
        label: 'Privacy Policy',
        to: '/privacy-policy',
      },
      {
        label: 'Terms of Use',
        to: '/terms-of-use',
      },
    ],
  },
]

otherLinksState.value = otherLinks
</script>
