import React from "react";

// import "./App.css";

import { client } from "./Client";

import { ApolloProvider } from '@apollo/client';

import ExchangeRatesPage from './ExchangeRatesPage';


function Fourth() {

  return (

    <ApolloProvider client={client}>

      <div className="App">

        <ExchangeRatesPage />

      </div>

    </ApolloProvider>

  );

}


export default Fourth;