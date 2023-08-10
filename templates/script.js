function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
}
