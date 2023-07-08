import { Story, Meta } from '@storybook/react'
import MessageBar from './MessageBar';

export default {
  title: 'Messages/MessageBar',
  component: MessageBar,
} as Meta<typeof MessageBar>

const Template: Story<React.ComponentProps<typeof MessageBar>> = (props) => {
  return <MessageBar {...props} />
}

export const Default = Template.bind({});
Default.args = {
}
