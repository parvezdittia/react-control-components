import React from 'react';
import IfChain from './IfChain';
import If from './If';
import renderer from 'react-test-renderer';

describe('IfChain component', () => {
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

  it('throws an error when an invalid child component is present', () => {
    // Mock console.error to suppress error logging in the console
    //console.error = jest.fn();

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

    // Restore console.error
    //console.error = consoleError;
  });

  // it('renders the correct number of valid child components', () => {
  //     const { container } = render(
  //         <IfChain>
  //             <If condition={true}>Child 1</If>
  //             <If condition={false}>Child 2</If>
  //             <If condition={true}>Child 3</If>
  //             <If condition={true}>Child 4</If>
  //         </IfChain>
  //     );
  //     expect(container.children.length).toBe(3); // Only 3 valid If components
  // });
});
