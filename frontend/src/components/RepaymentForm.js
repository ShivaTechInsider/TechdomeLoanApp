import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { submitRepayment } from '../services/repaymentService';

function RepaymentForm() {
  const { id } = useParams();
  const { user } = useAuth();
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitRepayment(id, amount, user.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Repayment</h2>
      <input
        type="number"
        placeholder="Repayment Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Submit Repayment</button>
    </form>
  );
}

export default RepaymentForm;
