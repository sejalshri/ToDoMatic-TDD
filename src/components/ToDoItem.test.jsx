import { getByText, render ,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App"

describe('Rendering of elements of component - ToDoIem component on adding an Item using the input field',()=>{
    test('rendering of item that has been added to the list using the inout field',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const Item=screen.getByText("Homework at 4PM");

        expect(Item).toBeInTheDocument();
    })

    test('rendering of edit icon',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const editIcon = screen.getByTestId("editIcon");

        expect(editIcon).toBeInTheDocument();
    })

    test('rendering of delete icon',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const deleteIcon = screen.getByTestId("deleteIcon");

        expect(deleteIcon).toBeInTheDocument();
    })
})



describe('working of edit and delete Icon',()=>{
    test('The item will be removed from pending tasks list once a user clicks  the delete icon',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const Item=screen.getByText("Homework at 4PM");
        const deleteIcon = screen.getByTestId("deleteIcon");
        userEvent.click(deleteIcon);

        expect(Item).not.toBeInTheDocument();

    })
})