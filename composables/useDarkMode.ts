const useDarkMode = () => {
  const isDarkMode = useState("darkMode", () => true);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
