import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateDrawer from './sidebar/drawer';
import CreateUiComponent from './playerUi/playerComponent'
import ScrollToTopOnMount from './scrollTop';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CreateDrawer/>
      <CreateUiComponent/>
      <ScrollToTopOnMount />
    </ApolloProvider>
  );
}

export default App;
