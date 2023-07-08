import { Box, Stack } from "@mui/material";
import MessageText from "./MessageText"
import styled from "@emotion/styled";
import Icon from "./Icon";

const ImageBox = styled(Box)(({ }) => ({
  width: '70px',
  minWidth: '70px',
  marginRight: '20px'
}))

type Props = {
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderTopLeftRadius?: number;
  text: string;
  backgroundColor: string;
}

const MessageContainer: React.FC<Props> = ({
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  text,
  backgroundColor,
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          borderBottomRightRadius: `${borderBottomRightRadius}px`,
          borderTopLeftRadius: `${borderTopLeftRadius}px`,
          display: 'inline-block',
          backgroundColor: backgroundColor,
          borderTopRightRadius: "35px",
          borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
          padding: "15px",
          marginBottom: "10px"
        }}
      >
        <MessageText text={text} />
      </Box>
    </Stack>
  );
}

export const UserMessageContainer: React.FC<Props> = ({
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  backgroundColor,
  text
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '10px',
      }}
    >
      <ImageBox />
      <MessageContainer
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        backgroundColor={backgroundColor}
        borderTopLeftRadius={borderTopLeftRadius}
        text={text}
      />
    </Box>
  );
}


export const SubsequentMessageContainer: React.FC<Props> = ({
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  backgroundColor,
  text
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
      <ImageBox />
      <MessageContainer
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        backgroundColor={backgroundColor}
        borderTopLeftRadius={borderTopLeftRadius}
        text={text}
      />
    </Box>
  );
}

const FirstMessageContainer: React.FC<{ text: string }> = ({
  text
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
      <Icon height={70} width={70} marginRight={20} />
      <MessageContainer
        borderBottomRightRadius={35}
        backgroundColor={"#0F82FF"}
        text={text}
      />
    </Box>
  );
}

export const OtherMessageContainer: React.FC<{ text: string, isFirst: boolean }> = ({
  text,
  isFirst
}) => {
  return isFirst ? (
    <FirstMessageContainer text={text} />
  ) : (
    <SubsequentMessageContainer text={text} borderBottomRightRadius={35} borderBottomLeftRadius={35} backgroundColor={"#0F82FF"} />
  )
}
