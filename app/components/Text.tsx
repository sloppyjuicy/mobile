/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Text as RNText } from 'react-native';

import defaultStyles from '@config/defaultStyles';

type TextProps = {
  style?: {
    [style: string]: any;
  };
  [prop: string]: any;
};

const Text: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText style={[defaultStyles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
