import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Button;
