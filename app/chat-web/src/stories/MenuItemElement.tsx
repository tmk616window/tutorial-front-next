import * as React from 'react';
import { Box } from '@mui/material';
import MenuText from './MenuText';
import Button from '@mui/material/Button';

type MenuItemProps = {
  text: string
}

const MenuItemElement: React.FC<React.PropsWithChildren<MenuItemProps>> = ({
  text,
  children
}) => {
  return (
    <Button sx={{ width: 170, marginBottom: 1.5 }} >
      <Box sx={{ flexDirection: "row", display: "flex", alignItems: "center", flex: "1 0 0" }} gap={2}>
        {children}
        <MenuText text={text} />
      </Box>
    </Button>
  );
}

export default MenuItemElement