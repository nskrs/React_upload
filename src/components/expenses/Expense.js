import './ExpenseItem.css'

import Card from '../Card';
import './ExpenseDetails.css'
function ExpenseItem(props) {
    return (
    <di Card='expense-item'>
        <div>{props.date.toISOString()}</div>
    
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>Rs.{props.amount}</div>
        <div className='expense-item__location'>{props.location}</div>
        
</div>
   
      

    );
}

export default ExpenseItem;