import { render, screen } from '@testing-library/react'

import Banner from '.'
import { BannerMock } from '../../Mocks'

describe('<Banner />', () => {
  it('should render the image src correctly', () => {
    const { container } = render(<Banner bannerProps={BannerMock} />)

    expect(screen.getByAltText('icon1')).toHaveAttribute('src', 'icon1.png')
    expect(screen.getByAltText('icon2')).toHaveAttribute('src', 'icon2.png')
    expect(screen.getByAltText('icon3')).toHaveAttribute('src', 'icon3.png')
    expect(screen.getByAltText('icon4')).toHaveAttribute('src', 'icon4.png')

    expect(container.firstChild).toMatchSnapshot()
  })
})