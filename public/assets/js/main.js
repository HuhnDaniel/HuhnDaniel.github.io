const menuBtn = $(".menu-toggle");

function menuToggle() {
    if (menuBtn.attr("data-status") === "closed") {
        menuBtn.attr("data-status", "open").text("✕");
    } else {
        menuBtn.attr("data-status", "closed").text("☰");
    };
}

menuBtn.on("click", menuToggle);