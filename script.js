const playground = document.getElementById("playground");
const target = document.getElementById("target");

const randomX = Math.random() * (playground.offsetWidth - target.offsetWidth);
const randomY = Math.random() * (playground.offsetHeight - target.offsetHeight);


target.style.top = randomY + "px";
target.style.left = randomX + "px";

function position() {
    const randomX = Math.random() * (playground.offsetWidth - target.offsetWidth);
    const randomY = Math.random() * (playground.offsetHeight - target.offsetHeight);

    target.style.top = randomY + "px";
    target.style.left = randomX + "px";
}

// ETAPE 2: MINUTEUR 

setInterval(() => {position()
}, 1000);

// ETAPE 3: SCORE


let score = 0;

function performance() {
    score = score + 1;
    document.querySelector("span").innerHTML = score;
}

target.addEventListener('click', () => {
    performance()
});


//ETAPE 3 time out 








