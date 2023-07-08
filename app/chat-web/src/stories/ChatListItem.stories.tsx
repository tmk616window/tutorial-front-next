import { Story, Meta } from '@storybook/react'
import ChatListitem from './ChatListitem';

export default {
  title: 'Chat/ChatListitem',
  component: ChatListitem,
} as Meta<typeof ChatListitem>

const Template: Story<React.ComponentProps<typeof ChatListitem>> = (props) => {
  return <ChatListitem />
}

export const Default = Template.bind({});
Default.args = {
}
