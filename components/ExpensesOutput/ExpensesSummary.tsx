import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = (props: {
  periodName: string;
  expenses: Expense[];
}) => {
  const { periodName, expenses } = props;

  const expressSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName} </Text>
      <Text style={styles.total}>£{expressSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colours.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colours.primary400,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colours.primary500,
  },
});

export default ExpensesSummary;
