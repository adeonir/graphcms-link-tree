import { render, screen } from '@testing-library/react'

import { User } from '.'

const props = {
  avatar: {
    url: '/avatar.png',
  },
  name: 'John Doe',
  bio: 'Lorem ipsum dolor sit amet',
}

describe('<User />', () => {
  it('should render correctly', async () => {
    render(<User {...props} />)

    expect(
      await screen.findByRole('img', { name: props.name })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('heading', { name: props.name })
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/Lorem ipsum dolor sit amet/i)
    ).toBeInTheDocument()
  })
})
