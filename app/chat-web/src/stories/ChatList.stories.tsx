import { Story, Meta } from '@storybook/react'
import ChatList from './ChatList';

export default {
  title: 'Chat/ChatList',
  component: ChatList,
} as Meta<typeof ChatList>

const Template: Story<React.ComponentProps<typeof ChatList>> = (props) => {
  return <ChatList />
}

export const Default = Template.bind({});
Default.args = {
}
