const btn = document.getElementById("toggleTheme");
const link = document.getElementById("toggleThemeLink");

btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "sass/light.css";
  let darkTheme = "sass/dark.css";

  let currTheme = link.getAttribute("href");
  let theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);

  function Save(theme) {
    let Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true);
    Request.send();
  }

  Save(theme);
}
