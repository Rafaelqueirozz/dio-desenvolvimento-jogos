const emojis = [ // Guardar todos os emojis
    "😀", "😀", "🤣", "🤣", "😎", "😎", "🤑", "🤑", "🐱‍👤", "🐱‍👤", "🐷", "🐷", "🎃", "🎃", "🚒", "🚒"
];

let openEmojis = []; // Guardar os elementos que forem se abrindo.

let shuffleEmojis = emojis.sort(() => (
    Math.random() > 0.5 ? 2 : -1
    ));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick() {
    if (openEmojis.length < 2) {
        this.classList.add("boxOpen");
        openEmojis.push(this)
    }
    
    if (openEmojis.length == 2) {
        setTimeout(checkMatch, 500);
    }
};

function checkMatch() {
    if (openEmojis[0].innerHTML === openEmojis[1].innerHTML) {
        openEmojis[0].classList.add("boxMatch");
        openEmojis[1].classList.add("boxMatch");
    } else {
        openEmojis[0].classList.remove("boxOpen");
        openEmojis[1].classList.remove("boxOpen");      
    }

    openEmojis = [];

    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
        alert("Você venceu")
    }
};