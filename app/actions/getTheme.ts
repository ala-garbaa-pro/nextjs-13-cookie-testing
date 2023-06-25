import { cookies } from "next/headers";

export const getTheme = async () => {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value;
  return theme;
};
