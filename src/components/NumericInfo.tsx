import React from 'react';
import Box from '@material-ui/core/Box';

function NumericInfo(props: any) {
    return (
        <Box display="flex" flexDirection="row" borderBottom={ props.line ? 1 : 0} style={{ borderBottomColor: "#dcdcdc", paddingBottom: 15, paddingTop: 16 }} >

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {props.icon}
            </Box>

            <Box
                fontSize={20}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1.2}
                letterSpacing="normal"
                color="#000000"
                width="100%"
                style={{ paddingLeft: 8, paddingRight: 8 }}
            >
                {props.name}
        </Box>

            <Box
                fontSize={20}
                fontWeight="bold"
                fontStyle="normal"
                lineHeight={1.2}
                letterSpacing="normal"
                color="#2c98f0"
                width="100%"
                textAlign="right"
            >
                {props.numericValue}
        </Box>

        </Box>
    );
}

export default NumericInfo;