import React from 'react';
import renderer from 'react-test-renderer';
import { Else } from '..';

describe('<Else />', () => {
  it('renders the component correctly', () => {
    const component = renderer.create(
      <Else>
        <div>Child Component</div>
      </Else>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
