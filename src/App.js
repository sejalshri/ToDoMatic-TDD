import {useState} from 'react'
import Head from './components/Head';
import AddItemForm from './components/AddItemForm';
import ToDoItem from './components/ToDoItem';
import FilterButtons from './components/filterButtons'
import './index.css'
function App() {

    const [pending,setPending]=useState([]);
    const [completed,setCompleted]=useState([]);
    const [item,setItem]=useState([]);
    const[isShowingPending,setIsShowingPending]=useState(true);

    const onClickPlusIcon = (enteredData) => {
        setIsShowingPending(true);
        setPending([...pending,enteredData]);
        setItem([...pending,enteredData]);
    }

    const onClickDeleteIcon = (element,deletedId) => {
        setCompleted([...completed,item[deletedId]]);
        setPending(pending.filter((elem,index)=>{
            return index!==deletedId;
        }))
        setItem(item.filter((elem,index)=>{
            return index!==deletedId;
        }))
    }

    const onClickEditIcon = (editedId,newItem) => {
        let newArr = [];
        for(var i=0;i<item.length;i++){
            if(i===editedId){
                newArr.push(newItem);
            }
            else{
                newArr.push(item[i]);
            }
        }
        setItem([...newArr]);
    }

    const onClickShowPending = ()=>{
        setIsShowingPending(true);
        setItem([...pending]);
    }

    const onClickShowCompleted = ()=>{
        setIsShowingPending(false);
        setItem([...completed]);
    }

    return (
        <div>
            <Head/>
            <AddItemForm
                saveItem = {onClickPlusIcon}
            />
            <FilterButtons
                showPendingTasks = {onClickShowPending}
                showCompletedTasks = {onClickShowCompleted}
                isShowingPending = {isShowingPending}
            />
            <ToDoItem
                item = {item}
                deleteItem = {onClickDeleteIcon}
                editItem = {onClickEditIcon}
                isShowingPending = {isShowingPending}
            />
        </div>
    );
}

export default App;
