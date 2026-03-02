'use client';

import { ReactNode } from "react";

type WideContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
};

const WideContainer = ({
  children,
  className = "",
  id,
  as = "div",
}: WideContainerProps) => {
  const baseClass = "mx-auto w-full max-w-[100rem] px-6 md:px-10 lg:px-14";

  if (as === "section") {
    return (
      <section id={id} className={`${baseClass} ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <div id={id} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
};

export default WideContainer;
