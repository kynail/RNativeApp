import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import image from '../assets/profile.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'midnightblue',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 28,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 350 / 4,
    overflow: 'hidden',
  },
});

export default function ShowProfile() {
  const email = useSelector((state) => state.userreducer.email);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <EmptyText>{email}</EmptyText>
      <Image source={image} style={styles.profileImage} />
      <Camera style={styles.camera} type={type} flex={1}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 30px;
`;
