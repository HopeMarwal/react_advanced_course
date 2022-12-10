import { render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe(Counter, () => {
  //test case
  it('Counter displays correct init value', () => {
    const {getByTestId} = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toEqual(0)
  })
  it('increase value by 1', () => {
    const { getByRole, getByTestId} = render(<Counter initialCount={0} />)
    const countValueBefore =  Number(getByTestId('count').textContent)
    const button = getByRole('button', {name: 'Increment by 1'})
    fireEvent.click(button)
    const countValueAfter =  Number(getByTestId('count').textContent)
    expect(countValueAfter).toEqual(1)
  })
})