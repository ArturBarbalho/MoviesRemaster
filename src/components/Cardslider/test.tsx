import { render } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import Cardslider from '.'
import { CardMock } from '../../Mocks'
const mock = [CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock]
describe('<Cardslider />', () => {
  it('should render the right number of slides', () => {
    const { container } = render(<Cardslider props={mock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(container.firstChild).toMatchSnapshot()
  })
})