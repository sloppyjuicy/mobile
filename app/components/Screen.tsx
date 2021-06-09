import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

type ScreenProps = {
  style?: object;
};

const Screen: FC<ScreenProps> = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
