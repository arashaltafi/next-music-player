import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: 'Bearer your-auth-token',
            theme: 'dark',
            token: 'arash123'
        }
    });

    return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
