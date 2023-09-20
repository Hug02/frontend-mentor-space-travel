const tablist = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let current_tab = tabs[0];

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        current_tab.setAttribute('aria-selected', 'false');
        current_tab.setAttribute('tabindex', '-1');
        changeTab(current_tab.getAttribute("aria-controls"), e.target.getAttribute("aria-controls"));
        current_tab = e.target;
        current_tab.setAttribute('aria-selected', 'true');
        current_tab.setAttribute('tabindex', '0');
    })
});

function changeTab(current, newOne) {
    const currentArticle = document.getElementById(current);
    const newArticle = document.getElementById(newOne);

    // hide currentArticle and image
    currentArticle.classList.remove("active");
    document.getElementById(currentArticle.dataset.image)
        .classList.remove("active");
    
    // show new article and image
    newArticle.classList.add("active");
    document.getElementById(newArticle.dataset.image)
        .classList.add("active");

}