import React, {useState} from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import Balances from './Balances';

function HomeScreen() {
  const [balancesUpdated, setBalancesUpdated] = useState(false);

  const handleUpdateBalances = () => {
    setBalancesUpdated(!balancesUpdated);
  };

  return (
    <div className="homescreen">
        <Navbar /> 
        <Banner onUpdateBalances={handleUpdateBalances} />
        <Row />
        <Balances balancesUpdated={balancesUpdated} />
    </div>
  );
}

export default HomeScreen;
