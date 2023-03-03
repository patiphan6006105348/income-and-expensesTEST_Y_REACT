import Transaction from "./componnents/Transaction";
import FormComponent from "./componnents/FormComponent";
import './App.css'
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportCompoent from "./componnents/ReportCompoent";





function App() {
  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
  const [items,setItem] = useState([])
    const onAddNewItem = (newItem)=>{
      setItem((prevItem)=>{
        return  [newItem,...prevItem]
      })
    }

  return (
          <DataContext.Provider value={
            {
              income  : 50000,
              expense : -8000
            }
          }>
            <div className="container">
            <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>

            <ReportCompoent/>

            <FormComponent onAddItem={onAddNewItem}/>
            <Transaction item = {items}/>
          </div>
          </DataContext.Provider>
  );
}

export default App;

