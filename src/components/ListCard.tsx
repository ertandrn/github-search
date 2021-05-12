import React, { ElementType, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

interface IListProps {
    icon?: any;
    avatarURL?: string;
    title: string;
    description: string;
}

const ListCard: FunctionComponent<IListProps> = (props) => {
    return (
        <Box style={{ paddingLeft: 63, paddingRight: 63 }}>

            <Box flexDirection="row" display="flex" borderBottom={1} style={{ borderBottomColor:"#bebebe", paddingTop: 24, paddingBottom: 24 }} >

                {
                    props.icon ?

                    <Box display="flex" justifyContent="center">{props.icon}</Box>

                    :

                    <Box display="flex" justifyContent="center">
                        <Avatar alt="Remy Sharp" src={props.avatarURL} style={{ width: 24, height: 24 }} />
                    </Box>

                }

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