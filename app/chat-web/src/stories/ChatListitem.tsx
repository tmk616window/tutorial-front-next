import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Icon } from './Icon';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/material'

const ChatCard = styled(ListItem)({
  marginBottom: '10px',
  backgroundColor: "#002046",
  height: '143px',
  width: '495px',
  borderRadius: '6px',
  Padding: '30px, 22px, 30px, 22px',
  Gap: '30px',
  // margin: '15px auto',
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

export const ChatListitem = () => {
  return (
    <ChatCard>
      <Icon alt="icon" src="" height={83} width={83} />
      <Stack >
        <Name
          sx={{ display: 'inline' }}
          variant="body2"
          color="#C9C9C9"
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