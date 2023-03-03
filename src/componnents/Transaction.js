import Item from "./Item";
import './Transaction.css'
import { useContext } from "react";
import DataContext from "../data/DataContext";
import NewData from "./NewData";

const Transaction = (props)=>{
  const {income , expense } = useContext(DataContext)
  const {item} = props

  
    return (
      <div>
        
      <NewData/>
        <ul className="item-list">
        {item.map((element)=>{
              return <Item {...element} key = {element.id}/>
         })}
      </ul>
      <div>
          <p>รายรับ  : {income}</p>
          <p>รายจ่าย : {expense}</p>
        </div>

      </div>
    );
}
export default Transaction
