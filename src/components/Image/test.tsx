import { render, screen } from '@testing-library/react'

import Image from '.'

describe('<Image />', () => {
  const src = 'https://images.unsplash.com/photo-1671160033378-4e6329f56555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'

  it('should render the small size', () => {
    const { container } = render(<Image
      size='small'
      src={src}
      />)

    expect(screen.getByRole('img')).toHaveStyle(
      'width:350px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })


  it('should render the medium size', () => {
    const { container } = render(<Image
      size='medium'
      src={src}
      />)

    expect(screen.getByRole('img')).toHaveStyle(
      'max-width:500px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })


  it('should render the large size', () => {
    const { container } = render(<Image
      size='large'
      src={src}
      />)

    expect(screen.getByRole('img')).toHaveStyle(
      'width:100%;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })


  it('should render the larger size', () => {
    const { container } = render(<Image
      size='larger'
      src={src}
      />)

    expect(screen.getByRole('img')).toHaveStyle(
      'width:100vw;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})