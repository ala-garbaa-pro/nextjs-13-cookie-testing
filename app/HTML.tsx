import React from "react";
import { getTheme } from "./actions/getTheme";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

async function HTML({ children, ...props }: Props) {
  const theme = (await getTheme()) || "REF0001";

  return (
    <html
      {...props}
      lang="en"
      className={theme}
      color-scheme={theme}
      prefers-color-scheme={theme}
    >
      {children}
    </html>
  );
}

export default HTML;
