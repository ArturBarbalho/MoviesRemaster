import { render, screen } from '@testing-library/react'
import Reviews from '.'
import { ReviewsMock } from '../../Mocks'

const mock = [ReviewsMock]

describe('<Reviews />', () => {
  it('should render the correct values', () => {
    const { container } = render(<Reviews props={mock} />)

    expect(screen.getByText('Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato ...')).toBeInTheDocument()

    expect(screen.getByText('ONYANKOPON')).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})