import axios from 'axios';

export async function submitRepayment(loanId, amount, token) {
  const response = await axios.post(
    `/api/loans/${loanId}/repayments`,
    { amount },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}
