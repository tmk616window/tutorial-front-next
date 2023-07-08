import { Story, Meta } from '@storybook/react'
import DefaultLayout from './DefaultLayout';
import MessageIcon from '@mui/icons-material/Message';

export default {
    title: 'Layouts/DefaultLayout',
    component: DefaultLayout,
    parameters: {
        layout: 'fullscreen',
        styles: {
            body: {
                padding: '0',
            },
        },
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#001835'
                },
            ],
        },
    },
} as Meta<typeof DefaultLayout>

const Template: Story<React.ComponentProps<typeof DefaultLayout>> = () => {
    return <DefaultLayout />
}

export const Default = Template.bind({});
Default.args = {
}
