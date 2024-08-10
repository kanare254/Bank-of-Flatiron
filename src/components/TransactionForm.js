import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = { ...formData, date: formData.date || new Date().toISOString().split('T')[0] };
    addTransaction(newTransaction);
    saveToLocalStorage(newTransaction);
    setFormData({ description: '', category: '', amount: '', date: '' });
  }

  function saveToLocalStorage(transaction) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        required
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        type="date"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
