import React, { useEffect , useState} from 'react';
import { request } from 'graphql-request';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { tokenAddress } from "../consts/contractAddress";
import TransactionQuery from "../queries/transactions";
import TransactionsComponent from "../components/transactions";
import { ITransactions } from '../types/transaction';

const endpoint = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2";
const variables = {
  allPairs: [tokenAddress]
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 100px)"
  },
}));

const Transactions = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<ITransactions>({
    mints: [],
    burns: [],
    swaps: []
  });
  const init =  () => {
    setIsLoading(true);
    request(endpoint, TransactionQuery, variables).then((data) => setTransactions(data))
    .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    init();
  }, [])
  console.log({TransactionQuery})
  return (
    <div className={classes.root}>
      {
        isLoading ? <CircularProgress />
        : <TransactionsComponent transactions={transactions}/>
      }
    </div>
  )
}

export default Transactions;
