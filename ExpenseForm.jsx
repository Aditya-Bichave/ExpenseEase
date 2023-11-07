import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles'; 

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

const ExpenseForm = ({ captureExpense }) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const DatePicker = ({ date, onDateChange }) => {
    const onChange = (event, selectedDate) => {
      setShowDatePicker(false);
      if (selectedDate) {
        onDateChange(selectedDate);
      }
    };

    return (
      <>
        <Button
          title="Select Expense Date"
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            style = {styles.datePickerButton}
          />
        )}
      </>
    );
  };

  return (
    <>
      <DatePicker date={date} onDateChange={(selectedDate) => setDate(selectedDate)} />
      <TextInput
        label="Enter expense amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
        style = {styles.textInput}
      />
      <Picker

        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style = {styles.picker}
      >
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} />
        ))}
      </Picker>
      <TextInput
        label="Enter optional description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
    </>
  );
};

export default ExpenseForm;
