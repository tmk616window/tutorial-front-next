import { Story, Meta } from '@storybook/react'
import MessageList from './MessageList';

export default {
  title: 'Messages/MessageList',
  component: MessageList,
} as Meta<typeof MessageList>

const Template: Story<React.ComponentProps<typeof MessageList>> = (props) => {
  return <MessageList {...props} />
}

export const Default = Template.bind({});
Default.args = {
}
