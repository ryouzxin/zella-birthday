let clickCount = 0;

const btn = document.getElementById("openBtn");
const message = document.getElementById("message");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlayed = false;

btn.addEventListener("click", function(){

    // Klik pertama
    if(clickCount === 0){
        btn.style.transform = "translateX(180px)";
        message.innerText = "Eits, belum bisa 🤭";
        clickCount++;
    }

    // Klik kedua
    else if(clickCount === 1){
        btn.style.transform = "translateX(-180px)";
        message.innerText = "Pencet musiknya dulu ya 🎵";
        musicBtn.style.display = "inline-block";
        clickCount++;
    }

    // Kalau musik belum diputar jangan lanjut
    else if(clickCount === 2 && !musicPlayed){
        message.innerText = "Musiknya dulu ya bestie 🎵";
    }

    // Klik setelah musik diputar
    else if(clickCount === 2 && musicPlayed){
        btn.style.transform = "translateX(80px)";
        message.innerText = "Hehehe sabar ya bestie 🤭";
        clickCount++;
    }

    // Lanjut puzzle
    else{
        message.innerText = "🧩 Lanjut ke puzzle...";
    }
});

musicBtn.addEventListener("click", function(){
    bgMusic.play();

    musicPlayed = true;

    musicBtn.style.display = "none";

    message.innerText = "Nah gitu dong, sekarang lanjut 😌✨";
});
