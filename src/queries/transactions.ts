export default `query($allPairs: [String]!) {
      mints(first: 20, where: {pair_in: $allPairs}, orderBy: timestamp, orderDirection: desc) {
        transaction {
          id
          timestamp
          __typename
        }
        pair {
          token0 {
            id
            symbol
            __typename
          }
        token1 {
          id
          symbol
          __typename
        }
        __typename
      }
      to
      liquidity
      amount0
      amount1
      amountUSD
      __typename
    }
    burns(first: 20, where: {pair_in: $allPairs}, orderBy: timestamp, orderDirection: desc) {
      transaction {
        id
        timestamp
        __typename
      }
      pair {
        token0 {
          id
          symbol
          __typename
        }
        token1 {
          id
          symbol
          __typename
        }
        __typename
      }
      sender
      liquidity
      amount0
      amount1
      amountUSD
      __typename
    }
    swaps(first: 30, where: {pair_in: $allPairs}, orderBy: timestamp, orderDirection: desc) {
      transaction {
        id
        timestamp
        __typename
      }
      id
      pair {
        token0 {
          id
          symbol
          __typename
        }
        token1 {
          id
          symbol
          __typename
        }
        __typename
      }
      amount0In
      amount0Out
      amount1In
      amount1Out
      amountUSD
      to
      __typename
    }
}`