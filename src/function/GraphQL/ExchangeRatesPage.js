import React from "react";

import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query  {
    medications {

    }
  }
`;

        // aceInhibitors {
        // name
        // strength

function ExchangeRatePage() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRatePage;
