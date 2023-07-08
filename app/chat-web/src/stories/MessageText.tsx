import Typography from "@mui/material/Typography";

const MessageText: React.FC<{
  text: string;
}> = ({
  text,
}) => {
    return (
      <Typography
        sx={{
          color: '#FFF',
          fontSize: '28.587px',
          fontFamily: 'Poppins',
          fontWeight: '500',
          lineHight: '158.5 %',
          display: 'block'
        }}
        component="p"
      >
        {text}
      </Typography >
    );
  }

export default MessageText