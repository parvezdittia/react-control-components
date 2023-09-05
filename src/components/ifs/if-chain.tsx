import { FC, Children, ReactElement } from 'react';
import { If, ElseIf, Else } from '.';
import { isValidChain } from '../../helper';

type IfChainChild =
  | ReactElement<typeof If>
  | ReactElement<typeof ElseIf>
  | ReactElement<typeof Else>;

export interface IfChainProps {
  children: IfChainChild[] | IfChainChild;
}

export const IfChain: FC<IfChainProps> = ({ children }): IfChainChild => {
  if (!isValidChain(children)) {
    throw new Error('Invalid IfChain');
  }

  const childrenArray = Children.toArray(children);
  const elseChild = childrenArray[childrenArray.length - 1];

  for (let i = 0; i < childrenArray.length - 1; i++) {
    const child = childrenArray[i] as ReactElement;

    if (child.props.condition) {
      return child;
    }
  }

  return elseChild as ReactElement;
};
