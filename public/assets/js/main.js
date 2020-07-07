const menuBtn = $(".menu-toggle");
const menu = $(".menu");
menu.hide();

function menuToggle() {
    if (menuBtn.attr("data-status") === "closed") {
        menuBtn.attr("data-status", "open").text("✕");
        menu.show(500);
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
        menu.hide(500);
    };
}

menuBtn.on("click", menuToggle);