import { render, screen } from '@testing-library/react'

import { Link, LinkType, LinkProps } from '.'

describe('<User />', () => {
  it('should render the link correctly', () => {
    const props: LinkProps = {
      __typename: LinkType.Link,
      text: 'Website',
      url: 'https://example.com',
    }

    render(<Link {...props} />)

    expect(screen.getByText(/Website/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', props.url)
  })

  it('should render the video correctly', () => {
    const props: LinkProps = {
      __typename: LinkType.Video,
      url: 'https://example.com',
    }

    render(<Link {...props} />)

    expect(screen.queryByText(/Website/i)).not.toBeInTheDocument()
    expect(screen.getByTitle('video')).toHaveAttribute('src', props.url)
  })
})
