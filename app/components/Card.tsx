import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div className={clsx("rounded-md overflow-hidden", className)}>
      <div className="flex p-6 flex-col items-start gap-6 self-stretch bg-gradient-to-r to-transparent shadow-lg from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.3)]  dark:from-[rgba(225,225,225,0.48)] dark:via-[rgba(225,225,225,0.5)]">
        {children}
      </div>
    </div>
  );
};

export default Card;
