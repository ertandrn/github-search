import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import DigieggsLogo from "../svg/DigieggsLogo";
import SearchBox from './SearchBox';
import Grid from '@material-ui/core/Grid';
import { Event } from "../type"

interface IHeaderProps
{
    searchChange: Event;
    onSubmit: any;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Box display="flex" bgcolor="#375f9d" boxShadow={1} style={{ paddingTop: 15, paddingBottom: 15 }} >

            <Box display="flex" alignItems="center" style={{ marginLeft: 16 }}>
                <DigieggsLogo width={138} height={20} />
            </Box>

            <Box display="flex" alignItems="center" style={{ marginLeft: 16 }}>
                <SearchBox searchChange={props.searchChange} onSubmit={props.onSubmit} />
            </Box>

        </Box>
    );
}

export default Header;