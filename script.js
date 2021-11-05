function numberCards() {
    let cards = 0
    while (cards < 4 || cards > 14) {
        cards = parseInt(prompt("Coloque o número de cartas que quer jogar (entre 4 e 14)"))
        let resto = cards % 2
        if (resto != 0) {
            cards++
        }
    }

    let cardsSorted = []
    for (let i = 0; i < cards; i++) {
        cardsSorted.push(images[i]);
    }
    cardsSorted = cardsSorted.sort(comparador)

    let c = 0
    let inner = document.querySelector(".parrots")
    inner.innerHTML = ""
    while (c !== cards) {
        inner.innerHTML = inner.innerHTML + `        <div class="parrot">
            <${cardsSorted[c]}>
        </div>
        `
        c++
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}



let images = ['img src="images/bobrossparrot.gif" alt="bobross"','img src="images/bobrossparrot.gif" alt="bobross"','img src="images/explodyparrot.gif" alt="explody"','img src="images/explodyparrot.gif" alt="explody"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/metalparrot.gif" alt="metal"','img src="images/metalparrot.gif" alt="metal"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/unicornparrot.gif" alt="unicorn.gif"','img src="images/unicornparrot.gif" alt="unicorn.gif"']
//images = images.sort(comparador)
numberCards()
console.log(cardsSorted)