import React, { useEffect } from "react";
import Web3 from 'web3';
import './App.css';

async function loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider);
  const network = await web3.eth.net.getNetworkType();
  const acc = await web3.eth.getAccounts();
  console.log(acc)
}

function App() {
  const [account, setAccount] = React.useState({});
  
  React.useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div className="container">
      <h1>Web3 To-Do App</h1>

      <h2>Account:<span></span></h2>
    </div>
  );
}

export default App;
