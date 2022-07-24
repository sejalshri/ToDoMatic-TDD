import { render , screen} from '@testing-library/react';
import Head from './head';

describe('Basic rendering of Head component',()=>{
    test('Rendering of toDo image',()=>{
        render(<Head/>)

        const headImage = screen.getByTestId('todo image');

        expect(headImage).toBeInTheDocument();
    })

    test('Rendering of image caption',()=>{
        render(<Head/>);

        const headText = screen.getByText('ToDoMatic : Add your tasks here');

        expect(headText).toBeInTheDocument();
    })
})