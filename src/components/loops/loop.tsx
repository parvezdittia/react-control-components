import React, { ReactNode } from 'react';

export interface LoopProps<T> {
  source: Array<T>;
  children: (item: T, index: number) => ReactNode;
}

export const Loop = <T,>({ source, children }: LoopProps<T>) => {
  return <>{source.map(children)}</>;
};
