import { useState } from "react";
import { Expenseform } from "./components/Expenseform";
import { Expensetable } from "./components/Expensetable";
import expensedata from "./components/expensedata";

function App() {
  const [expenses, setexpenses] = useState(expensedata);
  const [editingRowId, setEditingRowId] = useState("");
  const [formvalue, setformvalue] = useState({
    title: "",
    category: "",
    amount: "",
  });

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Expenseform
            setexpenses={setexpenses}
            formvalue={formvalue}
            setformvalue={setformvalue}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />
          <Expensetable
            expenses={expenses}
            setexpenses={setexpenses}
            setformvalue={setformvalue}
            setEditingRowId={setEditingRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
