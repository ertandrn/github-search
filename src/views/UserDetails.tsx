import React from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Book from "../svg/Book";
import Avatar from '@material-ui/core/Avatar';
import ListCard from "../components/ListCard";
import UserDetailsTitle from "../components/UserDetailsTitle";

function UserDetails() {

    const { login }: any = useParams();

    const [data, setData] = React.useState<any>([]);

    React.useEffect(() => {

        getData(login);

    }, []);

    const getData = async (login: any) => {

        let data = [];

        try {
            data.push(await axios.get("https://api.github.com/users/" + login));
        } catch (error) { console.log(error); alert(error) }

        try {
            data.push(await axios.get("https://api.github.com/users/" + login + "/repos"));
        } catch (error) { console.log(error); alert(error) }

        setData(data);

    }

    let emptyArray = data.length == 0 ? true : false;



    if (emptyArray) {
        return (
            <Box></Box>
        )
    }

    return (

        <Layout
            horizontalLine={false}
            layoutA={
                <Box
                    style={{
                        paddingTop: 42.5,
                        paddingRight: 77,
                        paddingLeft: 77,
                    }}
                >

                    <Avatar alt="Remy Sharp" src={data[0].data.avatar_url} style={{ width: 206, height: 206 }} />

                    <Box
                        fontSize={24}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1}
                        letterSpacing="normal"
                        color="#000000"
                        style={{ marginTop: 30 }}
                    >
                        {data[0].data.name}
                    </Box>

                    <Box
                        fontSize={16}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1.5}
                        letterSpacing="normal"
                        color="#646464"
                    >
                        {data[0].data.login}
                    </Box>

                    <Box
                        fontSize={16}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1.5}
                        letterSpacing="normal"
                        color="#000000"
                        style={{ marginTop: 16 }}
                    >
                        {data[0].data.bio}
                    </Box>

                </Box>
            }

            layoutB={
                <Box>

                    <UserDetailsTitle title={"Repositories"} publicRepos={data[0].data.public_repos} />

                    {
                        data[1].data.map((val: any) => {
                            return (
                                <ListCard icon={<Book width={24} height={24} />} title={val.full_name} description={val.description} link={"../repository-details/" + val.full_name} />
                            );
                        })
                    }

                </Box>
            }
        />

    );
}

export default UserDetails;