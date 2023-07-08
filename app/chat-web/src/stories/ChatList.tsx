import * as React from 'react';
import List from '@mui/material/List';
import ChatListitem from './ChatListitem';
import { MessageTitle } from './MessageTitle';

export const ChatList = () => {
  return (
    <List sx={{ width: "100%", height: "93vh", overflow: 'auto' }}>
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
    </List>
  );
}

export default ChatList