import { Story, Meta } from '@storybook/react'
import MessageForm from './MessageForm';
import { Box } from "@mui/material";

export default {
  title: 'Messages/MessageForm',
  component: MessageForm,
} as Meta<typeof MessageForm>

const Template: Story<React.ComponentProps<typeof MessageForm>> = (props) => {
  return (
    <MessageForm />
  )
}

export const Default = Template.bind({});
Default.args = {
}
