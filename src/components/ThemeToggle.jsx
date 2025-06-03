import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/utils/ThemeProvider";
import { cn } from "@/utils/utils";

export const ThemeToggle = ({ className, onClick }) => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    onClick?.(); // Call onClick if provided
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "transition-colors duration-300",
        className || "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full"
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
