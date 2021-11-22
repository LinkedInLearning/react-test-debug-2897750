import { render } from "@testing-library/react"
import App from './App'

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

