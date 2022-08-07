import { Text, StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = (props: {
  expenses: Expense[];
  periodName: string;
  fallbackText: string;
}) => {
  const { expenses, periodName, fallbackText } = props;
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={expenses} />
      {expenses.length < 1 ? (
        <Text style={styles.text}>{fallbackText}</Text>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colours.primary700,
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    paddingTop: 24,
  },
});
