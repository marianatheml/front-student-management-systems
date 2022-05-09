import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from './components/Navbar/Navbar';
import StudentsList from './components/StudentsList/StudentsList'

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/api",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <StudentsList />
      </ApolloProvider>
    </>
  );
}

export default App;
