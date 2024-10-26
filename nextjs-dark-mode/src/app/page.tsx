import ThemeChanger from "./theme-changer";

export default function Home() {
  return (
    <div className="flex flex-col p-8 w-60 gap-4">
      <ThemeChanger />
      <span className="text-black dark:text-red-500">Hello, World!</span>
    </div>
  );
}
