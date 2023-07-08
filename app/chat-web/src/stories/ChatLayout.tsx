import * as React from 'react';
import { Stack } from '@mui/material';
import ChatList from './ChatList';

export const ChatLayout = () => {
  return (
    <Stack>
      <ChatList />
    </Stack>
  );
}

export default ChatLayout