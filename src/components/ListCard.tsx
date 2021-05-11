import React, { ElementType, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

interface IListProps {
    icon: any;
    title: string;
    description: string;
}

const ListCard: FunctionComponent<IListProps> = (props) => {
    return (
        <Box style={{ paddingLeft: 63, paddingRight: 63 }}>

            <Box flexDirection="row" display="flex" borderBottom={1} style={{ borderBottomColor:"#bebebe", paddingTop: 24, paddingBottom: 24 }} >

                <Box>{props.icon}</Box>

                <Box style={{ marginLeft: 8 }}>

                    <Box
                        fontSize={20}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1.2}
                        letterSpacing="normal"
                        color="#375f9d"
                    >
                        {props.title}
                    </Box>

                    <Box
                        fontSize={16}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1.5}
                        letterSpacing="normal"
                        color="#000000"
                    >
                        {props.description}
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default ListCard;