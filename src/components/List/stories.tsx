import { Story, Meta } from '@storybook/react/types-6-0'
import List from '.'
import { CardMock } from '../../Mocks'

export default {
  title: 'List',
  component: List
} as Meta
const mock = [CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock,CardMock]

export const Default: Story = () => <List props={mock} />