import React from 'react';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Search from "../svg/Search";
import { useHistory, useRouteMatch } from "react-router-dom";

const SearchBox = () => {

    const history = useHistory();
    const { path }: any = useRouteMatch();

    const [search, setSearch] = React.useState<string>("");

    return (
        <Box display="flex" alignItems="center" bgcolor="#19417f" width={288} height={34} borderRadius={4} >

            <Box display="flex" justifyContent="center" alignItems="center" style={{ marginLeft: 16 }} >
                <Search width={24} height={24} />
            </Box>

            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center" fontFamily="Roboto" style={{ marginLeft: 16, marginRight: 16 }} >
                <form
                    //onSubmit={props.onSubmit}
                    onSubmit={(e) => {
                        e.preventDefault();
                        history.push( path + search);
                    }}
                >
                    <InputBase
                        defaultValue={search}
                        fullWidth={true}
                        placeholder="Search..."
                        style={{
                            color: "#FFFFFF",
                            fontSize: 16,
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: 1.75,
                            letterSpacing: 0.44
                        }}
                        //onChange={props.searchChange}
                        onChange={(e: any) => { setSearch(e.target.value) }}

                    />
                </form>
            </Box>

        </Box>

    );
}

export default SearchBox;