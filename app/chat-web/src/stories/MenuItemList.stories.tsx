import { Story, Meta } from '@storybook/react'
import MenuItemList from './MenuItemList';
import MessageIcon from '@mui/icons-material/Message';

export default {
  title: 'Menu/MenuItemList',
  component: MenuItemList,
} as Meta<typeof MenuItemList>

const Template: Story<React.ComponentProps<typeof MenuItemList>> = () => {
  return <MenuItemList />
}

export const Default = Template.bind({});
Default.args = {
  text: "メッセージ",
  children: <MessageIcon />
}
