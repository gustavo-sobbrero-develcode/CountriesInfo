import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//https://countries.trevorblades.com
//http://172.22.19.24:4000/

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
});

const AppMain = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppMain);
