'use client';

import { ReactNode } from "react";
import WideContainer from "./WideContainer";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Container = ({ id, className = "", children }: Props) => {
  return (
    <WideContainer as="section" id={id} className={className}>
      {children}
    </WideContainer>
  );
};

export default Container;
