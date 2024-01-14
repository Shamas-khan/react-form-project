import React, { useState } from "react";

export const Expenseform = ({ setexpenses }) => {

  const [formvalue,setformvalue ] =useState({
    title:'',
    category:'',
    amount:'',
  })

  const handlesubmit = (e) => {
    e.preventDefault();
    // setexpenses((prevsate)=>[...prevsate,{...getFormData(e.target),id:self.crypto.randomUUID()}])
    // e.target.reset()
    setexpenses(prevstate=>[...prevstate,{...formvalue, id:self.crypto.randomUUID()}])
    setformvalue({
      title: '',
      category: '',
      amount: '',
    });
  };


  // const getFormData = (form) => {
  //   const formDate = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formDate.entries()) {
  //     data[key] = value;
  //   }
  //   return data
  // }
  return (
    <>
      <form className="expense-form" onSubmit={handlesubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={formvalue.title} onChange={e=>setformvalue(prevstate=>({...prevstate,title:e.target.value}))} />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>

          <select id="category" name="category" value={formvalue.category} onChange={e=>setformvalue(prevstate=>({...prevstate,category:e.target.value}))}>
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
          <input id="amount" name="amount" value={formvalue.amount} onChange={e=>setformvalue(prevstate=>({...prevstate,amount:e.target.value}))}/>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};
