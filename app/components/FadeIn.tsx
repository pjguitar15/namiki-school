'use client';

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const FadeIn = ({ children, delay = 0, className = "" }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      style={{ transitionDelay: `${delay}s` }}
      className={`transform transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
