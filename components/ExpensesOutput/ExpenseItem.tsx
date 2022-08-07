import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

const ExpenseItem = (props: { expense: Expense }) => {
  const navigation = useNavigation();

  const { expense } = props;

  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseId: expense.id });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {expense.description}
          </Text>
          <Text style={[styles.date, styles.textBase]}>
            {expense.date.toDateString()}
          </Text>
        </View>
        <Text style={styles.amount}>£{expense.amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: GlobalStyles.colours.primary400,
    borderRadius: 8,
    marginTop: 8,
    paddingBottom: 0,
    paddingHorizontal: 16,
    elevation: 3,
  },
  textBase: {
    color: GlobalStyles.colours.primary50,
  },
  description: {
    fontSize: 15,
    paddingVertical: 4,
  },
  date: {
    fontSize: 12,
    paddingVertical: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colours.accent500,
    alignContent: "center",
    alignItems: "center",
  },
});
