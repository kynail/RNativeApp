import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, TextInput, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { storeEmail } from './redux/UserSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'midnightblue',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    color: 'white',
  },
});

export default function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      return true;
    }
    return false;
  };

  const onLogin = () => {
    if (validateEmail(userName) && password.length >= 6) {
      navigation.replace('Home');
      dispatch(storeEmail(userName));
    }
    // Alert.alert('Credentials', `${userName} + ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={(username) => setUserName(username)}
        placeholder="Email"
        placeholderTextColor="white"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(passwordInput) => setPassword(passwordInput)}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="white"
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
    replace: PropTypes.func.isRequired,
  }).isRequired,
};
