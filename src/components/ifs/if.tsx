import React, { FC, ReactNode } from 'react';

export interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export const If: FC<IfProps> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};
