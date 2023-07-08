import { Story, Meta } from '@storybook/react'
import MessageText from './MessageText';
import { Box } from "@mui/material";

export default {
  title: 'Messages/MessageText',
  component: MessageText,
} as Meta<typeof MessageText>

const Template: Story<React.ComponentProps<typeof MessageText>> = (props) => {
  return (
    <Box sx={{ bgcolor: 'black' }}>
      <MessageText {...props} />
    </Box>
  )
}

export const Default = Template.bind({});
Default.args = {
  text: 'Def',
}
