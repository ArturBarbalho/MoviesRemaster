import { Story, Meta } from '@storybook/react/types-6-0'
import BiggerBanner from '.'
import { BiggerBannerMock } from '../../Mocks'

export default {
  title: 'BiggerBanner',
  component: BiggerBanner
} as Meta

export const Default: Story = () => <BiggerBanner props={BiggerBannerMock} />