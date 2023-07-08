import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';


const MessageForm = () => {
  return (
    <Paper sx={{ position: 'absolute', display: "flex", alignItems: "center" }} style={{ width: '100%' }} elevation={3}>
      <InputBase
        sx={{ ml: 3, width: "100%" }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  );
}

export default MessageForm