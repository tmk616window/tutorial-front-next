import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import MessageForm from "./MessageForm";
import { Box } from "@mui/material";

const MessageLayout: React.FC<any> = ({
}) => {
    return (
        <Box sx={{position: "relative"}}>
            <Box sx={{ width: "100px" }}>
                <MessageBar name="name" image="aaaaa" >
                    <p>dewdew</p>
                </MessageBar>
            </Box>
            <MessageList />
            <MessageForm />
        </Box>
    );
}



export default MessageLayout