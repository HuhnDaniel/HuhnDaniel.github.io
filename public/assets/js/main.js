const menuBtn = $(".menu-toggle");
const menu = $(".menu");
const project = $(".project-logo");

function menuToggle() {
    if (menuBtn.attr("data-status") === "closed") {
        menuBtn.attr("data-status", "open").text("✕");
        menu.css({ display: "flex" });
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.css({ display: "none" });
    };
}

function showScreenshot() {
    this.src = `assets/images/${this.dataset.project}-screenshot.png`;
}

function revertScreenshot() {
    this.src = `assets/images/${this.dataset.project}-logo.png`;
}

function checkWidth() {
    if ($(window).width() >= 677 && $(window).width() < 1064) {
        menuBtn.attr("data-status", "open").text("✕");
        menu.css({ display: "flex" });
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.css({ display: "none" });
    }
}

menuBtn.on("click", menuToggle);
project.on("mouseover", showScreenshot);
project.on("mouseout", revertScreenshot);
$(window).on("resize", checkWidth);