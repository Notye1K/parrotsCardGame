function numberCards() {
    let cards = 0
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
    x.classList.add('flip')
    if(start == 0){
        idTimer = setInterval(timer,1000)
        start = 1
    }
    if (x.classList.contains('matched') == false) {
        let end = false
        i++
        if (i == 2){
            i=0
            if (firstInner == x.lastElementChild.innerHTML && first.parentElement != x) {
                first.parentElement.classList.add('matched')
                x.classList.add('matched')
                times += 2
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
                    setTimeout(message,601) 
                    clearInterval(idTimer)
                    
                }
            }
            else if (x != first.parentElement) {
                times += 2
                setTimeout(wrong,1000,x,first)
                
            }
        }
        firstInner = x.lastElementChild.innerHTML
        first = x.lastElementChild
        //console.log(x.firstElementChild)
        //console.log(x.lastElementChild)
    }
}
function timer() {
    sec++
    document.querySelector(".timer").innerHTML = sec
}
function wrong (x,y) {
    y.parentElement.classList.remove('flip')
    x.classList.remove('flip')
}
function message() {
    alert(`Você ganhou em ${sec} segundos e com ${times} jogadas!`)
    let ask = prompt('quer jogar de novo? s/n').toLowerCase()
    if (ask[0] == 's'){
        location.reload()
    }
}
  


let images = ['img src="images/bobrossparrot.gif" alt="bobross"','img src="images/bobrossparrot.gif" alt="bobross"','img src="images/explodyparrot.gif" alt="explody"','img src="images/explodyparrot.gif" alt="explody"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/fiestaparrot.gif" alt="fiesta"','img src="images/metalparrot.gif" alt="metal"','img src="images/metalparrot.gif" alt="metal"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/revertitparrot.gif" alt="reverti"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/tripletsparrot.gif" alt="triplets"','img src="images/unicornparrot.gif" alt="unicorn.gif"','img src="images/unicornparrot.gif" alt="unicorn.gif"']
numberCards()
let i = 0
let firstInner
let first
let times = 0
let sec = 0
let start = 0
let idTimer
const QueryParrot = document.querySelectorAll('.parrot')