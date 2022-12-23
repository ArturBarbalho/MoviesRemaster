import { render, screen } from '@testing-library/react'

import Details from '.'
import { DetailsMock } from '../../Mocks'

describe('<Details />', () => {
  it('should render the correct text', () => {
    const { container } = render(<Details props={DetailsMock} />)

    expect(screen.getByText('2008-04-14')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    

    expect(container.firstChild).toMatchSnapshot()
  })
})