import React from "react";

export const Expenseform = ({setexpenses}) => {

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(getFormData(e.target))
    setexpenses((prevsate)=>[...prevsate,{...getFormData(e.target),id:self.crypto.randomUUID()}])
    e.target.reset()

};
const getFormData = (form) => {
  const formDate = new FormData(form);
  const data = {};
  for (const [key, value] of formDate.entries()) {
    data[key] = value;
  }
  return data
}
  return (
    <>
      <form className="expense-form" onSubmit={handlesubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>

          <select id="category" name="category">
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};
