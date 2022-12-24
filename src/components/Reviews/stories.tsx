import { Story, Meta } from '@storybook/react/types-6-0'
import Reviews from '.'
import { ReviewsMock } from '../../Mocks'

export default {
  title: 'Reviews',
  component: Reviews
} as Meta
const mock = [ReviewsMock,ReviewsMock,ReviewsMock,ReviewsMock]
export const Default: Story = () => <Reviews props={mock} />