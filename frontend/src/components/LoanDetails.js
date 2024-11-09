import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getLoanDetails } from '../services/loanService';

function LoanDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      const data = await getLoanDetails(id, user.token);
      setLoan(data);
    };
    fetchLoanDetails();
  }, [id, user]);

  return loan ? (
    <div>
      <h2>Loan Details</h2>
      <p>Amount: {loan.amount}</p>
      <p>Status: {loan.status}</p>
      <p>Term: {loan.term}</p>
      <h3>Repayments</h3>
      <ul>
        {loan.repayments.map((repayment) => (
          <li key={repayment.id}>{repayment.amount} - {repayment.status}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default LoanDetails;
