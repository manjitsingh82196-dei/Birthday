
/* =========================================
   SURPRISE BUTTON
========================================= */

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseSection = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {

    surpriseSection.classList.toggle("show");

    if (surpriseSection.classList.contains("show")) {

        surpriseBtn.innerHTML = "💖 Surprise Opened";

        createConfetti();

        setTimeout(() => {
            surpriseSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 200);
    }

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.background =
            `hsl(${Math.random() * 360}, 80%, 65%)`;

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


/* =========================================
   CLICK HEART EFFECT
========================================= */

document.addEventListener("click", function (event) {

    if (
        event.target.closest("button") ||
        event.target.closest(".shayari-card")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.classList.add("click-heart");

    heart.innerHTML =
        ["❤️", "💖", "💕", "💗"][Math.floor(Math.random() * 4)];

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});
