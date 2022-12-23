import { render, screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import BiggerBannerSlider from '.'
import { BiggerBannerMock } from '../../Mocks'

const mock = [BiggerBannerMock,BiggerBannerMock]

describe('<BiggerBannerSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<BiggerBannerSlider props={mock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(1)

    expect(container.firstChild).toMatchSnapshot()
  })
})