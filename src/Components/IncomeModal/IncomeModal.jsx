// import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';



const IncomeModal = ({ isOpen, closeModal, addIncome, amount, setAmount }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Income Modal">
      <h2>Add Income</h2>
      <form onSubmit={addIncome}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Income Amount"
          required
        />
        <button type="submit">Add Income</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
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
