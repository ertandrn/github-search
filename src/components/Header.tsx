import React from 'react';
import Box from '@material-ui/core/Box';
import DigieggsLogo from "../svg/DigieggsLogo";
import SearchBox from './SearchBox';
import Grid from '@material-ui/core/Grid';

function Header(props: any) {

    if (false) {
        return (
            <Grid container style={{ background:"#375f9d" }}>

                <Grid item xs={12} sm={2} align-items-sm-center style={{ background:"red", paddingLeft: 16 }}>
                    <DigieggsLogo width={138} height={20} />
                </Grid>

                <Grid item xs={12} sm={9} style={{ background:"blue" }}>
                    <SearchBox />
                </Grid>


            </Grid>
        )
    }

    return (
        <Box display="flex" bgcolor="#375f9d" boxShadow={1} style={{ paddingTop: 15, paddingBottom: 15 }} >

            <Box display="flex" alignItems="center" style={{ marginLeft: 16 }}>
                <DigieggsLogo width={138} height={20} />
            </Box>

            <Box display="flex" alignItems="center" style={{ marginLeft: 16 }}>
                <SearchBox searchChange={props.searchChange} />
            </Box>

        </Box>
    );
}

export default Header;