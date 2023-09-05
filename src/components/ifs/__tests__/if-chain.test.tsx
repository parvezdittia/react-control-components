import React from 'react';
import renderer from 'react-test-renderer';
import { Else, If, IfChain, ElseIf } from '..';

describe('<IfChain /> should throw error', () => {
  it('if the first child is not an If', () => {
    expect(() =>
      renderer.create(
        <IfChain>
          <span>1</span>
          <Else>
            <span>2</span>
          </Else>
        </IfChain>
      )
    ).toThrowErrorMatchingSnapshot();
  });

  it('if the last child is not an Else', () => {
    expect(() =>
      renderer.create(
        <IfChain>
          <If condition={true}>
            <span>1</span>
          </If>
          <span>2</span>
        </IfChain>
      )
    ).toThrowErrorMatchingSnapshot();
  });

  it('if a child between the first and last is not an ElseIf', () => {
    expect(() =>
      renderer.create(
        <IfChain>
          <If condition={true}>
            <span>1</span>
          </If>
          <span>2</span>
          <Else>
            <span>3</span>
          </Else>
        </IfChain>
      )
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('<IfChain />', () => {
  it('should render the first child if truthy', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={true}>
          <span>1</span>
        </If>
        <ElseIf condition={true}>
          <span>2</span>
        </ElseIf>
        <Else>
          <span>3</span>
        </Else>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the first elseif truthy child', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={false}>
          <span>1</span>
        </If>
        <ElseIf condition={true}>
          <span>2</span>
        </ElseIf>
        <Else>
          <span>3</span>
        </Else>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the second elseif truthy child', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={false}>
          <span>1</span>
        </If>
        <ElseIf condition={false}>
          <span>2</span>
        </ElseIf>
        <ElseIf condition={true}>
          <span>3</span>
        </ElseIf>
        <Else>
          <span>4</span>
        </Else>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the last child if no truthy child', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={false}>
          <span>1</span>
        </If>
        <ElseIf condition={false}>
          <span>2</span>
        </ElseIf>
        <Else>
          <span>3</span>
        </Else>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should work when only <If /> is child', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={true}>
          <span>1</span>
        </If>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should handle nested IfChain', () => {
    const component = renderer.create(
      <IfChain>
        <If condition={false}>
          <span>1</span>
        </If>
        <ElseIf condition={true}>
          <IfChain>
            <If condition={true}>
              <span>4</span>
            </If>
            <ElseIf condition={false}>
              <span>5</span>
            </ElseIf>
            <Else>
              <span>6</span>
            </Else>
          </IfChain>
        </ElseIf>
        <Else>
          <span>3</span>
        </Else>
      </IfChain>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
