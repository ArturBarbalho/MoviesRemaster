import { render, screen } from '@testing-library/react'
import Genres from '.'
import { BannerMock } from '../../Mocks'

describe('<Genres />', () => {
  it('should render the right genres', () => {
    const { container } = render(<Genres size='details' genres={BannerMock.genres} />)

    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Comedy')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the details size', () => {
    const { container } = render(<Genres size='details' genres={BannerMock.genres} />)

    expect(screen.getByText('Action')).toHaveStyle(
      'margin-left:10px;'
    )
    

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the banner size', () => {
    const { container } = render(<Genres size='banner' genres={BannerMock.genres} />)

    expect(screen.getByText('Comedy')).toHaveStyle(
      'max-width:250px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the bigger size', () => {
  const { container } = render(<Genres size='bigger' genres={BannerMock.genres} />)

    expect(screen.getByText('Action')).toHaveStyle(
      'font-size:40px;'
    )
    

    expect(container.firstChild).toMatchSnapshot()
  })

})