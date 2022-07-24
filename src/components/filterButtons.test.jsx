import { render ,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Rendering of filter buttons i.e pending task and completed tasks button',()=>{
    test('Rendering of pending tasks button',()=>{
        render(<App />)

        const pendingTasksButton = screen.getByTestId('pendingTasksBtn');

        expect(pendingTasksButton).toBeInTheDocument();
    })

    test('Rendering of completed tasks button',()=>{
        render(<App />)

        const completedTasksButton = screen.getByTestId('completedTasksBtn');

        expect(completedTasksButton).toBeInTheDocument();
    })
})

describe('Working of filter buttons',()=>{
    test('list of pending tasks to be shown if pendingTasks button is active',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const Item=screen.getByText("Homework at 4PM");

        expect(Item).toBeInTheDocument();
    })

    test('list of completed tasks to be shown if completedTasks button is active',()=>{
        render(<App />);

        const plusIcon = screen.getByTestId('plus icon');
        const inputField = screen.getByTestId('input-field');
        userEvent.type(inputField,"Homework at 4PM");
        userEvent.click(plusIcon);
        const deleteIcon = screen.getByTestId("deleteIcon");
        userEvent.click(deleteIcon);
        const completedTasksButton = screen.getByTestId('completedTasksBtn');
        userEvent.click(completedTasksButton);
        const Item=screen.getByText("Homework at 4PM");

        expect(Item).toBeInTheDocument();

    })
})