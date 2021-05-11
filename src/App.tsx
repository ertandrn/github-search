import React from "react";

import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

import { Event, Repositories } from "./type"

import axios from "axios";

import Header from "./components/Header";
import EmptyPage from "./components/EmptyPage";
import ListCard from "./components/ListCard";

import Book from "./svg/Book";

function App() {

  const [search, setSearch] = React.useState<string>("");
  const [repositories, setRepositories] = React.useState<any>([]);
  const [users, setUsers] = React.useState<any>([]);

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

    try {
      const users = await axios.get("https://api.github.com/search/users?q=" + orderlySearch);
      setUsers(users);
    } catch (error) { console.log(error); alert(error) }

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

            <Grid item xs={12} sm={3} style={{ background: "red" }} >
              A
            </Grid>

            <Grid item xs={12} sm={9}>

              <Box
                fontSize={24}
                fontWeight="normal"
                fontStyle="normal"
                lineHeight={1}
                letterSpacing="normal"
                color="#000000"
                style={{ paddingLeft: 63, paddingRight: 63, paddingTop: 42, paddingBottom: 18 }}
              >
                {JSON.stringify(repositories[0].data.total_count).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " "}
                Repository Results
              </Box>
              {
                repositories[0].data.items.map((val: any) => {
                  return (
                    <ListCard icon={<Book width={24} height={24} />} title={val.full_name} description={val.description} />
                  );
                })
              }

            </Grid>

          </Grid>




      }


    </Box >
  );

}

export default App;