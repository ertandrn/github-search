import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

interface ITitleProps {
    totalCount: string;
    title: string;
}

const Header: FunctionComponent<ITitleProps> = (props) => {
    return (
        <Box
            fontSize={24}
            fontWeight="normal"
            fontStyle="normal"
            lineHeight={1}
            letterSpacing="normal"
            color="#000000"
            style={{ paddingLeft: 63, paddingRight: 63, paddingTop: 42, paddingBottom: 18 }}
        >
            {props.totalCount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " "}
            {props.title}
        </Box>
    );
}

export default Header;