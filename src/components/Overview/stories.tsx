import { Story, Meta } from '@storybook/react/types-6-0'
import Overview from '.'
import { BannerMock } from '../../Mocks'
export default {
  title: 'Overview',
  component: Overview
} as Meta

export const Default: Story = () => <Overview size='small' overview={BannerMock.overview} />