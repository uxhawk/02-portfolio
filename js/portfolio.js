// var lightTheme = true;

// function changeTheme() {

//     if (lightTheme) {
//         document.getElementById("theme_css").href = "css/dark.css";
//         document.getElementById("theme-btn").classList.add("fa-sun");
//         document.getElementById("theme-btn").classList.remove("fa-moon");
//         lightTheme = false;

//     } else {
//         document.getElementById("theme_css").href = "css/light.css";
//         document.getElementById("theme-btn").classList.add("fa-moon");
//         document.getElementById("theme-btn").classList.remove("fa-sun");
//         lightTheme = true;
//     }
// }

var lightTheme;
const htmlTag = document.getElementsByTagName("html")[0];
const body = document.getElementsByName("body")[0];

function toggleTheme() {
    if (htmlTag.hasAttribute("data-theme")) {
        document.getElementsByTagName("body")[0].style.transition = "500ms ease-in-out";
        lightTheme = true;
        storageVal = JSON.stringify(lightTheme);
        window.sessionStorage.setItem("theme", storageVal);
        htmlTag.removeAttribute("data-theme");
        document.getElementsByTagName("body")[0].style.removeProperty = "transition";
        return;
    }
    document.getElementsByTagName("body")[0].style.transition = "500ms ease-in-out";
    htmlTag.setAttribute("data-theme", "dark");
    lightTheme = false;
    storageVal = JSON.stringify(lightTheme);
    window.sessionStorage.setItem("theme", storageVal);
    document.getElementsByTagName("body")[0].style.removeProperty = "transition";
}

function checkTheme() {
    if (window.sessionStorage.getItem("theme") === "false") {
        htmlTag.setAttribute("data-theme", "dark");
    }

}