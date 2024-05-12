import  { useState, useEffect } from 'react';
import './App.css'; 
import IncomeModal from './Components/IncomeModal/IncomeModal';
import ExpenseModal from './Components/ExpenseModal/ExpenseModal'
import ExpenseList from './Components/ExpenseList/ExpenseList'
import ExpenseSummary from './Components/ExpenseSummary/ExpenseSummary'
import ExpenseTrends from './Components/ExpenseTrends/ExpenseTrends';

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [incomeModalIsOpen, setIncomeModalIsOpen] = useState(false);
  const [expenseModalIsOpen, setExpenseModalIsOpen] = useState(false);

  useEffect(() => {
    const savedWalletBalance = localStorage.getItem('walletBalance');
    const savedExpenses = localStorage.getItem('expenses');

    if (savedWalletBalance) {
      setWalletBalance(parseFloat(savedWalletBalance));
    }

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('walletBalance', JSON.stringify(walletBalance));
  }, [walletBalance]);

  useEffect(() => {
    
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addIncome = (e) => {
    e.preventDefault();
    if (!amount) return;
    setWalletBalance(walletBalance + parseFloat(amount));
    setIncomeModalIsOpen(false);
    setAmount('');
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount || !date || !category) return;
    const newExpense = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      amount: parseFloat(amount),
      date,
      category,
    };
    if (newExpense.amount <= walletBalance) {
      setExpenses([...expenses, newExpense]);
      setWalletBalance(walletBalance - newExpense.amount);
    } else {
      alert('You cannot spend more than your available wallet balance!');
    }
    setExpenseModalIsOpen(false);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  const deleteExpense = (id) => {
    const deletedExpense = expenses.find((expense) => expense.id === id);
    setWalletBalance(walletBalance + deletedExpense.amount);
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const categories = {};
  expenses.forEach((expense) => {
    if (!categories[expense.category]) {
      categories[expense.category] = 0;
    }
    categories[expense.category] += expense.amount;
  });
  const chartData = Object.keys(categories).map((category) => ({
    name: category,
    value: categories[category],
  }));

  return (
    <div className="App">

      <h1 className='heading'>Expense Tracker</h1>
      
    <div className="cardsContainer">

      <div className="walletCard">
        <h2>Wallet Balance: <span className="balanaceAmount">₹{walletBalance}</span></h2>
        <button onClick={() => setIncomeModalIsOpen(true)}>+Add Income</button>
      </div>

      <div className="expenseCard">
          <h2>Total Expenses: <span className='expenseAmount'>₹{expenses.reduce((total, expense) => total + expense.amount, 0)}</span></h2>
          <button onClick={() => setExpenseModalIsOpen(true)}>+Add Expense</button>
      </div>
         
       <div className="expenseSummary">  
            <ExpenseSummary chartData={chartData} />
        </div>

    </div>
     

      <IncomeModal
        isOpen={incomeModalIsOpen}
        closeModal={() => setIncomeModalIsOpen(false)}
        addIncome={addIncome}
        amount={amount}
        setAmount={setAmount}
      />
      <ExpenseModal
        isOpen={expenseModalIsOpen}
        closeModal={() => setExpenseModalIsOpen(false)}
        addExpense={addExpense}
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        category={category}
        setCategory={setCategory}
      />

      <div className='expenseListTrendContainer'>
        
       <div className="expenseList"> 
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div> 

      <div className="expenseTrens">
        <ExpenseTrends expenses={expenses} />
      </div>

      </div>

      
      
    </div>
  );
}

export default App;
