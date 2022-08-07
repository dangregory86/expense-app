import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.state.expenses}
      periodName='All expenses'
      fallbackText='No expenses recorded'
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
