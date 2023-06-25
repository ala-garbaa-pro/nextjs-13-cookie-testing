import Card from "./components/Card";
import SetTheme from "./components/SetTheme";
import { getTheme } from "./actions/getTheme";

const messageNoCookies =
  "The website does not have a theme specified in the cookies";

export default async function Home() {
  const theme = (await getTheme()) || messageNoCookies;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-slate-950">
      <Card className="bg-yellow-300 text-white dark:bg-amber-500 dark:text-black">
        {String(theme)}
      </Card>
      <SetTheme />
    </main>
  );
}
