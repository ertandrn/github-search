import React from 'react';
import Box from "@material-ui/core/Box";

function Button(props: any) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" border={1} bgcolor={props.state ? "#2c98f0" : "#FFFFFF"} borderRadius={4}
            style={{ borderColor: "#2c98f0", paddingTop: 9, paddingBottom: 9 }}
            onClick={props.onClick}
        >

            {props.icon}

            <Box
                fontSize={16}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1.25}
                letterSpacing="normal"
                color={ props.state ? "rgba(255, 255, 255, 0.87)" : "#2c98f0"}
                style={{ marginLeft: 8 }}
            >
                {props.title}
            </Box>
        </Box>
    );
}

export default Button;