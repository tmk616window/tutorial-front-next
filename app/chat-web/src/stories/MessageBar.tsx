import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Icon from './Icon';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack'
import useScrollTrigger from '@mui/material/useScrollTrigger';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

type HeaderProps = {
  name: string
  image: string
}

const MessageBar: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  name,
  image,
  children,
}) => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#001835",
        padding: "100",
        width: "10",
        position: 'absolute',
        top: 0
      }}

      style={{ width: '100%' }}
    >
      <Toolbar
        sx={{
          px: { xs: 0, md: 0 },
          pl: { xs: 1, md: 2 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <Icon height={50} width={50} sx={{ alignItems: "center" }} />
          <Typography variant="h6" color="inherit" component="div">
            {name}cewewdewdw2
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" height="100%" spacing={0.5}>
          {children}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MessageBar