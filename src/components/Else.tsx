import React, { FC, ReactNode } from 'react';

export interface ElseProps {
  children: ReactNode;
}

const Else: FC<ElseProps> = ({ children }) => {
  return <>{children}</>;
};

export default Else;
