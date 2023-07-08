import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Icon from './Icon';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/material'

const ChatCard = styled(ListItem)({
  marginBottom: '10px',
  backgroundColor: "#002046",
  width: '350px'
});

const Name = styled(Typography)({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '25px',
  lineHeight: '158.5%'
});

const MessageText = styled(Typography)({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '21px',
  lineHeight: '158.5%'
});

const ChatListitem = () => {
  return (
    <ChatCard sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Icon height={60} width={60} />
      <Stack >
        <Name
          sx={{ display: 'inline' }}
          variant="body2"
          color="#C9C9C9"
          gap={2}
        >
          Sandra Adams
        </Name >

        <MessageText
          color="#FFFFFF"
        >
          hduihduiewhdoewxsxxew
        </MessageText>
      </Stack>
    </ChatCard>
  );
}

export default ChatListitem