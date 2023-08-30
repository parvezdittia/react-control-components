import React, { FC, ReactNode } from 'react';

export interface ElseProps {
  children: ReactNode;
}

export const Else: FC<ElseProps> = ({ children }) => {
  return <>{children}</>;
};


