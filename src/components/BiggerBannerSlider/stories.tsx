import { Story, Meta } from '@storybook/react/types-6-0'
import BiggerBannerSlider from '.'
import { BiggerBannerMock } from '../../Mocks/index';

export default {
  title: 'BiggerBannerSlider',
  component: BiggerBannerSlider
} as Meta
const mock = [BiggerBannerMock,BiggerBannerMock,BiggerBannerMock]
export const Default: Story = () => <BiggerBannerSlider props={mock}/>