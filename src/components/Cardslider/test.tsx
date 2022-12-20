import { render, screen } from '@testing-library/react'

import Cardslider from '.'

describe('<Cardslider />', () => {
  it('should render the heading', () => {
    const { container } = render(<Cardslider />)

    expect(screen.getByRole('heading', { name: /Cardslider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})