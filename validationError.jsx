import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ValidationError = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 12,
  },
});

export default ValidationError;
