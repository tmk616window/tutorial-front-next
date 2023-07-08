import { Story, Meta } from '@storybook/react'
import MenuItemElement from './MenuItemElement';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

export default {
  title: 'Menu/MenuItemElement',
  component: MenuItemElement,
} as Meta<typeof MenuItemElement>

const Template: Story<React.ComponentProps<typeof MenuItemElement>> = (props) => {
  return <MenuItemElement {...props} />
}

export const MessageButton = Template.bind({});
MessageButton.args = {
  text: "メッセージ",
  children: <MessageIcon />
}

export const SettingButton = Template.bind({});
SettingButton.args = {
  text: "設定",
  children: <SettingsApplicationsIcon />
}
