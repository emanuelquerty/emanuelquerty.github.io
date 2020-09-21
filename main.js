let themeSelectors = document.querySelectorAll(".themes-selectors__circle");
let themeStyle = document.querySelector("#theme-style");
let currentTheme = localStorage.getItem("currentTheme");

// Save the themes first time users visit porfolio
if (!localStorage.getItem("currentTheme")) {
  // Save the current theme in user's browser
  localStorage.setItem("currentTheme", "default.css");
}

themeSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    let theme = e.target.id + ".css";

    // Set the selected theme
    themeStyle.href = `./css/themes/${theme}`;

    // Save the current theme in user's browser
    localStorage.setItem("currentTheme", theme);

    // Enable the active theme selector
    let selectedID = theme.split(".")[0];
    enableCurrentThemeSelector(themeSelectors, selectedID);

    // Disable the previous active selectors
  });
});

// Get the last saved theme
themeStyle.href = `./css/themes/${currentTheme}`;

// Show the active theme selector
let selectedID = currentTheme.split(".")[0];
enableCurrentThemeSelector(themeSelectors, selectedID);

function enableCurrentThemeSelector(themeSelectors, selectedID) {
  let activeSelector = document.querySelector(`#${selectedID}`);
  activeSelector.classList.add("themes-selectors__circle--active");

  themeSelectors.forEach((selector) => {
    let id = selector.id;
    if (id !== selectedID) {
      selector.classList.remove("themes-selectors__circle--active");
    }
  });
}
