var btn = document.getElementById("theme_switch");
var link = document.getElementById("theme_link");

var currTheme;
  if(!localStorage.getItem("Theme"))
  {
    currTheme = link.getAttribute("href");
  }else{
    currTheme = localStorage.getItem("Theme");
    console.log("durrak");
  }
link.setAttribute("href", currTheme);

btn.addEventListener("click", function () { ChangeTheme();});
function ChangeTheme()
{

    let lightTheme = "styles/light_theme.css";
    let darkTheme = "styles/dark_theme.css";

    currTheme = link.getAttribute("href");
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
    localStorage.setItem("Theme", currTheme);
}