import * as React from 'react';
import { Box } from '@mui/material';
import MenuLayout from './MenuLayout';
import MessageLayout from './MessageLayout';
import ChatLayout from './ChatLayout';
import { Grid } from '@mui/material';

const DefaultLayout = () => {
    return (
        <Grid container>
            <Grid item md={2}>
                <MenuLayout />
            </Grid>
            <Grid item md={4}>
                <ChatLayout />
            </Grid>
            <Grid item md={6}>
                <MessageLayout />
            </Grid>
        </Grid>
    );
}

export default DefaultLayout