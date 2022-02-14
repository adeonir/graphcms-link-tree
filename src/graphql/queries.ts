import { gql } from 'graphql-request'

export const PAGE_BY_SLUG = gql`
  query PageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      creator {
        name
        bio
        avatar {
          url
        }
      }
      blocks {
        __typename
        ... on Link {
          text
          url
        }
        ... on Video {
          url
        }
      }
    }
  }
`
