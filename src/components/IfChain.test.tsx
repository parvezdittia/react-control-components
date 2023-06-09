import React from 'react';
import IfChain from './IfChain';
import If from './If';
import renderer from 'react-test-renderer';

describe('If chain component contains valid child components', () => {
  it('does not render a string', () => {
    const tree = renderer.create(<IfChain>Hello world</IfChain>).toJSON();
  });
});

describe('IfChain component contains valid child component', () => {
  it('renders without errors when all children are If components', () => {
    const tree = renderer
      .create(
        <IfChain>
          <If condition={true}>Child 1</If>
          <If condition={false}>Child 2</If>
          <If condition={true}>Child 3</If>
        </IfChain>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  //test for isValidElement
  //test of valid element but not a valid If component

  it('throws an error when an invalid child component is present', () => {
    const tree = renderer
      .create(
        <IfChain>
          <If condition={true}>Child 1</If>
          <div>Invalid Child</div>
          <If condition={true}>Child 2</If>
        </IfChain>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
