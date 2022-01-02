import React, { useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components';
import AddInput from './Components/AddInput';
import TodoList from './Components/TodoList';
import Empty from './Components/Empty';
import Header from './Components/Header';

export default function App() {
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
        <FlatList
          data={data}
          ListHeaderComponent={React.memo(() => <Header />)}
          ListEmptyComponent={React.memo(() => <Empty />)}
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
