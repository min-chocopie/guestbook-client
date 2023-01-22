import { ApolloProvider } from '@apollo/client';

import UserData from './components/user/Main';
import { client } from './apollo/Apollo';


function App() {
  return (
    <ApolloProvider client={client}>
      <UserData />
    </ApolloProvider>
  );
}

export default App;
