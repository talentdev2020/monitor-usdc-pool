import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ITableTransaction } from "../types/transaction";

const useStyles = makeStyles(theme => ({
    table: {
      minWidth: 650,
      height: "calc(100vh - 200px)"
    },
}));
interface IProps {
    transactions: ITableTransaction[]
}
const Transaction = (props: IProps) => {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Total Value</TableCell>
            <TableCell align="right">Token Amont</TableCell>
            <TableCell align="right">Token Amount</TableCell>
            <TableCell align="right">Account</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactions?.map((row, index) => (
            <TableRow key={`${row.timestamp}_${index}`}>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">${row.totalValue}</TableCell>
              <TableCell align="right">{row.tokenAmount0}</TableCell>
              <TableCell align="right">{row.tokenAmount1}</TableCell>
              <TableCell align="right">{row.account}</TableCell>
              <TableCell align="right">{row.passedTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 );
};

export default Transaction;