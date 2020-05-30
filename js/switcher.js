var btn = document.getElementById("theme_switch");
var link = document.getElementById("theme_link");

btn.addEventListener("click", function () { ChangeTheme();});
function ChangeTheme()
{

    let lightTheme = "styles/light_theme.css";
    let darkTheme = "styles/dark_theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    // Save(theme);
}