const menuBtn = $(".menu-toggle");
const menu = $(".menu");
const project = $(".project-logo");

function menuToggle() {
    if (menuBtn.attr("data-status") === "closed") {
        menuBtn.attr("data-status", "open").text("✕");
        menu.show(250);
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.hide(250);
    };
}

function showScreenshot() {
    this.src = `assets/images/${this.dataset.project}-screenshot.png`;
}

function revertScreenshot() {
    this.src = `assets/images/${this.dataset.project}-logo.png`;
}

function checkWidth() {
    if ($(window).width() >= 660 && $(window).width() < 1064) {
        menuBtn.attr("data-status", "open").text("✕");
        menu.show();
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.hide();
    }
}

function closeMenuScroll() {
    if ($(window).width() < 660) {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.hide();
    }
}

menuBtn.on("click", menuToggle);
project.on("mouseover", showScreenshot);
project.on("mouseout", revertScreenshot);
$(window).on("resize", checkWidth);
$(window).on("scroll", closeMenuScroll);