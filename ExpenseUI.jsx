import React, { useState } from 'react';
import { View } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';
import ExpenseForm from './ExpenseForm';
import styles from './styles'; 

const ExpenseScreen = () => {
  const [isFormValid, setFormValid] = useState(true);
  const [expenseData, setExpenseData] = useState(null);

  const captureExpense = (data) => {
    setFormValid(true); // Reset validation error
    if (validateData(data)) {
      setExpenseData(data);
    } else {
      setFormValid(false);
    }
  };

  const validateData = (data) => {
    // Implement your validation logic here
    return !!data.amount; // Example: Require amount to be filled
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content style={styles.title} title="Expense Tracking App" />
      </Appbar.Header>
      <Card>
        <Card.Content>
          {isFormValid ? (
            <ExpenseForm
              captureExpense={captureExpense}
              styles={styles} // Pass the styles to the ExpenseForm
            />
          ) : (
            <ValidationError message="Please enter a valid amount" />
          )}
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={captureExpense}
            style={[styles.button, styles.datePickerButton]} // Apply styles
          >
            Capture Expense
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ExpenseScreen;
