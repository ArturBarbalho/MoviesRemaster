import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import Button from '.'

describe('<Button />', () => {
  const onclick = jest.fn()
  it('should render the black color and execute the onclick function', () => {
    const { container } = render(<Button color='black' onClick={ ()=> onclick()} />)

    expect(onclick).not.toBeCalled()

    userEvent.click(screen.getByRole('button', { name: /See more/i }))

    expect(onclick).toBeCalled()  


    expect(screen.getByRole('button', { name: /See more/i })).toHaveStyle(
      'background-color:black;'
    )
    expect(container.firstChild).toMatchSnapshot()
  })


  it('should render the gray color', () => {
    const { container } = render(<Button color='gray' onClick={()=> onclick()}/>)

    expect(screen.getByRole('button', { name: /See more/i })).toHaveStyle(
      'background-color:gray;'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})