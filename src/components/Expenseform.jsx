import React, { useState } from "react";

export const Expenseform = ({ setexpenses }) => {
  const [formvalue, setformvalue] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [error, setError] = useState({});

  const validate = (formdata) => {
    const errorData = {};
    if (!formdata.title) {
      errorData.title = "title is required";
    }
    if (!formdata.category) {
      errorData.category = "category is required";
    }
    if (!formdata.amount) {
      errorData.amount = "amount is required";
    }
  
    setError(errorData);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(formvalue); // Corrected from validate(expense)
    if (Object.keys(validateResult).length) return;

    setexpenses((prevstate) => [
      ...prevstate,
      { ...formvalue, id: self.crypto.randomUUID() },
    ]);

    setformvalue({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalue((prevstate) => ({ ...prevstate, [name]: value }));
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <>
      <form className="expense-form" onSubmit={handlesubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formvalue.title}
            onChange={handleChange}
          />
          <p className="error">{error.title}</p>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formvalue.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
          <p className="error">{error.category}</p>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={formvalue.amount}
            onChange={handleChange}
          />
          <p className="error">{error.amount}</p>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};
