import { render, screen, within } from '@testing-library/react'

import Creator, { PageProps } from 'pages/[slug]'
import { LinkType } from 'components/Link'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const isFallback = false

useRouter.mockImplementation(() => ({
  isFallback,
}))

jest.mock('components/User', () => ({
  __esModule: true,
  User: function Mock() {
    return <div data-testid="Mock User" />
  },
}))

describe('<Creator />', () => {
  const props: PageProps = {
    page: {
      creator: {
        name: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet',
      },
      blocks: [
        {
          __typename: LinkType.Link,
          text: 'Link',
          url: 'https://link.com',
        },
        {
          __typename: LinkType.Video,
          url: 'https://video.com',
        },
      ],
    },
  }

  it('should render correctly', () => {
    render(<Creator {...props} />)

    expect(screen.getByTestId('Mock User')).toBeInTheDocument()

    const list = screen.getByRole('list')
    expect(within(list).getAllByRole('listitem').length).toBe(2)
  })
})
