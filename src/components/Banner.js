import React, { useState } from 'react';
import './Banner.css';
import Coffee from '../Coffee.png';
import { choosePayer, makePayment } from './manageBalances';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function Banner({ onUpdateBalances }) {
  const [open, setOpen] = useState(false);
  const [bannerTitle, setBannerTitle] = useState(`Who's turn is it to pay?`);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    const payer = choosePayer();
    makePayment();
    setBannerTitle(`${payer} will pay today`);
    setOpen(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
    onUpdateBalances(); 
  };

  return (
    <div className='screen'>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://wallpapers.com/images/featured/coffee-shop-02x9a49rdcr5c18i.jpg")`,
          backgroundPosition: 'center center',
          left: 0,
          top: 0
        }}
      >
        <img className='banner-logo' src={Coffee} alt='coffee shop aesthetic' />
        <h1 className='banner-title'>{bannerTitle}</h1>
        <button className='banner-button' onClick={handleButtonClick}>
          Place an Order
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Place An Order"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to place your regular coffee order? 
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{marginBottom: "10px"}}>
            <Button style={{backgroundColor: "#542714" , color: "white"}} onClick={handleClose}>Disagree</Button>
            <Button style={{backgroundColor: "#542714" , color: "white", marginLeft: "20px",  marginRight: "20px"}} onClick={handleAgree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        {showAlert && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success"  style={{ position: 'fixed', top: '60px', right: '10px', zIndex: '1000' }}>
          Here is a confirmation that your order was successful.
        </Alert>}
      </header>
    </div>
  );
}

export default Banner;
