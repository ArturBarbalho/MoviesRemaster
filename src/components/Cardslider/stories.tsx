import { Story, Meta } from '@storybook/react/types-6-0'
import Cardslider from '.'
import { CardMock } from '../../Mocks'
export default {
  title: 'Cardslider',
  component: Cardslider
} as Meta

const mock = [CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock]

export const Default: Story = () => <Cardslider props={mock} />