import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { requestLoan } from '../services/loanService';

function LoanRequest() {
  const [loanData, setLoanData] = useState({ amount: '', term: '' });
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestLoan(loanData, user.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request a Loan</h2>
      <input
        type="number"
        placeholder="Amount"
        value={loanData.amount}
        onChange={(e) => setLoanData({ ...loanData, amount: e.target.value })}
      />
      <input
        type="number"
        placeholder="Term (weeks)"
        value={loanData.term}
        onChange={(e) => setLoanData({ ...loanData, term: e.target.value })}
      />
      <button type="submit">Submit Loan Request</button>
    </form>
  );
}

export default LoanRequest;
