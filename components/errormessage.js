import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  errorText: {
    color: '#fdca40',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
});

function ErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>
      ⚠️{error}
      </Text>;
}

export default ErrorMessage;
