import { ApolloClient, ApolloProvider, HttpLink } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Loan from "./components/Loan/Loan";
import cache from "./cache";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#3baf57"
    }
  }
});

const link = new HttpLink({
  uri: "https://graphqlzero.almansi.me/api"
});

const client = new ApolloClient({
  cache,
  link
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Loan />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
