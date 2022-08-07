import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const sevenDays = 7 * 24 * 60 * 60 * 1000;

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  const expenses = expenseCtx.state.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={expenses}
      periodName='Last 7 Days'
      fallbackText='No recent expenses'
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
