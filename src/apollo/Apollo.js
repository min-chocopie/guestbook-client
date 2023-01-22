import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
})
