const europa = [
    document.getElementById("stats-container--europa"),
    document.getElementById("europa-img"),
    document.getElementById("europa-btn")
]

const moon = [
    document.getElementById("stats-container--moon"),
    document.getElementById("moon-img"),
    document.getElementById("moon-btn")
]

const mars = [
    document.getElementById("stats-container--mars"),
    document.getElementById("mars-img"),
    document.getElementById("mars-btn")
]
const titan = [
    document.getElementById("stats-container--titan"),
    document.getElementById("titan-img"),
    document.getElementById("titan-btn")
]

let currentState = moon;


const toggleDestination = (newdestination) => {
    currentState.forEach((e) => {
        e.classList.remove("active");
    })
    currentState = newdestination;
    currentState.forEach((e) => {
        e.classList.add("active");
    })
}


moon[2].addEventListener("click", () => {
    if (currentState===moon) return;
    toggleDestination(moon);
});

mars[2].addEventListener("click", () => {
    if (currentState===mars) return;
    toggleDestination(mars);
});

europa[2].addEventListener("click", () => {
    if (currentState===europa) return;
    toggleDestination(europa);
});

titan[2].addEventListener("click", () => {
    if (currentState===titan) return;
    toggleDestination(titan);
})