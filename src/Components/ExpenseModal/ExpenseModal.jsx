// import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './ExpenseModal.css'


const ExpenseModal = ({ isOpen, closeModal, addExpense, title, setTitle, amount, setAmount, date, setDate, category, setCategory }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Expense Modal" className='mainExpenseModal'>
      <h2 className='expenseHeading'>Add Expense</h2>
      <form onSubmit={addExpense} className='expenseModal'>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <button type="submit" className='addExpenseModal'>Add Expense</button>
        <button onClick={closeModal} className='cancelExpenseModal'>Cancel</button>
      </form>
    </Modal>
  );
};


ExpenseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExpenseModal;
