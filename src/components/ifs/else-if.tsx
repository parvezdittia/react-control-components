import React, { FC, ReactNode } from 'react';

export interface ElseIfProps {
  condition: boolean;
  children: ReactNode;
}

export const ElseIf: FC<ElseIfProps> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};
