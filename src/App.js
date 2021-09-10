import './App.css';
import Home from './pages/Home'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'

function App() {

  const client = new ApolloClient({
    link: new HttpLink({uri: "https://graphql-weather-api.herokuapp.com/"}),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Home/>      
    </ApolloProvider>
   );
}

export default App;
