import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider from '.'
import { BannerMock } from '../../Mocks/index';

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

 const parms = [ BannerMock,BannerMock,BannerMock,BannerMock,BannerMock]


export const Default: Story = () => <BannerSlider bannerprops={parms} />