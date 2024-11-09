import axios from 'axios';

export async function requestLoan(loanData, token) {
  const response = await axios.post('/api/loans', loanData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function getUserLoans(token) {
  const response = await axios.get('/api/loans', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function getLoanDetails(loanId, token) {
  const response = await axios.get(`/api/loans/${loanId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function getPendingLoans(token) {
  const response = await axios.get('/api/loans/pending', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function approveLoan(loanId, token) {
  const response = await axios.put(`/api/loans/${loanId}/approve`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}
