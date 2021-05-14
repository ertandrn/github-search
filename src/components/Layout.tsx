import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

function Layout(props: any) {
    return (
        <Grid container >

            <Grid item xs={12} sm={3} >

                <Box borderRight={1} style={{ height: "100%", borderRightColor: "#c4c4c4" }}>

                    <Box borderBottom={1} style={{ borderBottomColor: "#c4c4c4", paddingTop: 8.5, paddingBottom: 8 }}>
                        {props.layoutA}
                    </Box>

                </Box>

            </Grid>

            <Grid item xs={12} sm={9}>
                {props.layoutB}
            </Grid>

        </Grid>
    );
}

export default Layout;