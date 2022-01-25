let body = document.querySelector('body')

let imagePierreJ1 = document.querySelector('.pierre')
let imagePapierJ1 = document.querySelector('.papier')
let imageCiseauJ1 = document.querySelector('.ciseau')

let imagePierreIa = document.querySelector('.pierreia')
let imagePapierIa = document.querySelector('.papieria')
let imageCiseauIa = document.querySelector('.ciseauia')

let boutonPlay = document.querySelector('.boutonstyle')

let imageChoisit = document.querySelector('.choixjoueur')
let imageChoisitIa = document.querySelector('.choixia')

let gagne = document.querySelector('.gagne')
let perdu = document.querySelector('.perdu')
let egalite = document.querySelector('.egalite')

let bandeau = document.querySelector('.bandeau')

let choixFinal = ''
let dragPierre = false
let dragPapier = false
let dragCiseau = false

let scoreJ1 = 0
let scoreIa = 0



let reset = document.querySelector('#reset')


/**   DEBUT DRAG AND DROP POUR L IMAGE PIERRE = met la var valeurPierre sur 2 si déposé au bon endroit */
/***********************drag */
const dragPierreJ1 = (event) => {

    // console.log(event)
    // console.log(event.target.attributes[0].textContent)

    if (event.target.attributes[0].textContent === 'img/ciseau.svg') {
        console.log('ciseau')
        dragCiseau = true
        dragPierre = false
        dragPapier = false

    }
    else if (event.target.attributes[0].textContent === 'img/pierre.svg') {
        console.log('pierre')
        dragPierre = true
        dragCiseau = false
        dragPapier = false

    }
    else if (event.target.attributes[0].textContent === 'img/papier.svg') {
        console.log('papier')
        dragCiseau = false
        dragPierre = false
        dragPapier = true

    } else return

}


/*******************************drop */


const dropPierreJ1 = (event) => {


    if (event.target.attributes[0].textContent === 'choixjoueur') {

        if (dragPierre = true && dragCiseau === false && dragPapier === false) {
            imageChoisit.innerHTML = `<img src="img/pierre.svg">`
        }
        if (dragPapier === true && dragCiseau === false && dragPierre === false) {
            imageChoisit.innerHTML = `<img src="img/papier.svg">`
        }
        if (dragCiseau === true && dragPierre === false && dragPapier === false) {
            imageChoisit.innerHTML = `<img src="img/ciseau.svg">`
        }
    }

}

body.ondragleave = dropPierreJ1
body.ondrag = dragPierreJ1

/**************************RESET */

const resetShifumi = () => {
    dragPierre = false
    dragPapier = false
    dragCiseau = false
    choixIa = 3
    imageChoisit.innerHTML = ``
    imageChoisitIa.innerHTML = ``


}
reset.onclick = resetShifumi

/**   FIN DRAG AND DROP ET DU RESET */

let choixIa = ''
const lancement = () => {

        choixIa = Math.floor(Math.random() * 3)
        if (choixIa === 0) {
            imageChoisitIa.innerHTML = `<img src="img/pierre.svg">`
        }
        if (choixIa === 1) {
            imageChoisitIa.innerHTML = `<img src="img/papier.svg">`
        }
        if (choixIa === 2) {
            imageChoisitIa.innerHTML = `<img src="img/ciseau.svg">`
        }

        /**EGALITE */

        if (dragCiseau === true && choixIa === 2)
        {                    
            egalite.style.display = 'block'
        }
        else if (dragPierre === true && choixIa === 0)
        {                    
            egalite.style.display = 'block'
        }
        else if (dragPapier === true && choixIa === 1)
        {                    
            egalite.style.display = 'block'
        }

        /*****VICTOIRE */
        



    
        setTimeout(resetShifumi, 2000)



    console.log(choixIa)
}

boutonPlay.onclick = lancement









const testConsole = () => {
    console.log("pierre" + dragPierre)
    console.log("papier" + dragPapier)
    console.log("ciseau" + dragCiseau)


}

body.onclick = testConsole