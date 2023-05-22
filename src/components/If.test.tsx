import React from 'react';
import renderer from 'react-test-renderer';
import If from './If';

describe('If', () => {
  it('renders the component correctly with children if condition is true', () => {
    const component = renderer.create(
      <If condition={true}>
        <div>Child Component</div>
      </If>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component correctly without children if condition is false', () => {
    const component = renderer.create(
      <If condition={false}>
        <div>Child Component</div>
      </If>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
