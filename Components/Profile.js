import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function ShowProfile() {
  const email = useSelector((state) => state.userreducer.email);

  return (
    <View>
      <EmptyText>{email}</EmptyText>
    </View>
  );
}

const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 30px;
`;
