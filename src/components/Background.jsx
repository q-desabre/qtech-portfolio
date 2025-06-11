import { useTheme } from "@utils/ThemeProvider";
import StarBackground from "./StarBackground";
import CloudBackground from "./CloudBackground";

const Background = () => {
  const { theme } = useTheme();

  return theme === "dark" ? <StarBackground /> : <CloudBackground />;
};

export default Background;
