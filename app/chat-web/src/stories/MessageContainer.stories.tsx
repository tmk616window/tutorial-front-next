import { Story, Meta } from '@storybook/react'
import { OtherMessageContainer } from './MessageContainer';

export default {
  title: 'Messages/OtherMessageContainer',
  component: OtherMessageContainer,
} as Meta<typeof OtherMessageContainer>

const Template: Story<React.ComponentProps<typeof OtherMessageContainer>> = (props) => {
  return <OtherMessageContainer {...props} />
}

export const Default = Template.bind({});
Default.args = {
  text: "texwmdoepwkdoepw",
}
