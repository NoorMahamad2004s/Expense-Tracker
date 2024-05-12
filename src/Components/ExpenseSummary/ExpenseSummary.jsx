// import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './ExpenseSummary.css'; 
import PropTypes from 'prop-types';


function ExpenseSummary({ chartData }) {
  return (
    <div className="expense-summary">
     
      <PieChart width={250} height={225}>
        <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

ExpenseSummary.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default ExpenseSummary;
