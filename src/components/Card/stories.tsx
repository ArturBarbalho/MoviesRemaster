import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'
import { CardMock } from '../../Mocks'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story = () => <Card props={CardMock} />