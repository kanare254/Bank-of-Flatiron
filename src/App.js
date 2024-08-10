import React, { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));

    const localTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (localTransactions) {
      setTransactions(prevTransactions => [...prevTransactions, ...localTransactions]);
    }
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Recent Transactions</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
