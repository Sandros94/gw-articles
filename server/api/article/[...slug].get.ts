import { parseHTML } from 'linkedom'
// @ts-ignore
import TurndownService from 'turndown/lib/turndown.browser.es'

export default eventHandler(async (event) => {
  const _slug = getRouterParam(event, 'slug')

  let slug

  if (_slug === undefined || _slug === 'index') {
    slug = '/'
  }
  else {
    slug = _slug
  }

  console.log('Fetching article:', slug)

  const article = await $fetch<string>(slug, {
    baseURL: 'https://gunsweek.com',
    mode: 'no-cors',
    parseResponse: (html) => {
      const { document } = parseHTML(html)
      return document.getElementById('printArea')
    },
  })

  if (!article) {
    createError({ statusCode: 404, message: 'Article not found' })
  }

  const tdSrv = new TurndownService()
  return tdSrv.turndown(article)
})
