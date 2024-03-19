import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

import enhance from '@enhance/ssr'
import header from './elements/header.mjs'
import footer from './elements/footer.mjs'
import layout from './elements/layout.mjs'

const html = enhance({
  elements: {
    'my-header': header,
    'my-footer': footer,
    'my-layout': layout
  }
})

const body = html`<my-layout>hi from hono and enhance</my-layout>`

const app = new Hono()

app.get('/', (c) => c.html(body))

export const handler = handle(app)
