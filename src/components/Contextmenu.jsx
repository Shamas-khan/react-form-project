import React from "react";

const Contextmenu = ({ position, setposition, setexpenses, rowid,setformvalue,expenses,setEditingRowId}) => {
  if (!position.left) return;

  const contextMenudelte = () => {
    setexpenses((prev) => prev.filter((expense) => expense.id !== rowid));
    setposition({});
  };
 const contextMenuedit=()=>{
  const {title,category,amount} =expenses.find((expense)=>expense.id === rowid)
  setEditingRowId(rowid)
  setformvalue({title,category,amount})
  setposition({})
 }
  return (
    <>
      <div className="context-menu" style={position}>
        <div onClick={contextMenuedit}>Edit</div>
        <div onClick={contextMenudelte}>Delete</div>
      </div>
    </>
  );
};

export default Contextmenu;
