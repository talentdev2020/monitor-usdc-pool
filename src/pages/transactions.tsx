import React, { useEffect , useState} from 'react';
import { request } from 'graphql-request';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { PAIR_ADDRESS } from "../consts/contractAddress";
import TransactionQuery from "../queries/transactions";
import TransactionsComponent from "../components/transactions";
import { ITransactions } from '../types/transaction';
import { GRAPHQL_ENDPOINT } from "../consts/endpoint";

const variables = {
  allPairs: [PAIR_ADDRESS]
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
    request(GRAPHQL_ENDPOINT, TransactionQuery, variables).then((data: ITransactions) => setTransactions(data))
    .finally(() => setIsLoading(false));
  }
  
  useEffect(() => {
    setIsLoading(true);
    init();
    setInterval(init, 1000 * 60);
  }, [])

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
