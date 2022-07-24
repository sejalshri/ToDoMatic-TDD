import React,{ useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './css/AddItemForm.css'

function AddItemForm(props){

    const[data,setData] = useState('');

    const addItem = () =>{
        if(data!==''){
            props.saveItem(data);
        }
        setData('');
    }

    return(
        <div className="input-icons">
                <input
                    placeholder="Add new task"
                    className="input-field"
                    type="text"
                    value = {data}
                    onChange = {(e) => setData(e.target.value)}
                    data-testid="input-field"
                />
                <i
                    className="fa fa-plus icon"
                    onClick = {addItem}
                    data-testid='plus icon'
                ></i>
        </div>
    )
}

export default AddItemForm;