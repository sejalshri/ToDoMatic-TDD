import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AddItemForm from "./AddItemForm"
import App from "../App.js"

describe('Basic rendering of AddItemForm component',()=>{
    test('Rendering of an input field',()=>{
        render(<AddItemForm/>);

        const inputField = screen.getByTestId('input-field');

        expect(inputField).toBeInTheDocument();
    })

    test('Rendering of a plus icon',()=>{
        render(<AddItemForm/>);

        const plusIcon = screen.getByTestId('plus icon')

        expect(plusIcon).toBeInTheDocument();
    })
})

describe('passing a data to the input field',()=>{

    test('typing in the input field',()=>{
        render(<AddItemForm />)

        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
    
        expect(inputField).toHaveValue("Homework at 4PM");
    })
    
    test('clicking plus icon adds an item below',()=>{
        render(<App/>)

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        
        expect(document.getElementById("ToDoItem_component")).toBeInTheDocument();
    })
})