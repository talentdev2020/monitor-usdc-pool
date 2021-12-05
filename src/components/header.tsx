import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../connectors";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

declare global {
    interface Window { ethereum: any; }
}
 const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    height: "50px",
    backgroundColor: "#6655f1",
    color: "white"
  }, 
}));

const Header = () => {
  const classes = useStyles();
  const [isConnect, setIsConnect] = useState<boolean>(false);
  const { active, activate, deactivate } = useWeb3React();

  const onConnectWallet = async () => {
    if (active) {
      await deactivate()
    } else {
      setIsConnect(true);

      await activate(injectedConnector);
  
      setIsConnect(false);
    }
   }
  return (
      <div className={classes.root}>
        <div>
            <span>Ondo Finance</span>
        </div>
        
        <div>
            <Button variant="contained" color="secondary" onClick={ () => onConnectWallet()} >
              {
                !active ? <span>
                  CONNECT WALLET  
                    {
                        isConnect && <CircularProgress size="1.5rem"/>
                    }</span>
                    : <span>
                      DISCONNECT 
                     </span>
              }
                
            </Button>
        </div>
      </div>
  )
}

export default Header;
