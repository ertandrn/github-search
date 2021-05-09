import React from 'react';
import Box from '@material-ui/core/Box';
import ScreenSearchDesktop from "../svg/ScreenSearchDesktop";

function EmptyPage() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ marginTop: 267 }}>

            <ScreenSearchDesktop width={86} height={86} />

            <Box
                fontSize={24}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={0.83}
                textAlign="center"
                color="#85b0f2"
                style={{ marginTop: 12 }}
            >
                Search results will appear here
            </Box>

        </Box>

    );
}

export default EmptyPage;