import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../constants/DUMMY_DATA";
import { Expense } from "../constants/types";

export type expenseData = {
  description: string;
  amount: number;
  date: Date;
};

export enum ActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

export type ExpenseActions =
  | { type: ActionKind.ADD; payload: { data: expenseData } }
  | { type: ActionKind.DELETE; payload: { id: string } }
  | { type: ActionKind.UPDATE; payload: { data: expenseData; id: string } };

type ExpenseContextType = {
  expenses: Expense[];
};

const initialState = {
  expenses: DUMMY_EXPENSES,
};

export const ExpenseContext = createContext<{
  state: ExpenseContextType;
  delete: (id: string) => void;
  update: (id: string, expenseData: expenseData) => void;
  add: (expenseData: expenseData) => void;
}>({
  state: initialState,
  delete: (id: string) => {},
  update: (id: string, expenseData: expenseData) => {},
  add: (expenseData: expenseData) => {},
});

function expensesReducer(state: ExpenseContextType, action: ExpenseActions) {
  let stateExpenses = state.expenses;
  switch (action.type) {
    case ActionKind.ADD:
      const id = new Date().toString() + Math.random().toString();
      const data = action.payload.data;
      stateExpenses = [{ ...data, id: id }, ...stateExpenses];
      return { expenses: stateExpenses };

    case ActionKind.UPDATE:
      const updateableExpenseIndex = stateExpenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = stateExpenses[updateableExpenseIndex];
      const updatedItem = {
        ...updateableExpense,
        ...action.payload.data,
      };
      const updatedExpenses = [...stateExpenses];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      stateExpenses = updatedExpenses;

      return { expenses: stateExpenses };
    case ActionKind.DELETE:
      const newExpenses = stateExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      stateExpenses = newExpenses;

      return { expenses: stateExpenses };
    default:
      return { expenses: stateExpenses };
  }
}

const ExpesesContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, initialState);

  function addExpense(expenseData: expenseData) {
    dispatch({ type: ActionKind.ADD, payload: { data: expenseData } });
  }
  function deleteExpense(expenseId: string) {
    dispatch({ type: ActionKind.DELETE, payload: { id: expenseId } });
  }
  function updateExpense(id: string, expenseData: expenseData) {
    dispatch({
      type: ActionKind.UPDATE,
      payload: { data: expenseData, id: id },
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        state,
        add: addExpense,
        delete: deleteExpense,
        update: updateExpense,
      }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpesesContextProvider;
