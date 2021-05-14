import React from "react";
import Box from "@material-ui/core/Box";
import LinearProgress from '@material-ui/core/LinearProgress';
import ListCard from "../components/ListCard";
import Title from "../components/Title";
import SidebarButton from "../components/SidebarButton";
import Layout from "../components/Layout";
import Book from "../svg/Book";
import InsertEmoticion from "../svg/InsertEmoticion";
import Bookmark from "../svg/Bookmark";
import InsertDriveFile from "../svg/InsertDriveFile";
import axios from "axios";
import { useParams } from "react-router-dom";

function Search() {

    const { search }: any = useParams();

    const [repositories, setRepositories] = React.useState<any>([]);
    const [userLogins, setUserLogins] = React.useState<any>([]);
    const [users, setUsers] = React.useState<any>([]);
    const [selectedSidebarMenu, setSelectedSidebarMenu] = React.useState<number>(0);
    const [progress, setProgress] = React.useState<boolean>(false);

    React.useEffect(() => {

        if (search != "") {
            getData();
            setProgress(true);
        }

    }, [search]);

    const getData = async () => {

        try {
            var orderlySearch = await getOrderlySearch(search);
        } catch (error) { console.log(error); }

        try {
            var orderlySearch = await getOrderlySearch(search);
        } catch (error) { console.log(error); }

        try {
            let repositories = [];
            repositories.push(await axios.get("https://api.github.com/search/repositories?q=" + orderlySearch));
            setRepositories(repositories);
        } catch (error) { console.log(error); alert(error) }

        var userLogins = [];
        try {
            userLogins.push(await axios.get("https://api.github.com/search/users?q=" + orderlySearch))
            setUserLogins(userLogins);
        } catch (error) { console.log(error); alert(error) }

        var users = []

        /*** 
         * Kullanıcıları listelerken;
         * Tek api ile kullanıcıların detaylı biligisini alamıyorum.
         * Bunun için her kullanıcı için ayrı ayrı istek göndermem gerekti.
         * Çok fazla istek gönderdiğimde ise bir süre sonra 403 hatası veriyor.
         * Bu yüzden 8 kullanıcı listeledim.
        */

        //for (let i = 0; i < userLogins[0].data.items.length; i++) {
        for (let i = 0; i < 8; i++) {
            try {
                users.push(await axios.get("https://api.github.com/users/" + userLogins[0].data.items[i].login))
            } catch (error) { console.log(error); alert(error); return false; }
        }

        setUsers(users);
        setProgress(false);

    }

    const getOrderlySearch = (text: string) => {

        return new Promise((resolve, reject) => {

            let search: string = text.trim();

            search = search.replace(/ /g, "+");

            resolve(search);

        });

    }

    function iconColor(id: number) {
        if (id == selectedSidebarMenu) {
            return "#375f9d";
        }

        else {
            return "#757575";
        }
    }

    let titleData: any =
        [
            {
                totalCount: repositories.length === 0 ? "0" : repositories[0].data.total_count,
                title: "Repository Results"
            },

            {
                totalCount: userLogins.length === 0 ? "0" : userLogins[0].data.total_count,
                title: "User Results"
            },

            {
                totalCount: 0,
                title: "Bookmarked Repository Results"
            }
        ]

    let sideBarMenuData: any =
        [
            {
                id: 0,
                icon: <InsertDriveFile color={iconColor(0)} width={24} height={24} />,
                name: "Repositories",
                totalCount: repositories.length === 0 ? "0" : repositories[0].data.total_count,
            },

            {
                id: 1,
                icon: <InsertEmoticion color={iconColor(1)} width={24} height={24} />,
                name: "Users",
                totalCount: userLogins.length === 0 ? "0" : userLogins[0].data.total_count,
            },

            {
                id: 2,
                icon: <Bookmark color={iconColor(2)} width={24} height={24} />,
                name: "Bookmarked",
                totalCount: "0",
            }

        ];

    const onClickSidebarMenu = (id: number) => {
        //alert(id);
        setSelectedSidebarMenu(id);
    }

    function getResults(selected: number) {

        if (repositories.length != 0 && users.length != 0) {
            if (selected === 0) {
                return (
                    repositories[0].data.items.map((val: any) => {
                        return (
                            <ListCard icon={<Book width={24} height={24} />} title={val.full_name} description={val.description} link={"repository-details/" + val.full_name} />
                        );
                    })
                )
            }

            else if (selected === 1) {
                return (
                    users.map((val: any) => {
                        return (
                            <ListCard avatarURL={val.data.avatar_url} title={val.data.name} description={val.data.bio} link={"user-details/" + val.data.login} />
                        );
                    })
                )
            }

            else {
                return null;
            }
        }
    }

    return (
        <Box>
            {
                progress ?

                    <LinearProgress />

                    :

                    <Layout
                        horizontalLine={true}
                        layoutA={
                            sideBarMenuData.map((val: any) => {
                                return (
                                    <SidebarButton
                                        id={val.id}
                                        selectedID={selectedSidebarMenu}
                                        icon={val.icon}
                                        name={val.name}
                                        totalCount={val.totalCount}
                                        onClick={() => { onClickSidebarMenu(val.id) }}
                                    />
                                );
                            })
                        }

                        layoutB={
                            <Box>
                                <Title totalCount={titleData[selectedSidebarMenu].totalCount} title={titleData[selectedSidebarMenu].title} />
                                { getResults(selectedSidebarMenu) }
                            </Box>
                        }
                    />

            }

        </Box >
    );

}

export default Search;