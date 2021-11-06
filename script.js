function numberCards() {
    let cards = 0
    checkiandj:
    while (cards < 4 || cards > 14) {
        cards = parseInt(prompt("Coloque o número de cartas que quer jogar (entre 4 e 14, número par)"))
        let resto = cards % 2
        if (resto != 0) {
            cards = 0
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
        inner.innerHTML = inner.innerHTML + `        
        <div class="parrot" data-identifier="card" onclick="clic(this)">
            <div class ="front-face face" data-identifier="front-face">
                <img src="images/front.png" alt="front">
            </div>
            <div class ="back-face face" data-identifier="back-face">       
                <${cardsSorted[c]}>
            </div>
        </div>
        `
        c++
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}
function clic(x) {
    if (x.classList.contains('matched') == false) {
        times++
        let end = false
        const QueryParrot = document.querySelectorAll('.parrot')
        i++
        if (i == 2){
            i=0
            if (firstInner == x.lastElementChild.innerHTML) {
                alert('acertou')
                first.parentElement.classList.add('matched')
                x.classList.add('matched')
                for (let c = 0; c < QueryParrot.length; c++) {
                    if (QueryParrot[c].classList.contains('matched')){
                        end = true
                    }
                    else{
                        end = false
                        break
                    }
                }
                if (end) {
                    alert(`Você ganhou em ${times} jogadas!`)                
                }
            }
            else {
                alert('errou')
            }
        }
        firstInner = x.lastElementChild.innerHTML
        first = x.lastElementChild
        //console.log(x.firstElementChild)
        //console.log(x.lastElementChild)
    }
}



let images = ['img src="images/bobrossparrot.gif" alt="bobross"','img src="images/bobrossparrot.gif" alt="bobross"','img src="images/explodyparrot.gif" alt="explody"','img src="images/explodyparrot.gif" alt="explody"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/metalparrot.gif" alt="metal"','img src="images/metalparrot.gif" alt="metal"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/unicornparrot.gif" alt="unicorn.gif"','img src="images/unicornparrot.gif" alt="unicorn.gif"']
numberCards()
let i = 0
let firstInner
let first
let times = 0