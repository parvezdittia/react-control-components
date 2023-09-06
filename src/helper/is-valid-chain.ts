import { Children, ReactNode, isValidElement } from 'react';
import { Else, ElseIf, If } from '../components/ifs';

export const isValidChain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const firstChild = childrenArray[0];
  const lastChild = childrenArray[childrenArray.length - 1];

  if (childrenArray.length === 0) {
    return false;
  }

  if (childrenArray.length === 1) {
    return isValidElement(firstChild) && firstChild.type === If;
  }

  if (
    childrenArray.length === 2 &&
    isValidElement(firstChild) &&
    isValidElement(lastChild)
  ) {
    return (
      firstChild.type === If &&
      (lastChild.type === Else || lastChild.type === ElseIf)
    );
  }

  if (
    !isValidElement(firstChild) ||
    firstChild.type !== If ||
    !isValidElement(lastChild) ||
    lastChild.type !== Else
  ) {
    return false;
  }

  for (let i = 1; i < childrenArray.length - 1; i++) {
    const child = childrenArray[i];

    if (!isValidElement(child) || child.type !== ElseIf) {
      return false;
    }
  }

  return true;
};
