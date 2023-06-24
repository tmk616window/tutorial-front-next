import * as React from 'react';
import List from '@mui/material/List';
import { ChatListitem } from './ChatListitem';
import { styled } from '@mui/material/styles'
import { MessageTitle } from './MessageTitle';

const ChatListItem = styled(List)({
  height: '1,819.04px',
  width: '517px',
  Left: '334px',
  top: '0px',
})

export const ChatList = () => {
  return (
    <>
      <MessageTitle>messages</MessageTitle>
      <ChatListItem sx={{ bgcolor: 'red', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ChatListitem />
        <ChatListitem />
        <ChatListitem />
        <ChatListitem />
      </ChatListItem>
    </>
  );
}