/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import renderer from 'react-test-renderer';

import Text from '@components/Text';
import defaultStyles from '@config/defaultStyles';

const text = 'Hello this is working';

describe('<Text />', () => {
  it('renders properly', () => {
    const tree: any = renderer.create(<Text>{text}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has right styles', () => {
    const tree: any = renderer.create(<Text>{text}</Text>).toJSON();
    expect(tree.props.style[0]).toMatchObject(defaultStyles.text);
  });

  it('has new styles and the old ones', () => {
    const tree: any = renderer
      .create(<Text style={{ backgroundColor: 'green' }}>{text}</Text>)
      .toJSON();
    expect(tree.props.style[0]).toMatchObject(defaultStyles.text);
    expect(tree.props.style[1]).toMatchObject({ backgroundColor: 'green' });
  });
});
