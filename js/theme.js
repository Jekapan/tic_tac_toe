const colorThemes = document.querySelectorAll('[name="theme]');

//store theme
const storeTheme = function () {
  localStorage.setItem("theme", theme);
};

const retrieveTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = retrieveTheme();
