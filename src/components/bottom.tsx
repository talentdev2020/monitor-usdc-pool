import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useWeb3React } from "@web3-react/core";
  
 const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    height: "50px",
    backgroundColor: "#6655f1",
    color: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  walletBalance: {
    fontSize: "12px",
  },
  walletSection: {
    textAlign: 'right'
  },
  address: {
    cursor: "pointer",
    [`&:hover`]: {
      fontSize: "14px"
  },
  }
}));

const Bottom = () => {
  const classes = useStyles();
  const { account } = useWeb3React();

  return (
      <div className={classes.root}>
        <div>
            <span>Ondo Finance</span>
        </div>
        <div>
          {account}
        </div>
      </div>
  )
}

export default Bottom;
