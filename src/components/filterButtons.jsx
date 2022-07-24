//import {useState} from 'react';
import './css/FilterButtons.css'

function FilterButtons(props){

    const showCompletedTasks=()=>{
        props.showCompletedTasks();
    }
    const showPendingTasks=()=>{
        props.showPendingTasks();
    }
    return(
        <div>
            <button data-testid="pendingTasksBtn" onClick = {showPendingTasks} className={`${props.isShowingPending?'green':'white'}`}>Pending Tasks</button>
            <button data-testid="completedTasksBtn" onClick = {showCompletedTasks} className={`${props.isShowingPending?'white':'green'}`}>Completed Tasks</button>
        </div>
    )
}

export default FilterButtons;