import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the larger title ', () => {
    const { container } = render(<Title size='large' >DOU KYUU SEI</Title>)

    expect(screen.getByRole('heading', { name: /DOU KYUU SEI/ })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /DOU KYUU SEI/})).toHaveStyle(
      'font-size:70px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the medium title', () => {
    const { container } = render(<Title size='medium' >POPULAR</Title>)

    expect(screen.getByRole('heading', { name: /POPULAR/ })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /POPULAR/ })).toHaveStyle(
      'width: 250px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  
  })
})