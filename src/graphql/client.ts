import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHCMS_ENDPOINT || ''

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
  },
})
