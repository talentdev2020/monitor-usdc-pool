import React, { useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

import { tokenAddress } from "../consts/contractAddress";

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
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

const Transactions = () => {
    const [value, setValue] = React.useState<string>("swap");
  
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
        <TabPanel value={value} index="swap">
        
        </TabPanel>
        <TabPanel value={value} index="swap">

        </TabPanel>
        <TabPanel value={value} index="add">
         
        </TabPanel>
        <TabPanel value={value} index="remove">
         
        </TabPanel>
      </Box>
    );
};

export default Transactions;