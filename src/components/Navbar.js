import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Dialog from './Dialog';

function Navbar() {
  const [show, handleShow] = useState(false); 
  const [openDialog, setOpenDialog] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 570){ 
        handleShow(true);
    } else { 
        handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleMenuClick = () => {
    const scrollOptions = {
      top: 600,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  };

  const handleBalancesClick = () => {
    const scrollOptions = {
      top: 3000,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  };

  const handlePricesClick = () => {
    setOpenDialog(true);
  };

  return (
    <div className={show ? 'navbar nav-black' : 'navbar nav-gradient'}>
        <div className='nav-contents'>
            <div className='nav-pages'>
                <button className='nav-buttons' onClick={handlePricesClick}>Prices</button>
                <button className='nav-buttons' onClick={handleMenuClick}>Menu</button>
                <button className='nav-buttons' onClick={handleBalancesClick}>Balances</button>
                {openDialog && <Dialog open={openDialog} onClose={() => setOpenDialog(false)}/>}
            </div>
        </div>
    </div>
  );
}

export default Navbar;