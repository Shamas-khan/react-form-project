import React, { useEffect, useState } from "react";
import Input from "./Input";
import SelectMenu from "./SelectMenu";

export const Expenseform = ({ setexpenses }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formvalue, setformvalue] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [error, setError] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 3, message: "Title should be at least 3 characters long" },
    ],
    category: [{ required: true, message: "Please select category" }],
    amount: [{ required: true, message: "Please enter amount" },
    { isnumber: true, message: "amount must be in numeric values" }],
  };
  
  const validate = (formdata) => {
    const errorData = {};
 

    Object.entries(formdata).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true
        }
        
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true
        }
        if (rule.isnumber && (!value || isNaN(parseFloat(value)) || !isFinite(value))) {
          errorData[key] = rule.message;
          return true
        }
      });
    });

    setError(errorData);
    return errorData;
  };

  useEffect(() => {
    if (isSubmitted) {
      validate(formvalue);
    }
  }, [formvalue, isSubmitted]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validateResult = validate(formvalue);
    if (Object.keys(validateResult).length !== 0) return;

    setexpenses((prevstate) => [
      ...prevstate,
      { ...formvalue, id: self.crypto.randomUUID() },
    ]);

    setformvalue({
      title: "",
      category: "",
      amount: "",
    });
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalue((prevstate) => ({ ...prevstate, [name]: value }));
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };


  return (
    <>
      <form className="expense-form" onSubmit={handlesubmit}>
        <Input
          name="title"
          label={"Title"}
          value={formvalue.title}
          onchange={handleChange}
          error={error.title}
        />

        <SelectMenu
          name="category"
          id={"category"}
          label={"Category"}
          value={formvalue.category}
          onchange={handleChange}
          error={error.category}
          byDefault={"Select Category"}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        />

        <Input
          name="amount"
          id={"amount"}
          label={"Amount"}
          value={formvalue.amount}
          onchange={handleChange}
          error={error.amount}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};
