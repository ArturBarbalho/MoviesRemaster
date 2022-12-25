import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('link', { name: /MOVIES/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /TV SHOWS/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})