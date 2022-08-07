import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../../constants/types";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props: { expenses: Expense[] }) => {
  const { expenses } = props;

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ExpenseItem expense={itemData.item} />}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
