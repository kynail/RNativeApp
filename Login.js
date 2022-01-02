import React, { useState } from 'react';
import {
  Button, TextInput, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      return true;
    }
    return false;
  };

  const onLogin = () => {
    if (validateEmail(userName) && password.length >= 6) {
      navigation.navigate('Home');
    }
    // Alert.alert('Credentials', `${userName} + ${password}`);
  };

  return (
    <View>
      <TextInput
        value={userName}
        onChangeText={(username) => setUserName(username)}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(passwordInput) => setPassword(passwordInput)}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Button title="Login" style={styles.input} onPress={() => onLogin()} />

      {/* <Task /> */}
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
