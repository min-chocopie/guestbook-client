import { ApolloProvider } from '@apollo/client';

import { client } from './apollo/Apollo';
import { GlobalStyle } from './share/StGlobal';
import VisitLog from './components/visitLog/Main';



function App() {
  return (
    <ApolloProvider client={client}>
      <VisitLog />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
