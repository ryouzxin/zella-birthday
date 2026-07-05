let clickCount = 0;

const btn = document.getElementById("openBtn");
const message = document.getElementById("message");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlayed = false;

btn.addEventListener("click", function(){

    clickCount++;

    // Klik pertama
    if(clickCount === 1){
        btn.style.transform = "translateX(220px)";
        message.innerText = "Eits, belum bisa 🤭";
    }

    // Klik kedua
    else if(clickCount === 2){

        // Kalau musik belum diputar
        if(!musicPlayed){
            btn.style.transform = "translateX(-220px)";
            message.innerText = "Pencet musiknya dulu ya 🎵";
            musicBtn.style.display = "inline-block";

            // Supaya hitungan klik tidak bertambah
            clickCount--;
        }
    }

    // Klik ketiga
    else if(clickCount === 3){
        btn.style.transform = "translateX(120px)";
        message.innerText = "Hehehe sabar ya bestie 🤭";
    }

    // Klik keempat
    else{
        message.innerText = "Lanjut ke puzzle 🧩";

        // nanti diganti:
        // window.location.href = "puzzle.html";
    }

});

musicBtn.addEventListener("click", function(){

    bgMusic.play();

    musicPlayed = true;

    musicBtn.style.display = "none";

    message.innerText = "Nah gitu dong, sekarang lanjut 😌✨";

});
