// import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './IncomeModal.css'



const IncomeModal = ({ isOpen, closeModal, addIncome, amount, setAmount }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Income Modal" className='mainIncomeModal'>
    <div className="incomeModal">
       <h2 className='incomeModalHeading'>Add Income</h2>
      <form onSubmit={addIncome} className='incomeForm'>
        
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Income Amount"
          required
        />
        <button type="submit" className='addIncomeBtn'>Add Income</button>
        <button onClick={closeModal} className='cancelBtnIncome'>Cancel</button>
      </form>
      </div>
    </Modal>
  );
};


IncomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addIncome: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired
};


export default IncomeModal;
