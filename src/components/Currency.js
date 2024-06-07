import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const [action, setAction] = useState('');

    const submitEvent2 = (val) => {

        if(action === "Change_curr") {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            });
        }
    };

    return (
        <div className='change_currency'>
            <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            {/* <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label> */}
            </div>
            <select className="custom-select" id="inputGroupSelect02" onChange={(event) => 
                {
                setAction("Change_curr");
                submitEvent2(event.target.value);
                }
                }>
                    <option defaultValue>Currency (£ Pound)</option>
                    <option value="£" name="Change_curr">£ Pound</option>
                    <option value="$" name="Change_curr">$ Dollar</option>
                    <option value="€" name="Change_curr">€ Euro</option>
                    <option value="₹" name="Change_curr">₹ Rupee</option>
            </select>

            <div className='currency display'>
                <span>Currency is: {currency}</span>
            </div>

    </div>
    );
};
export default Currency;