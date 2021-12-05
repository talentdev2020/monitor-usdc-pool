interface ITransaction {
    id: string;
    timestamp: number;
    __typename: string
}
interface IPair {
    token0: {
        id: string;
        symbol: string;
        __typename: string;
    }
    token1: {
        id: string;
        symbol: string;
        __typename: string;
    }
    to: string;
    liquidity: number;
    amount0: number;
    amount1: number;
    amountUSD: number;
    __typename: string;
}
export interface ITransactions {
    mints :{
        transaction: ITransaction
        pair: IPair
        to: string;
        liquidity: number;
        amount0: number;
        amount1: number;
        amountUSD: number;
        __typename: string
    }
    burns: {
      transaction: ITransaction;
      pair: IPair;
      sender: string;
      liquidity: number;
      amount0: number;
      amount1: number;
      amountUSD: number;
      __typename: string;
    }
    swaps: {
      transaction: ITransaction;
      pair: IPair;
      amount0In: number;
      amount0Out: number;
      amount1In: number;
      amount1Out: number;
      amountUSD: number;
      to: string;
      __typename: string;
    }
}