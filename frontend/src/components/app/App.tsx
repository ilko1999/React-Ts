import React from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CreateUiComponent from "./playerUi/playerComponent";
//import Navigation from "./sidebar/navigation";
import Burger from './sidebar/Burger'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Burger/>
        <CreateUiComponent />
    </ApolloProvider>
  );
}

export default App;
