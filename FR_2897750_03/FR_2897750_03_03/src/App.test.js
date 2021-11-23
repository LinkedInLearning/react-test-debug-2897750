import { render, fireEvent } from "@testing-library/react";
import App, { TodoList, TrashButton } from "./App";

// FR_2897750_02_02
test('should render App', () => {
    const { container} = render(<App />)
    expect(container).toBeInTheDocument()
})

test('should render heading', () => {
    const { getByRole } = render(<App />)
  const heading = getByRole('heading');
  expect(heading).toBeVisible();
})

// FR_2897750_02_03
test('should render heading Todo Liste', () => {
  const {getByText} = render(<App />)
  const heading = getByText('La Todo Liste');
  expect(heading).toBeVisible();
})

// FR_2897750_02_04
test('should fire change event', () => {
    const {getByRole} = render(<App />)
    const inputNode = getByRole('textbox');
    fireEvent.change(inputNode, { target: { value: 'new value'}})
    expect(inputNode.value).toBe('new value')
})

test('should fire submit event and reset value', () => {
    const {getByRole, getByTestId} = render(<App />)
    const inputNode = getByRole('textbox');
    const formNode = getByTestId('form');
    fireEvent.change(inputNode, { target: { value: 'new value'}})
    fireEvent.submit(formNode)
    expect(inputNode.value).toBe('')
})

// FR_2897750_02_05
test('should render an empty list', () => {
  const items = [
    {id: 122, value: 'todo #1', done: false}, 
    {id: 123, value: 'todo #2', done: false}
  ]
  const { getByRole, rerender } = render(<TodoList items={items} />)
  const list = getByRole('list');
  expect(list.childNodes).toHaveLength(2)
  rerender(<TodoList items={[]} />)
  expect(list.childNodes).toHaveLength(0)
})

test('should render the trash button if a todo is done', () => {
  const props = [
    {id: 122, value: 'todo #1', done: false}, 
    {id: 123, value: 'todo #2', done: false}
  ]
  const items = props.filter(item => item.done)
  render(<TrashButton isVisible={!!items} />)
  const { getByRole } = render(<App />)
  
  const button = getByRole('button')
  expect(button).toBeVisible()
})