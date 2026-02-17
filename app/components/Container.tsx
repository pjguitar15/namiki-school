'use client';

import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Container = ({ id, className = "", children }: Props) => {
  return (
    <section
      id={id}
      className={`w-full max-w-6xl px-6 md:px-10 lg:px-14 mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
