interface ITransaction {
    id: string;
    timestamp: string;
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

export interface IMinTransaction {
    transaction: ITransaction
    pair: IPair
    to: string;
    liquidity: number;
    amount0: number;
    amount1: number;
    amountUSD: number;
    __typename: string
}

export interface IBurnTrnasaction {
    transaction: ITransaction;
    pair: IPair;
    sender: string;
    liquidity: number;
    amount0: number;
    amount1: number;
    amountUSD: number;
    __typename: string; 
}

export interface ISwapTransaction {
    transaction: ITransaction;
    pair: IPair;
    amount0In: string;
    amount0Out: string;
    amount1In: string;
    amount1Out: string;
    amountUSD: string;
    to: string;
    __typename: string;
}
export interface ITransactions {
    mints: IMinTransaction[];
    burns: IBurnTrnasaction[];
    swaps: ISwapTransaction[];
}

export interface ITableTransaction {
    type: string;
    totalValue: string;
    tokenAmount0: string;
    tokenAmount1: string;
    account: string;
    time: string;
}