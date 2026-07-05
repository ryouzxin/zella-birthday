let clickCount = 0;
const btn = document.getElementById("openBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {

    clickCount++;

    if (clickCount === 1) {
        btn.style.transform = "translateX(200px)";
        message.innerText = "Eits, belum bisa 🤭";
    }

    else if (clickCount === 2) {
        btn.style.transform = "translateX(-200px)";
        message.innerText = "Sebelum lanjut, nyalain musik dulu ya 🎵";
    }

    else if (clickCount === 3) {
        btn.style.transform = "translateX(100px)";
        message.innerText = "Hehehe sabar ya bestie 🤭";
    }

    else {
        message.innerText = "Lanjut ke puzzle 🧩";
    }
});
