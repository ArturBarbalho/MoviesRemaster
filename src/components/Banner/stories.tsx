import { Story, Meta } from '@storybook/react/types-6-0'
import Banner from '.'
import { BannerMock } from '../../Mocks'

export default {
  title: 'Banner',
  component: Banner,
  
} as Meta

export const Default: Story = () => <Banner bannerProps={BannerMock} />

