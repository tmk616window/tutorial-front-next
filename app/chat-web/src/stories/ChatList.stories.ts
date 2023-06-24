import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { ChatList } from './ChatList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: any = {
  title: 'Test/List',
  component: ChatList,
  tags: ['autodocs'],
};

export default meta;
type Story = any;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
};
