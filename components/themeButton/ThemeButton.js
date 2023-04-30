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
        className="theme-button bg-gray-100 hover:bg-gray-200 text-black"
        onClick={() => setTheme("light")}
      >
        <MdOutlineLightMode size={24} />
      </button>
    );
  } else {
    return (
      <button
        className="theme-button bg-gray-900 hover:bg-gray-800 text-white"
        onClick={() => setTheme("dark")}
      >
        <BsFillMoonStarsFill size={20} />
      </button>
    );
  }
};

export default ThemeButton;
