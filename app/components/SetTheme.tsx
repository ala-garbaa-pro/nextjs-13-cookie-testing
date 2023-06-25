import React from "react";
import Card from "./Card";
import { cookies } from "next/headers";

type Props = {};

function SetTheme({}: Props) {
  async function setTheme(data: FormData) {
    "use server";
    const theme = data.get("theme") as string;

    cookies().set("theme", theme);
  }

  return (
    <Card className={`bg-cyan-950/60`}>
      <form action={setTheme} className="flex gap-10 [&>*]:w-[100px]">
        <button type="submit" name="theme" value="light">
          Set Light
        </button>
        /
        <button type="submit" name="theme" value="dark">
          Set Dark
        </button>
      </form>
    </Card>
  );
}

export default SetTheme;
