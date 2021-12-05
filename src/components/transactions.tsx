import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Transaction from "./transaction";
import { tokenAddress } from "../consts/contractAddress";
import { ITableTransaction, ITransactions } from '../types/transaction';

const useStyles = makeStyles(theme => ({
   
}));

const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}
interface IProps {
    transactions: ITransactions
}
const Transactions = (props: IProps) => {
    const [value, setValue] = React.useState<string>("swap");
    const [mintTransactions, setMintTransactions] = useState<ITableTransaction[]>([]);
    const [burnTransactions, setBurnTransactions] = useState<ITableTransaction[]>([]);
    const [swapTransactions, setSwapTransactions] = useState<ITableTransaction[]>([]);
    const [allTransactions, setAllTransactions] = useState<ITableTransaction[]>([]);

    useEffect(() => {
        const mints = props.transactions.mints.map(mint => ({
            totalValue: mint.amountUSD,
            tokenAmount0: mint.amount0,
            tokenAmount1: mint.amount1,
            account: mint.to,
            time: mint.transaction.timestamp
        }))
        const burns = props.transactions.burns.map(burn => ({
            totalValue: burn.amountUSD,
            tokenAmount0: burn.amount0,
            tokenAmount1: burn.amount1,
            account: burn.sender,
            time: burn.transaction.timestamp
        }))
        const swaps = props.transactions.swaps.map(mint => ({
            totalValue: mint.amountUSD,
            tokenAmount0: mint.amount0Out,
            tokenAmount1: mint.amount1In,
            account: mint.to,
            time: mint.transaction.timestamp
        }))
        const allTransactions = mints.concat(burns, swaps);
        setMintTransactions(mints);
        setBurnTransactions(burns);
        setSwapTransactions(swaps);
        setAllTransactions(allTransactions);
    }, [props.transactions])
    const handleChange = (event: any, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" value="all" />
            <Tab label="Swaps" value="swap" />
            <Tab label="Adds" value="add"/>
            <Tab label="Removes" value="remove"/>
          </Tabs>
        </Box>
        <TabPanel value={value} index="all">
            <Transaction transactions={allTransactions} />
        </TabPanel>
        <TabPanel value={value} index="swap">
            <Transaction transactions={swapTransactions} />
        </TabPanel>
        <TabPanel value={value} index="add">
            <Transaction transactions={mintTransactions} />
        </TabPanel>
        <TabPanel value={value} index="remove">
        <Transaction transactions={burnTransactions} />
        </TabPanel>
      </Box>
    );
};

export default Transactions;