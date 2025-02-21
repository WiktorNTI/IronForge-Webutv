
document.querySelector(".sok-knapp").addEventListener("click", function(e) {
    const button = e.target;
    const originalText = button.innerHTML;
    button.innerHTML = "...";
    setTimeout(() => {
        button.innerHTML = originalText;
        alert("Sökfunktionen kommer snart!");
    }, 500);
});


document.querySelector(".cta-knapp").addEventListener("click", function() {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
        alert("Gå till butiken!");
    }, 100);
});


document.querySelectorAll(".köp-knapp").forEach(button => {
    button.addEventListener("click", function() {
        this.innerHTML = "✓ Tillagd";
        this.style.backgroundColor = "#4CAF50";
        setTimeout(() => {
            this.innerHTML = "Köp nu";
            this.style.backgroundColor = "#C574F1";
        }, 1500);
    });
});