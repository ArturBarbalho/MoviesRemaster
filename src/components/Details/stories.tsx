import { Story, Meta } from '@storybook/react/types-6-0'
import Details from '.'
import { DetailsMock } from '../../Mocks'

export default {
  title: 'Details',
  component: Details
} as Meta

export const Default: Story = () => <Details props={DetailsMock} />