const btn = document.getElementById("nav-btn");
const nav = document.getElementById("nav-menu");
const burger = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

btn.addEventListener("click", () => {
    if (btn.dataset.isOpen == "true") {
        btn.dataset.isOpen = "false";
        nav.classList.remove("active");
        burger.classList.remove("hidden");
        closeIcon.classList.add("hidden")
    }
    else {
        btn.dataset.isOpen = "true";
        nav.classList.add("active");
        nav.classList.add("active");
        burger.classList.add("hidden");
        closeIcon.classList.remove("hidden")
    }
})