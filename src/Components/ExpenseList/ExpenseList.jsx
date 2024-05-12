
// import React from 'react';
import { MdDelete } from 'react-icons/md';
import './ExpenseList.css';
import PropTypes from 'prop-types'


function ExpenseList({ expenses, deleteExpense }) {
  return (

    <div>
    <h2 className='expenseListHeading'>Expenses List</h2>

    <div className="expense-list">
      
    <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense) => (
        <tr key={expense.id}>
          <td>{expense.title}</td>
          <td>₹{expense.amount}</td>
          <td>{expense.date}</td>
          <td>
            <button onClick={() => deleteExpense(expense.id)} className='dltBtn'>
              <MdDelete />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
