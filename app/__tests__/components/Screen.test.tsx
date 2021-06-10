/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import renderer from 'react-test-renderer';
import Constants from 'expo-constants';

import Screen from '@components/Screen';

describe('<Screen />', () => {
  it('renders properly', () => {
    const tree: any = renderer.create(<Screen />).toJSON();
    expect(tree.props.style[0]).toMatchObject({
      paddingTop: Constants.statusBarHeight,
      flex: 1,
    });
  });
});
