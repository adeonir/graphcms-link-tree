import { render, screen } from '@testing-library/react'

import { User, UserProps } from '.'

describe('<User />', () => {
  it('should render correctly', () => {
    const props: UserProps = {
      avatar: {
        url: '/avatar.png',
      },
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet',
    }

    render(<User {...props} />)

    expect(screen.getByRole('img', { name: props.name })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })
})
