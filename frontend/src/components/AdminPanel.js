import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPendingLoans, approveLoan } from '../services/loanService';

function AdminPanel() {
  const { user } = useAuth();
  const [pendingLoans, setPendingLoans] = useState([]);

  useEffect(() => {
    const fetchPendingLoans = async () => {
      const data = await getPendingLoans(user.token);
      setPendingLoans(data);
    };
    fetchPendingLoans();
  }, [user]);

  const handleApprove = async (loanId) => {
    await approveLoan(loanId, user.token);
    setPendingLoans(pendingLoans.filter((loan) => loan.id !== loanId));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {pendingLoans.map((loan) => (
          <li key={loan.id}>
            {loan.amount} - {loan.status}
            <button onClick={() => handleApprove(loan.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
