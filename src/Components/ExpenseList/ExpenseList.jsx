
// import React from 'react';
import { MdDelete } from 'react-icons/md';
import './ExpenseList.css';
import PropTypes from 'prop-types'


function ExpenseList({ expenses, deleteExpense }) {
  return (

    <div>
    <h2 className='expenseListHeading'>Expenses List</h2>

    <div className="expense-list">
      
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title} - ₹{expense.amount} - {expense.date}</span>
            <button onClick={() => deleteExpense(expense.id)} className='dltBtn'>
              <MdDelete />
            </button>
          </li>
        ))}
      </ul> 
    </div>
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
