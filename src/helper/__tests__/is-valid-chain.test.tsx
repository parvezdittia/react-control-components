import { Else, ElseIf, If } from '../../components/ifs';
import { isValidChain } from '../is-valid-chain';
import React from 'react';

describe('isValidChain', () => {
  it('should return true if chain is valid', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
      <Else>
        <span>2</span>
      </Else>,
    ]);

    expect(result).toBe(true);
  });

  it('should return false if the first child is not an If', () => {
    const result = isValidChain([
      <span>1</span>,
      <Else>
        <span>2</span>
      </Else>,
    ]);

    expect(result).toBe(false);
  });

  it('should return false if the last child is not an Else', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
      <span>2</span>,
    ]);

    expect(result).toBe(false);
  });

  it('should return false if a child between the first and last is not an ElseIf', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
      <span>2</span>,
      <Else>
        <span>3</span>
      </Else>,
    ]);

    expect(result).toBe(false);
  });

  it('should return false if the chain is empty', () => {
    const result = isValidChain([]);
    expect(result).toBe(false);
  });

  it('should return true if the chain has only one child and that child is <If />', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
    ]);

    expect(result).toBe(true);
  });

  it('should return false if the chain has only one child and that child is not <If />', () => {
    const result = isValidChain([<ElseIf condition={true}>1</ElseIf>]);

    expect(result).toBe(false);
  });

  it('should return true of the chain has only two children and the first is <If /> and the second is <Else />', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
      <Else>
        <span>2</span>
      </Else>,
    ]);

    expect(result).toBe(true);
  });

  it('should return true if the chain has only two children and the first is <If /> and the second is <ElseIf />', () => {
    const result = isValidChain([
      <If condition={true}>
        <span>1</span>
      </If>,
      <ElseIf condition={true}>2</ElseIf>,
    ]);

    expect(result).toBe(true);
  });
});
