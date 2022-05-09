import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function Loading() {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress color="success" />
        </Box>
    );
}

export default Loading;