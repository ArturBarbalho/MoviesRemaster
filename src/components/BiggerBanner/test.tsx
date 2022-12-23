import { render, screen } from '@testing-library/react'

import BiggerBanner from '.'
import { BiggerBannerMock } from '../../Mocks'

describe('<BiggerBanner />', () => {
  it('should render the flex div', () => {
    const { container } = render(<BiggerBanner props={BiggerBannerMock} />)

    expect(screen.getByTestId('cont')).toHaveStyle(
      'display:flex;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})