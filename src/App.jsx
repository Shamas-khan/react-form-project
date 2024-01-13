import { useState } from "react";
import { Expenseform } from "./components/Expenseform";
import { Expensetable } from "./components/Expensetable";
import expensedata from './components/expensedata'

function App() {

  const [expenses, setexpenses]=useState(expensedata)

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">

          <Expenseform setexpenses={setexpenses}/>
         <Expensetable expenses={expenses}/>
         
        </div>
      </main>
    </>
  );
}

export default App;
