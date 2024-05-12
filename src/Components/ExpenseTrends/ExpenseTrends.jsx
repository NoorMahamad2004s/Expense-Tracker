
// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './ExpenseTrends.css'; 
import PropTypes from 'prop-types'

function ExpenseTrends({ expenses }) {
  return (
    <div>
    <h2>Top Expenses</h2>
    <div className="expense-trends">
      
      <BarChart width={600} height={300} data={expenses}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
    </div>
  );
}

ExpenseTrends.propTypes = {
    expenses: PropTypes.array.isRequired,
  };
  


export default ExpenseTrends;
