import { Stack } from '@mui/material';
import { OtherMessageContainer, UserMessageContainer } from './MessageContainer';
import MessageBar from './MessageBar';

const MyMassage: React.FC<{ text: string; }> = ({ text }) => {
  return <UserMessageContainer backgroundColor={'#FFABCE'} borderBottomLeftRadius={35} borderTopLeftRadius={35} text={text} />
}

const MessageList: React.FC<any> = ({
}) => {
  return (
    <Stack sx={{ paddingTop: "55px", width: "100%", height: "80vh", overflow: 'auto' }}>
      <OtherMessageContainer text={"おはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはよう"} isFirst={true} />
      <OtherMessageContainer text={"dmekwdmoe"} isFirst={false} />
      <OtherMessageContainer text={"おはよう"} isFirst={false} />
      <MyMassage text={"ndwndkownodwdwp"} />
      <MyMassage text={"ndwndkownodwdwp"} />
      <MyMassage text={"ndwndkownodwdwp"} />
      <MyMassage text={"おはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはよう"} />
      <MyMassage text={"おはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはようおはよう"} />
    </Stack>
  );
}

export default MessageList
