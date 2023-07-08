import * as React from 'react';
import { Box } from '@mui/material';
import MenuItemElement from './MenuItemElement';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import { ReactElement } from 'react';

type MenuItem = {
  text: string;
  icon: ReactElement;
};

const MenuItemList = () => {
  const menuItems: MenuItem[] = [
    { text: "メッセージ", icon: <MessageIcon /> },
    { text: "プロフィール", icon: <PersonIcon /> },
    { text: "設定", icon: <SettingsApplicationsIcon /> },
  ];

  return (
    <Box sx={{ width: 170 }} >
      {menuItems.map((item, index) => (
        <MenuItemElement key={index} text={item.text}>
          {item.icon}
        </MenuItemElement>
      ))}
    </Box>
  );
}

export default MenuItemList