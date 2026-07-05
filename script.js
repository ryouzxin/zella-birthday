let clickCount = 0;

const btn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const popup = document.getElementById("popup");

let musicStarted = false;

function showPopup(text){

    popup.innerText = text;

    popup.style.top = "20px";

    setTimeout(()=>{
        popup.style.top = "-100px";
    },2500);

}

btn.addEventListener("click",()=>{

    btn.classList.add("bounce");

    setTimeout(()=>{
        btn.classList.remove("bounce");
    },450);

    // klik pertama
    if(clickCount === 0){

        showPopup("🤭 Eits, belum dulu dong~");

        clickCount++;

    }

    // klik kedua
    else if(clickCount === 1){

        if(!musicStarted){

            showPopup("🎵 Sebelum lanjut, nyalain musik dulu ya~");

            musicBtn.style.display = "block";

        }
        else{

            window.location.href="puzzle.html";

        }

    }

});

musicBtn.addEventListener("click",()=>{

    bgMusic.play();

    musicStarted = true;

    musicBtn.style.display = "none";

    btn.innerHTML = "🧩 Mulai Puzzle";

    showPopup("✨ Nah gitu dong~");

});
