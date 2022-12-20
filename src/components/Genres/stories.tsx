import { Story, Meta } from '@storybook/react/types-6-0'
import Genres from '.'
import { BannerMock } from '../../Mocks'

export default {
  title: 'Genres',
  component: Genres
} as Meta

export const Default: Story = () => <Genres size='details' genres={BannerMock.genres} />