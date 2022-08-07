import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expenses-context";

const ManageExpense = (props: { route: any; navigation: any }) => {
  const { route, navigation } = props;
  const expenseId: string = route.params?.expenseId;
  const isEditing = !!expenseId;
  const expenseCtx = useContext(ExpenseContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Create Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.delete(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.update(expenseId, {
        amount: 25.69,
        date: new Date(),
        description: "banana sandwich",
      });
    } else {
      expenseCtx.add({
        date: new Date(),
        amount: 199.99,
        description: "ostritch eggs",
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler} mode='flat' style={styles.button}>
          <Text>Cancel</Text>
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          <Text>{isEditing ? "Edit" : "Add"}</Text>
        </Button>
      </View>
      {expenseId && (
        <View style={styles.delete}>
          <IconButton
            iconName='trash'
            color={GlobalStyles.colours.error500}
            onPress={deleteExpenseHandler}
            size={36}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colours.primary800,
  },
  delete: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colours.primary50,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
