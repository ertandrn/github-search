import React from 'react';
import Box from "@material-ui/core/Box";

function UserDetailsTitle(props: any) {
    return (
        <Box display="flex" flexDirection="row" alignItems="center"
            style={{ paddingLeft: 63, paddingRight: 63, paddingTop: 42, paddingBottom: 18 }}
        >

            <Box
                display="flex"
                fontSize={24}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1}
                letterSpacing="normal"
                color="#000000"
            >
                {props.title}
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" border={1}
                fontSize={12}
                fontWeight={500}
                fontStyle="normal"
                lineHeight={2}
                letterSpacing={1.25}
                color="#2196f3"
                style={{
                    borderColor: "#2196f3",
                    marginLeft: 10,
                    borderRadius: 4,
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 28,
                    paddingRight: 28
                }}
            >
                {props.publicRepos}
            </Box>

        </Box>
    );
}

export default UserDetailsTitle;