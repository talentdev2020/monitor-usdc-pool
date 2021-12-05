import React, { useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import { request, gql } from 'graphql-request';
import { makeStyles } from "@material-ui/core/styles";
import { tokenAddress } from "../consts/contractAddress";
import TransactionQuery from "../queries/transactions";
import TransactionsComponent from "../components/transactions";

const endpoint = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2";
const variables = {
  allPairs: [tokenAddress]
}

const useStyles = makeStyles(theme => ({
  root: {
    
  },
}));

const Transactions = () => {
  const classes = useStyles();
 
  const init =  () => {
    request(endpoint, TransactionQuery, variables).then((data) => console.log(data))
  }
  useEffect(() => {
    init();
  }, [])
  console.log({TransactionQuery})
  return (
    <div className={classes.root}>
      <TransactionsComponent />
    </div>
  )
}

export default Transactions;
