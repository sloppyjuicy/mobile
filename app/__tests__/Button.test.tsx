import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../components/Button';

describe('<Button />', () => {
  it('renders properly', () => {
    const btn = renderer.create(<Button />).toJSON();
    expect(btn).toMatchSnapshot();
  });
});
