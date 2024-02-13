import React, { useState, useEffect } from 'react';
import './Balances.css';
import { Paper, Tab, Tabs } from '@mui/material';
import { getBalances, getFriends, settleAllUp, getTotal } from './manageBalances';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function Balances({ balancesUpdated }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [balances, setBalance] = useState([]);
  const friends = getFriends();
  let total = getTotal(value);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchedBalances = getBalances(value);
    setBalance(fetchedBalances);
  }, [value, balancesUpdated]);

  const handleSettleUp = () => {
    const fetchedBalances = settleAllUp(value);
    setBalance(fetchedBalances);
    handleClose();
  };

  return (
    <div className="balances">
      <div className="balances-title-container">
        <h2 className="balances-title">~ Track your Balances ~</h2>
      </div>
      <Paper square className="tab">
        <Tabs
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className="tab-header"
            textColor="#FFFFFF"
            indicatorColor='#FFFFFF'
            style={{backgroundColor: "#542714", color: "white"}}
        >
          {friends.map((friend, index) => (
            <Tab key={index} label={friend} sx={{ borderBottom: value === index ? 2 : 0 }} />
          ))}
          <button className="settle-up-button" onClick={handleButtonClick}>Settle All Up</button>
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Settle All Expenses"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to settle all expenses? 
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{marginBottom: "10px"}}>
            <Button style={{backgroundColor: "#542714" , color: "white"}} onClick={handleClose}>Disagree</Button>
            <Button style={{backgroundColor: "#542714" , color: "white", marginLeft: "20px",  marginRight: "20px"}} onClick={handleSettleUp} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        </Tabs>
          <table className="friends">
          {balances.map((bal, index) => (
            <tr key={index}>
              <td style={{ width: '50%' }}> {bal[0]}</td>
              <td style={{ color: bal[1] < 0 ? 'red' : bal[1] > 0 ? 'green' : ''}}>
                {bal[1] > 0 ? `You are owed ${bal[1]}$` : bal[1] < 0 ? `You owe ${Math.abs(bal[1])}$`: 'You are all settled up'}
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ width: '50%' }}> Total </td>
            <td style={{ color: total < 0 ? 'red' : total > 0 ? 'green' : ''}}>
              {total > 0 ? `You are owed ${total}$` : total < 0 ? `You owe ${Math.abs(total)}$`: 'You are all settled up'}
            </td>
          </tr>
          </table>
      </Paper>
    </div>
  );
}

export default Balances;