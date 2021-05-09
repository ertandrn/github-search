import React from "react";
import Box from "@material-ui/core/Box";
import Header from "./components/Header";
import EmptyPage from "./components/EmptyPage";

function App() {

  const [search, setSearch] = React.useState("");

  const searchChange = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <Box>

      <Header searchChange={searchChange} />

      {
        search == "" ?

          <EmptyPage />

          :

          <Box>{search}</Box>
      }


    </Box>
  );

}

export default App;