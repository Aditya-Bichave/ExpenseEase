import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Appbar, Card, TextInput as PaperTextInput } from 'react-native-paper';

const categories = [
  'Food',
  'Transportation',
  'Housing',
  'Utilities',
  'Healthcare',
  'Education',
  'Entertainment',
  'Groceries',
  'Clothing',
  'Dining Out',
  'Travel',
  'Shopping',
  'Insurance',
  'Rent',
  'Loan',
  'Gifts',
  'Charity',
  'Utilities',
  'Other',
];

const ExpenseScreen = () => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');

  const captureExpense = () => {
    // Implement your logic for capturing and storing expenses
  };

  const validateData = (date, amount, category) => {
    // Implement your validation logic here
    return true;
  };
  

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content style={styles.title} title="Expense Tracking App" />
      </Appbar.Header>
      <Card>
        <Card.Content>
          <PaperTextInput
            label="Enter expense date"
            value={date.toISOString()}
            onChangeText={setDate}
            style={styles.input}
          />
          <PaperTextInput
            label="Enter expense amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.input}
          >
            {categories.map((cat, index) => (
              <Picker.Item key={index} label={cat} value={cat} />
            ))}
          </Picker>
          <PaperTextInput
            label="Enter optional description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions>
          <Button title="Capture Expense" 
          onPress={captureExpense}
          style={styles.button} />
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});

export default ExpenseScreen;
