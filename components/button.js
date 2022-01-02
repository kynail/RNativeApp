import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
});

function Button({
  title,
  backgroundColor = '#000',
  titleColor = '#fff',
  titleSize = 14,
  onPress,
  width = '100%',
  containerStyle,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              width,
            },
            containerStyle,
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor,
            width,
          },
          containerStyle,
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.int,
  onPress: PropTypes.PressEvent,
  width: PropTypes.string,
  containerStyle: PropTypes.string,
};

Button.defautProps = {
  title: PropTypes.string,
  backgroundColor: '#000',
  titleColor: '#fff',
  titleSize: 14,
  onPress: PropTypes.PressEvent,
  width: '100%',
  containerStyle: PropTypes.string,
};

export default Button;
