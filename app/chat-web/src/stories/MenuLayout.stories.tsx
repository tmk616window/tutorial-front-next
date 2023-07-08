import { Story, Meta } from '@storybook/react'
import MenuLayout from './MenuLayout';

export default {
  title: 'Menu/MenuLayout',
  component: MenuLayout,
} as Meta<typeof MenuLayout>

const Template: Story<React.ComponentProps<typeof MenuLayout>> = () => {
  return <MenuLayout />
}

export const Default = Template.bind({});
Default.args = {
}
