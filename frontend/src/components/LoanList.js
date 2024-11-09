import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserLoans } from '../services/loanService';

function LoanList() {
  const { user } = useAuth();
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const data = await getUserLoans(user.token);
      setLoans(data);
    };
    fetchLoans();
  }, [user]);

  return (
    <div>
      <h2>Your Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            {loan.amount} - {loan.status} - Term: {loan.term}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoanList;
