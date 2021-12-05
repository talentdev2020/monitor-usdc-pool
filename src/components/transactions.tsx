import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Transaction from "./transaction";
import { tokenAddress } from "../consts/contractAddress";
import { ITableTransaction, ITransactions } from '../types/transaction';
import { fixedCurrency, diffTime } from "../utils/format";

const useStyles = makeStyles(theme => ({
   tabSection: {
       height: "100px"
   }
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
    const [value, setValue] = React.useState<string>("all");
    const [mintTransactions, setMintTransactions] = useState<ITableTransaction[]>([]);
    const [burnTransactions, setBurnTransactions] = useState<ITableTransaction[]>([]);
    const [swapTransactions, setSwapTransactions] = useState<ITableTransaction[]>([]);
    const [allTransactions, setAllTransactions] = useState<ITableTransaction[]>([]);

    useEffect(() => {
        const mints = props.transactions.mints.map(mint => ({
            type: "Add",
            totalValue: fixedCurrency(mint.amountUSD, 2),
            tokenAmount0: fixedCurrency(mint.amount1, 6) + "ETH",
            tokenAmount1: fixedCurrency(mint.amount0, 4) + "USDC",
            account: mint.to,
            passedTime: diffTime(mint.transaction.timestamp),
            timestamp: mint.transaction.timestamp,
        }))
        const burns = props.transactions.burns.map(burn => ({
            type: "Remove",
            totalValue: fixedCurrency(burn.amountUSD, 2),
            tokenAmount0: fixedCurrency(burn.amount1, 6) + "ETH",
            tokenAmount1: fixedCurrency(burn.amount0, 4) + "USDC",
            account: burn.sender,
            passedTime: diffTime(burn.transaction.timestamp),
            timestamp: burn.transaction.timestamp
        }))
        const swaps = props.transactions.swaps.map(swap => ({
            type: swap.amount0In === "0" ? "Swap USDC for ETH" : "Swap ETH for USDC",
            totalValue: fixedCurrency(swap.amountUSD, 2),
            tokenAmount0: swap.amount0In !== "0" ? `${fixedCurrency(swap.amount0In, 4)} USDC` : `${fixedCurrency(swap.amount1In, 6)} ETH`,
            tokenAmount1: swap.amount1Out !== "0" ? `${fixedCurrency(swap.amount1Out, 6)} ETH` : `${fixedCurrency(swap.amount0Out, 4)} USDC`,
            account: swap.to,
            passedTime: diffTime(swap.transaction.timestamp),
            timestamp: swap.transaction.timestamp
        }))

        const allTransactions = mints.concat(burns, swaps);
        allTransactions.sort((a,b) => (parseInt(b.timestamp) - parseInt(a.timestamp)));

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
        <TabPanel value={value} index="all" >
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