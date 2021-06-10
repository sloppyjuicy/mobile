import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from '@screens/WelcomeScreen';

describe('<WelcomeScreen />', () => {
  it('renders properly', () => {
    const tree: any = renderer.create(<WelcomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
