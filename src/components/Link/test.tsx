import { render, screen } from '@testing-library/react'

import { Link, LinkType } from '.'

describe('<User />', () => {
  it('should render the link correctly', async () => {
    const props = {
      __typename: LinkType.Link,
      text: 'Website',
      url: 'https://example.com',
    }

    render(<Link {...props} />)

    expect(await screen.findByText(/Website/i)).toBeInTheDocument()
    expect(await screen.findByRole('link')).toHaveAttribute('href', props.url)
  })

  it('should render the video correctly', async () => {
    const props = {
      __typename: LinkType.Video,
      url: 'https://example.com',
    }

    render(<Link {...props} />)

    expect(await screen.queryByText(/Website/i)).not.toBeInTheDocument()
    expect(await screen.findByTitle('video')).toHaveAttribute('src', props.url)
  })
})
