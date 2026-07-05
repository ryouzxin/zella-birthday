let clickCount = 0;
const btn = document.getElementById("openBtn");

btn.addEventListener("click", function () {

    clickCount++;

    if (clickCount === 1) {
        btn.style.transform = "translateX(200px)";
        alert("Eits, belum bisa 🤭");
    }

    else if (clickCount === 2) {
        btn.style.transform = "translateX(-200px)";
        alert("Sebelum lanjut, nyalain musik dulu ya 🎵");
    }

    else if (clickCount === 3) {
        btn.style.transform = "translateX(100px)";
        alert("Hehehe sabar ya bestie 🤭");
    }

    else {
alert("Lanjut ke puzzle 🧩");
    }
});
