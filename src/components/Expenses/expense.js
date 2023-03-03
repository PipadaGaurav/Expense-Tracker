import React , {useState} from 'react'
import './expense.css';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense=(props) =>{

  const [filteredYear,setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  })

  

  return (
      <div>   
     <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
   
      {/* Dynamic rendereing */}

      {/* <ExpenseItem title={props.item[0].title}  amount={props.item[0].amount} date={props.item[0].date}/> */}
      {/* {console.log(props.item[0].date)} */}
      {/* <ExpenseItem title={props.item[1].title}  amount={props.item[1].amount} date={props.item[1].date}/> */}
      {/* <ExpenseItem title={props.item[2].title}  amount={props.item[2].amount} date={props.item[2].date}/> */}
      {/* <ExpenseItem title={props.item[3].title}  amount={props.item[3].amount} date={props.item[3].date}/> */}
    </Card>
    </div>
  )
}

export default Expense;
