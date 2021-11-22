
import { useReducer } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEMS } from './context'
import reducer, { initialState }  from "./context/reducer";
