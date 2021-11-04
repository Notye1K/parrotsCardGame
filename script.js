function numberCards() {
    let cards = 0
    while (cards < 4 || cards > 14) {
        cards = parseInt(prompt("Coloque o número de cartas que quer jogar (entre 4 e 14)"))
    }
    let c = 0
    let inner = document.querySelector(".parrots")
    inner.innerHTML = ""
    while (c !== cards) {
        inner.innerHTML = inner.innerHTML + `        <div class="parrot">
            <img src="images/front.png" alt="front">
        </div>
        `
        c++
    }
}
numberCards()