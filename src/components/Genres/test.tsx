import { render, screen } from '@testing-library/react'

import Genres from '.'

describe('<Genres />', () => {
  it('should render the heading', () => {
    const { container } = render(<Genres />)

    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})