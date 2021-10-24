let btn = document.getElementById("theme_switch");
let link = document.getElementById("theme_link");

let currTheme = '';
if (!localStorage.getItem("Theme")) {
    currTheme = link.getAttribute("href");
} else {
    currTheme = localStorage.getItem("Theme");
}
link.setAttribute("href", currTheme);

btn.addEventListener("click", function () {
    console.log(currTheme);
    ChangeTheme();

});

function ChangeTheme() {

    let lightTheme = "styles/light_theme.css";
    let darkTheme = "styles/dark_theme.css";

    currTheme = link.getAttribute("href");

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
    } else {
        currTheme = lightTheme;
    }

    link.setAttribute("href", currTheme);

    // Save(theme);
    localStorage.setItem("Theme", currTheme);
}