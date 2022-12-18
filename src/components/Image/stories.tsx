import { Story, Meta } from '@storybook/react/types-6-0'
import Image from '.'

export default {
  title: 'Image',
  component: Image,
} as Meta

export const Default: Story = () => <Image  
size='larger'
src='https://images.unsplash.com/photo-1671160033378-4e6329f56555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />