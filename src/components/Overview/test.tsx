import { render, screen } from '@testing-library/react'

import Overview from '.'
import { BannerMock } from '../../Mocks'

describe('<Overview />', () => {
  it('should render the overview text and the small size', () => {
    const { container } = render(<Overview size='small' overview={BannerMock.overview} />)

    expect(screen.getByText( BannerMock.overview )).toBeInTheDocument()
    expect(screen.getByText( BannerMock.overview )).toHaveStyle(
      'max-width:900px;'
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the medium size', () => {
    const { container } = render(<Overview size='medium' overview={BannerMock.overview} />)

    expect(screen.getByText( BannerMock.overview )).toHaveStyle(
      'max-width:1000px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the large size', () => {
    const { container } = render(<Overview size='large' overview={BannerMock.overview} />)

    expect(screen.getByText( BannerMock.overview )).toHaveStyle(
      'max-width:1500px;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})