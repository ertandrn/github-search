import React from "react";

import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

import { Event, Repositories } from "../type"

import axios from "axios";

import Header from "../components/Header";
import EmptyPage from "../components/EmptyPage";
import ListCard from "../components/ListCard";
import Title from "../components/Title";
import SidebarButton from "../components/SidebarButton";

import Book from "../svg/Book";
import InsertEmoticion from "../svg/InsertEmoticion";
import BookmarkBorder from "../svg/BookmarkBorder";
import InsertDriveFile from "../svg/InsertDriveFile";


function Search() {

    const [search, setSearch] = React.useState<string>("");
    const [repositories, setRepositories] = React.useState<any>([]);
    const [users, setUsers] = React.useState<any>([]);

    const [selectedSidebarMenu, setSelectedSidebarMenu] = React.useState<number>(0);

    function iconColor(id: number) {
        if (id == selectedSidebarMenu) {
            return "#375f9d";
        }

        else {
            return "#757575";
        }
    }

    var sideBarMenuData: any =
        [
            {
                id: 0,
                icon: <InsertDriveFile color={iconColor(0)} width={24} height={24} />,
                name: "Repositories",
                totalCount: repositories.length === 0 ? "0" : repositories[0].data.total_count,
                onClick: () => { alert("Tıklandı"); setSelectedSidebarMenu(0) },
                selectedSidebarMenu: false
            },

            {
                id: 1,
                icon: <InsertEmoticion color={iconColor(1)} width={24} height={24} />,
                name: "Users",
                totalCount: repositories.length === 0 ? "0" : repositories[0].data.total_count,
                onClick: () => { alert("Tıklandı") },
                selectedSidebarMenu: false
            },

            {
                id: 2,
                icon: <BookmarkBorder color={iconColor(2)} width={24} height={24} />,
                name: "Bookmarked",
                totalCount: repositories.length === 0 ? "0" : repositories[0].data.total_count,
                onClick: () => { alert("Tıklandı") },
                selectedSidebarMenu: false
            }

        ];

    const deneme = (id: number) => {
        //alert(id);
        setSelectedSidebarMenu(id);
    }

    const searchChange: Event = (e) => {
        setSearch(e.target.value);
    }

    const getData = async (e: MouseEvent) => {

        e.preventDefault();

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
        } catch (error) { console.log(error); alert(error) }

        var users = []

        /*** 
         * Kullanıcıları listelerken;
         * Tek api ile kullanıcıların detaylı biligisini alamıyorum.
         * Bunun için her kullanıcı için ayrı ayrı istek göndermem gerekti.
         * Çok fazla istek gönderdiğimde ise bir süre sonra 403 hatası veriyor.
         * Bu yüzden 2 kullanıcı listeledim.
        */

        //for (let i = 0; i < userLogins[0].data.items.length; i++) {
        for (let i = 0; i < 2; i++) {
            try {
                users.push(await axios.get("https://api.github.com/users/" + userLogins[0].data.items[i].login))
            } catch (error) { console.log(error); alert(error); return false; }
        }

        setUsers(users);

    }

    const getOrderlySearch = (value: string) => {

        return new Promise((resolve, reject) => {

            let search: string = value.trim();

            search = search.replace(/ /g, "+");

            resolve(search);

        });

    }

    return (
        <Box>

            <Header searchChange={searchChange} onSubmit={getData} />

            {
                repositories.length === 0 && users.length === 0 ?

                    <EmptyPage />

                    :

                    <Grid container >

                        <Grid item xs={12} sm={3} >

                            <Box borderRight={1} style={{ height: "100%", borderRightColor: "#c4c4c4" }}>

                                <Box borderBottom={1} style={{ borderBottomColor: "#c4c4c4", paddingTop: 8.5, paddingBottom: 8 }}>
                                    {
                                        sideBarMenuData.map((val: any) => {
                                            return (
                                                <SidebarButton
                                                    id={val.id}
                                                    selectedID={selectedSidebarMenu}
                                                    icon={val.icon}
                                                    name={val.name}
                                                    totalCount={val.totalCount}
                                                    onClick={() => { deneme(val.id) }}
                                                />
                                            );
                                        })
                                    }
                                </Box>

                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={9}>

                            <Title totalCount={repositories[0].data.total_count} title={"Repository Results"} />

                            {
                                selectedSidebarMenu === 0 ?

                                    repositories[0].data.items.map((val: any) => {
                                        return (
                                            <ListCard icon={<Book width={24} height={24} />} title={val.full_name} description={val.description} />
                                        );
                                    })

                                    :

                                    users.map((val: any) => {
                                        return (
                                            <ListCard avatarURL={val.data.avatar_url} title={val.data.name} description={val.data.bio} />
                                        );
                                    })
                            }

                        </Grid>

                    </Grid>

            }


        </Box >
    );

}

export default Search;