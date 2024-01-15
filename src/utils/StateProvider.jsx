import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({children, initialState, reducre}) => (
    <StateContext.Provider value={useReducer(reducre, initialState)}>
       {children}
    </StateContext.Provider>
)

export const useStateProvider = () => useContext(StateContext) // it will return useContext value of stateocntext
