import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, expenses} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [action, setAction] = useState('');

    const submitEvent = (val) => {

            if(action === "set_budget") {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: val,
                });
            }
        };

    const handleBudgetChange = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);

        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setNewBudget(event.target.value);

        setAction("set_budget");
        submitEvent(event.target.value);
    }
    return (
        <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
        <span>Budget: {currency}{budget}</span>
        <input
            type="number"
            step="10"
            value={newBudget}
            onChange={handleBudgetChange}
            style={{ marginLeft: '10px' }}
        />
        </div>
    );
};
export default Budget;
