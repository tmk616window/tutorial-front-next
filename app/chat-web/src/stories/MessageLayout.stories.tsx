import { Story, Meta } from '@storybook/react'
import MessageLayout from './MessageLayout';

export default {
    title: 'Messages/MessageLayout',
    component: MessageLayout,
} as Meta<typeof MessageLayout>

const Template: Story<React.ComponentProps<typeof MessageLayout>> = () => {
    return <MessageLayout />
}

export const Default = Template.bind({});
Default.args = {
    text: "texwmdoepwkdoepw",
}
