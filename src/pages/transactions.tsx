import React, { useState } from 'react';
import { isAddress } from "@ethersproject/address";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DaiContractAddress } from "../consts/contractAddress";
import ABI from "../consts/tokenABI.json"  ;

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    height: "calc(100vh - 100px)"
  },
  inputAddress: {
    margin: "15px 0",
    width: "400px"
  },
  inputAmount: {
    width: "400px",
    marginBottom: "5px"
  },
  button: {
    width: "200px"
  },
  balance: {
    color: "#6655f1",
    paddingLeft: "20px"
  }
}));

const Transfer = () => {
  const classes = useStyles();
  const { account, library } = useWeb3React();

  return (
    <div className={classes.root}>
      Transfer
    </div>
  )
}

export default Transfer;
