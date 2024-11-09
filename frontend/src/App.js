import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import LoanRequest from './components/LoanRequest';
import LoanList from './components/LoanList';
import LoanDetails from './components/LoanDetails';
import RepaymentForm from './components/RepaymentForm';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoanList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loans/request" element={<LoanRequest />} />
            <Route path="/loans/:id" element={<LoanDetails />} />
            <Route path="/loans/:id/repay" element={<RepaymentForm />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
