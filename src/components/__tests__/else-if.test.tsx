import React from 'react';
import renderer from 'react-test-renderer';
import { ElseIf } from '..';

describe('<ElseIf />', () => {
  it('renders the component correctly', () => {
    const component = renderer.create(
      <ElseIf condition={true}>
        <div>Child Component</div>
      </ElseIf>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component correctly without children if condition is false', () => {
    const component = renderer.create(
      <ElseIf condition={false}>
        <div>Child Component</div>
      </ElseIf>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
