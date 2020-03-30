var lightTheme;
const htmlTag = document.getElementsByTagName("html")[0];
const body = document.getElementsByName("body")[0];
const themeBtn = document.getElementById("theme-btn");

// function toggleTheme() {
//     if (htmlTag.hasAttribute("data-theme")) {
//         body.style.transition = "500ms ease-in-out";
//         lightTheme = true;
//         storageVal = JSON.stringify(lightTheme);
//         window.sessionStorage.setItem("theme", storageVal);
//         htmlTag.removeAttribute("data-theme");
//         body.style.removeProperty = "transition";
//         return;
//     }
//     body.style.transition = "500ms ease-in-out";
//     htmlTag.setAttribute("data-theme", "dark");
//     lightTheme = false;
//     storageVal = JSON.stringify(lightTheme);
//     window.sessionStorage.setItem("theme", storageVal);
//     body.style.removeProperty = "transition";
// }

function checkTheme() {
    if (window.sessionStorage.getItem("theme") === "false") {
        htmlTag.setAttribute("data-theme", "dark");
    }
}

themeBtn.addEventListener("click", function() {

    if (htmlTag.hasAttribute("data-theme")) {

        lightTheme = true;
        storageVal = JSON.stringify(lightTheme);
        window.sessionStorage.setItem("theme", storageVal);
        htmlTag.removeAttribute("data-theme");
        themeBtn.classList.add("far", "fa-moon");
        themeBtn.classList.remove("fas", "fa-sun");
        return;
    }
    // body.style.transition = "500ms ease-in-out";
    htmlTag.setAttribute("data-theme", "dark");
    lightTheme = false;
    storageVal = JSON.stringify(lightTheme);
    window.sessionStorage.setItem("theme", storageVal);
    themeBtn.classList.remove("far", "fa-moon");
    themeBtn.classList.add("fas", "fa-sun");

})