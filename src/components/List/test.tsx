import { render, screen } from '@testing-library/react'
import { CardMock } from '../../Mocks'

import List from '.'
const mock = [CardMock,CardMock]
describe('<List />', () => {
  it('should render the heading', () => {
    const { container } = render(<List props={mock} />)

    expect(screen.getAllByTestId('over')).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })
})