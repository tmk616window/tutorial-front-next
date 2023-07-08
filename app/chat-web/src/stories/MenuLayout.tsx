import * as React from 'react';
import { Box } from '@mui/material';
import Icon from './Icon';
import MenuItemList from './MenuItemList';
import MenuImage from './MenuImage';

const MenuLayout = (
) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box marginBottom={10} marginTop={2}>
        <Icon height={120} width={120} />
      </Box>
      <MenuItemList />
    </Box>
  );
}

export default MenuLayout
