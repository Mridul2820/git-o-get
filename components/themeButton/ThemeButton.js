import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        className="flex items-center justify-center fixed w-12 h-12 bottom-4 right-3  bg-gray-800 rounded-md border border-gray-700  hover:border-gray-600 hover:bg-dark-color p-3 md:bottom-7 md:right-6"
        onClick={() => setTheme("light")}
      >
        {MdOutlineLightMode()}
      </button>
    );
  } else {
    return (
      <button
        className="flex items-center justify-center fixed w-12 h-12 bottom-4 right-3  bg-dark-gray text-white rounded-md border border-gray-700  hover:bg-gray-700 p-3 md:bottom-7 md:right-6"
        onClick={() => setTheme("dark")}
      >
        {BsFillMoonStarsFill()}
      </button>
    );
  }
};

export default ThemeButton;
