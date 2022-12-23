import { render, screen } from '@testing-library/react' 
import Card from '.'
import { CardMock } from '../../Mocks'

describe('<Card />',  () => {
  it('should appear when the mouse is hover', () => {
    const { container } = render(<Card props={CardMock} />)

    expect(screen.getByTestId('over')).toHaveStyle(
      'position:absolute;'
    )  

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the image', () => {
    const { container } = render(<Card props={CardMock} />)

    expect(screen.getByRole('img')).toBeInTheDocument()


    expect(container.firstChild).toMatchSnapshot()
  })

})