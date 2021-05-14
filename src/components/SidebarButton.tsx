import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

interface ISidebarButtonProps {
    id: number;
    selectedID: number;
    icon: any;
    name: string;
    totalCount: string;
    onClick: any;
}

const SidebarButton: FunctionComponent<ISidebarButtonProps> = (props) => {

    let menuBackgroundColor = props.id === props.selectedID ? "#d9e8ff" : "#FFFFFF";
    let textColor = props.id === props.selectedID ? "rgba(55, 95, 157, 0.87)" : "rgba(0, 0, 0, 0.87)";

    return (
        <Box
            bgcolor={ menuBackgroundColor }
            onClick={props.onClick}
            display="flex"
            flexDirection="row"
            style={{ paddingLeft: 16, paddingRight: 22, paddingTop: 11, paddingBottom: 11 }}
        >

            <Box
                //bgcolor="red"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {props.icon}
            </Box>

            <Box
                fontSize={16}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1.25}
                letterSpacing="normal"
                color={textColor}
                width="100%"
                style={{ paddingLeft: 32, paddingRight: 32 }}
            >
                {props.name}
            </Box>

            <Box
                fontSize={16}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1.25}
                letterSpacing="normal"
                color={textColor}
                width="100%"
                textAlign="right"
            >
                {props.totalCount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
            </Box>
        </Box>
    );
}

export default SidebarButton;