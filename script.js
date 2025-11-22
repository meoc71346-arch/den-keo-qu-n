const lantern = document.getElementById("lantern");

// Khi rê chuột vào 1 hình bất kỳ → dừng quay
lantern.addEventListener("mouseenter", function() {
    lantern.style.animationPlayState = "paused";
});

// Khi rê chuột ra → quay tiếp
lantern.addEventListener("mouseleave", function() {
    lantern.style.animationPlayState = "running";
});
