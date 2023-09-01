import React from 'react';
import renderer from 'react-test-renderer';
import { Loop } from '..';

describe('<Loop />', () => {
  it('should render children for each item in the source array ', () => {
    const tree = renderer.create(
      <Loop source={[1, 2, 3]}>
        {(item, index) => <span key={index}>{item}</span>}
      </Loop>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render null when source array is empty', () => {
    const tree = renderer.create(
      <Loop source={[]}>
        {(item, index) => <span key={index}>{item}</span>}
      </Loop>
    );
    expect(tree).toMatchSnapshot();
  });
});
