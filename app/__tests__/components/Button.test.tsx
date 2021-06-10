/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '@config/colors';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../components/Button';

describe('<Button />', () => {
  it('renders properly', () => {
    const btn = renderer.create(<Button title="Required Title" />).toJSON();
    expect(btn).toMatchSnapshot();
  });

  it('is the primary color', () => {
    const btn: any = renderer
      .create(<Button title="Required Title" />)
      .toJSON();
    expect(btn.props.style.backgroundColor).toBe(colors.primary);
  });

  it('is the secondary color', () => {
    const btn: any = renderer
      .create(<Button title="Required Title" color={colors.secondary} />)
      .toJSON();
    expect(btn.props.style.backgroundColor).toBe(colors.secondary);
  });
});
