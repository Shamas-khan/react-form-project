import React, { useEffect, useState } from "react";
import { useFilter } from "./hooks/useFilter";
import Contextmenu from "./Contextmenu";
import Decimal from "decimal.js"; 

export const Expensetable = ({ expenses, setexpenses,setformvalue,setEditingRowId }) => {
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
  const [sortcallback,setsortcallback]=useState(()=>()=>{})
  const total = filteredData.reduce(
    (prevValue, curr) => new Decimal(prevValue).plus(curr.amount),
    new Decimal(0)
  ).toString();
  const [position, setposition] = useState({});
  const [rowid, setrowid] = useState('');

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setposition({ left: e.clientX, top: e.clientY });
    setrowid(id);
  };

  const handleClick = () => {
    setposition({});
    
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [position]);

  return (
    <>
      <Contextmenu
        position={position}
        setposition={setposition}
        setexpenses={setexpenses}
        rowid={rowid}
        setformvalue={setformvalue}
        expenses={expenses}
        setEditingRowId={setEditingRowId}
      />
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={()=>setsortcallback(()=>(a,b)=>a.amount - b.amount)}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={()=>setsortcallback(()=>(a,b)=>b.amount - a.amount)}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(sortcallback).map((expense) => (
            <tr key={expense.id} onContextMenu={(e) => handleContextMenu(e, expense.id)}>
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th className="clear-sort"  onClick={()=>setsortcallback(()=>()=>{})}> Clear sort</th>
            <th>Rs: {total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};
