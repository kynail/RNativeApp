import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  View, StatusBar, FlatList, Button,
} from 'react-native';
import AddInput from './Components/AddInput';
import TodoList from './Components/TodoList';
import Empty from './Components/Empty';
import Header from './Components/Header';

export default function Task({ navigation }) {
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
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      </View>
      <View>
        <Button title="Profil" onPress={() => navigation.navigate('Profile')} />
        <Button title="Deconnexion" onPress={() => navigation.replace('Login')} />
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
  );
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Task.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};
