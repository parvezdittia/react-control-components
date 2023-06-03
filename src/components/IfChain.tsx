import {
  FC,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import If, { IfProps } from './If';

interface IfChainProps {
  children: Array<ReactElement<IfProps>> | ReactElement<IfProps>;
}

const IfChain: FC<IfChainProps> = ({ children }) => {
  let childToReturn: ReactElement<IfProps> | null = null;

  Children.forEach(children, (child) => {
    if (childToReturn) return;
    if (!isValidElement(child)) {
      throw new Error(`${child} is not a valid React element`);
    } else if (child.type !== If) {
      throw new Error(`${child} is not an <If /> component`);
    } else {
      let result = child.props.condition;
      if (result) {
        childToReturn = cloneElement(child, {
          condition: result,
        });
      }
    }
  });

  return childToReturn;
};

export default IfChain;
