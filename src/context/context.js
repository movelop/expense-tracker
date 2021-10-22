import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":50,"category":"House","type":"Expense","date":"2021-10-25","id":"2993d204-0f0e-42a0-b3b2-f39f18204396"},{"amount":30,"category":"Travel","type":"Expense","date":"2021-10-25","id":"87942048-fdd8-4353-b483-7e8ef6af2901"},{"amount":200,"category":"Salary","type":"Income","date":"2021-10-25","id":"1fc3bb56-4874-4ddd-9931-bb666f638584"},{"amount":50,"category":"Business","type":"Income","date":"2021-10-25","id":"d270a8ed-36f8-4009-9698-79a9976581f3"}];
export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action creators

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    const balance = transactions.reduce((acc, currentVal) => {
        return (currentVal.type === 'Expense' ? acc - currentVal.amount : acc + currentVal.amount);
    }, 0)

    return (
        <ExpenseTrackerContext.Provider value = {{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance,
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}