import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { changePrices } from './manageBalances';

export default function FormDialog({ open, onClose}) {

  const [menuPrices, setMenuPrices] = React.useState({
    "Cappuccino": "",
    "Black Coffee": "",
    "Hot Chocolate": "",
    "Cold Coffee": "",
    "Machiato": "",
    "Americano": "",
    "Latte": ""
  });

  const handleChange = (e, itemName) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setMenuPrices({
        ...menuPrices,
        [itemName]: value
      });
    }
  };

  const handleSubmit = () => {
    changePrices(menuPrices);
    window.location.reload();
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Set Menu Prices</DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center">
            <div style={{ marginTop: '10px' }}>
              {Object.entries(menuPrices).map(([itemName, value], index) => (
                <TextField
                  key={index}
                  required
                  id={`outlined-required-${index}`}
                  label={itemName}
                  value={value}
                  onChange={(e) => handleChange(e, itemName)}
                  style={{ marginLeft: index % 2 === 1 ? '50px' : undefined, marginTop: '10px' }}
                />
              ))}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button style={{ backgroundColor: "#542714", color: "white" }} onClick={onClose}>Cancel</Button>
          <Button
            style={{ backgroundColor: "#542714", color: "white", margin: "20px" }}
            onClick={handleSubmit}
            disabled={Object.values(menuPrices).some(price => price === "")}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}