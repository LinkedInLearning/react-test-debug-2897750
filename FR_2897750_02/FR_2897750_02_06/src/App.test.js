
import { useReducer } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEMS } from './context'
import reducer, { initialState }  from "./context/reducer";

test('should add item to items', () => {
    const { result } = renderHook(() => useReducer(reducer, initialState))
    const [, dispatch]= result.current

    act(() => {
        dispatch({ type: ADD_ITEM, payload: { value: 'new value'}})
    })

    const [state] = result.current
    expect(state.items).toHaveLength(3)
})

test('should remove todos done', () => {
    const { result } = renderHook(() => useReducer(reducer, initialState))
    const [, dispatch]= result.current

    act(() => {
        dispatch({ type: CHECK_ITEM, payload: { id: 123}})
        dispatch({ type: REMOVE_ITEMS})
    })

    const [state] = result.current
    expect(state.items).toHaveLength(1)
})