import { render, fireEvent, getByRole } from "@testing-library/react"
import App, { TodoList, TrashButton } from './App'

test('should render App', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
})

test('should render heading', () => {
    const { getByText } = render(<App />)
    const heading = getByText('La Todo Liste');
    expect(heading).toBeVisible()
})

test('should render heading list todo', () => {
    const { getByRole } = render(<App />)
    const heading = getByRole('heading');
    expect(heading).toBeVisible()
})

test('should fire change event', () => {
    const { getByRole } = render(<App />)
    const inputNode = getByRole('textbox');
    fireEvent.change(inputNode, { target: {value: 'new value'}});
    expect(inputNode.value).toBe('new value');
})

test('should fire submit event', () => {
    const { getByRole, getByTestId } = render(<App />)
    const inputNode = getByRole('textbox');
    const formNode = getByTestId('form')
    fireEvent.change(inputNode, { target: {value: 'new value'}});
    fireEvent.submit(formNode);
    expect(inputNode.value).toBe('');
})

test('should render an empty todo list', () => {
    const items = [
        {id: 122, value: 'todo #1', done:false},
        {id: 123, value: 'todo #2', done:false},
    ]
    const { getByRole, rerender } = render(<TodoList items={items}/>);
    const list = getByRole('list')
    expect(list.childNodes).toHaveLength(2)
    rerender(<TodoList items={[]}/>)
    expect(list.childNodes).toHaveLength(0)
})

test('should render trash button if any todo is done', () => {
    const { getByRole } = render(<App />)
    render(<TrashButton isVisible />)
    const button = getByRole('button')
    expect(button).toBeVisible()
})























