import { useState, useEffect } from 'react';

const WalletBalance = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [balance, setBalance] = useState(20); 

  // Function to toggle balance visibility
  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  // Counting animation
  useEffect(() => {
    if (balance < 68000) {
      const interval = setInterval(() => {
        setBalance((prevBalance) => prevBalance + 1);
      }, 10); 
      return () => clearInterval(interval);
    }
  }, [balance]);

  return (
    <div className="wallet-balance">
      {/* Top Section */}
      <div className="wallet-header">
        <h3>Wallet Balance</h3>
        <p className="hide-action">Click the eye to hide balance.</p>
        <div className="naira-sign">₦</div>
      </div>

      {/* Balance Section */}
      <div className="balance-content">
        <span className="balance-amount">
          {balanceVisible ? `N ${balance.toLocaleString()}` : '********'}
        </span>
        <button className="toggle-visibility" onClick={toggleBalanceVisibility}>
          👁️
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="wallet-actions">
        <button className="action-button fund-wallet">
          <span>+</span> Fund Wallet
        </button>
        <button className="action-button withdraw">
          <span>➖</span> Withdraw
        </button>
        <button className="action-button dots">...</button>
      </div>
    </div>
  );
};

export default WalletBalance;


