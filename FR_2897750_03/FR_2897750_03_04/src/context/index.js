import React, { createContext, useContext, useReducer,  } from "react"
import reducer, { initialState } from "./reducer"

export const ADD_ITEM = "ADD_ITEM";
export const CHECK_ITEM = "CHECK_ITEM";
export const REMOVE_ITEMS = "REMOVE_ITEMS";

export const Context = createContext()
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export const useTodosReducer = () => {
    return useContext(Context)
}
export default Provider

