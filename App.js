import React, { useState } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import AddInput from './Components/AddInput';
import TodoList from './Components/TodoList';
import Empty from './Components/Empty';
import Header from './Components/Header';
import store from './redux/store';

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

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder={'Username'}
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder={'Password'}
//           secureTextEntry={true}
//           style={styles.input}
//         />

//         <Button
//           title={'Login'}
//           style={styles.input}
//           onPress={this.onLogin.bind(this)}
//         />
//       </View>
//     );
//   }
// }

function Task() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => [
      {
        value,
        key: Math.random().toString(),
      },
      ...prevTodo,
    ]);
  };

  const deleteItem = (key) => {
    setData((prevTodo) => prevTodo.filter((todo) => todo.key !== key));
  };

  return (
    <Provider store={store}>
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={React.memo(() => (
              <Header />
            ))}
            ListEmptyComponent={React.memo(() => (
              <Empty />
            ))}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    </Provider>
  );
}

export default function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      alert('valid');
    } else {
      alert('not valid');
    }
  };

  const onLogin = () => {
    validateEmail(userName);
    Task();
    // Alert.alert('Credentials', `${userName} + ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={(username) => setUserName(username)}
        placeholder="Ema"
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

      <Task />
    </View>
  );
}
const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
