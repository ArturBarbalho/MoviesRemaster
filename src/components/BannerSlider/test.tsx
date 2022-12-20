import { render, screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import BannerSlider from '.'
import { BannerMock } from '../../Mocks'
const parms = [ BannerMock,BannerMock,BannerMock,BannerMock,BannerMock]

describe('<BannerSlider />', () => {
  it('should render one slick peer time', () => {
    const { container } = render(<BannerSlider bannerprops={parms} />)

    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(container.firstChild).toMatchSnapshot()
  })
})