let body = document.querySelector('body')

let imagePierreJ1 = document.querySelector('.pierre')
let imagePapierJ1 = document.querySelector('.papier')
let imageCiseauJ1 = document.querySelector('.ciseau')

let imagePierreIa = document.querySelector('.pierreia')
let imagePapierIa = document.querySelector('.papieria')
let imageCiseauIa = document.querySelector('.ciseauia')

let boutonPlay = document.querySelector('.boutonstyle')
let boutonPlayGris = document.querySelector('.boutonbox2')



let imageChoisit = document.querySelector('.choixjoueur')
let imageChoisitIa = document.querySelector('.choixia')

let gagne = document.querySelector('.gagne')
let perdu = document.querySelector('.perdu')
let egalite = document.querySelector('.egalite')

let bandeau = document.querySelector('.bandeau')


let dragPierre = false
let dragPapier = false
let dragCiseau = false

let scoreJ1 = 0
let scoreIa = 0

let divScoreJ1 = document.querySelector('.scorej1')
let divScoreIa = document.querySelector('.scoreia')



let reset = document.querySelector('#reset')


/**   DEBUT DRAG AND DROP*/
/***********************drag */
const dragPierreJ1 = (event) => {

    // console.log(event)
    // console.log(event.target.attributes[0].textContent)

    if (event.target.attributes[0].textContent === 'img/ciseau.svg') {
        
        dragCiseau = true
        dragPierre = false
        dragPapier = false

    } else if (event.target.attributes[0].textContent === 'img/pierre.svg') {
        
        dragPierre = true
        dragCiseau = false
        dragPapier = false

    } else if (event.target.attributes[0].textContent === 'img/papier.svg') {
        
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
    gagne.style.display = 'none'
    perdu.style.display = 'none'
    egalite.style.display = 'none'

}
reset.onclick = resetShifumi

/**   FIN DRAG AND DROP ET DU RESET */

/***********************DEBUT DU PROGRAMME DE LANCEMENT */
let choixIa = ''

const iaZero = () => {

    imageChoisitIa.innerHTML = `<img src="img/interogation.svg">`
    choixIa = Math.floor(Math.random() * 3)
    setTimeout(() => {
        if (choixIa === 0) {
            imageChoisitIa.innerHTML = `<img src="img/pierre.svg">`
        }
        if (choixIa === 1) {
            imageChoisitIa.innerHTML = `<img src="img/papier.svg">`
        }
        if (choixIa === 2) {
            imageChoisitIa.innerHTML = `<img src="img/ciseau.svg">`
        }
    }, 500)
}

const affichageResultat = () => {
    /*******VICTOIRE */

    if (dragCiseau === true && choixIa === 1) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`

    } else if (dragPierre === true && choixIa === 2) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`
    } else if (dragPapier === true && choixIa === 0) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`
    }
    /*****EGALITE */

    if (dragCiseau === true && choixIa === 2) {
        egalite.style.display = 'block'

    } else if (dragPierre === true && choixIa === 0) {
        egalite.style.display = 'block'
    } else if (dragPapier === true && choixIa === 1) {
        egalite.style.display = 'block'
    }
    /******DEFAITE */
    if (dragCiseau === true && choixIa === 0) {
        perdu.style.display = 'block';
        scoreIa += 1
        
        divScoreIa.innerHTML = `${scoreIa}`
    } else if (dragPierre === true && choixIa === 1) {
        perdu.style.display = 'block';
        scoreIa += 1
        
        divScoreIa.innerHTML = `${scoreIa}`
    } else if (dragPapier === true && choixIa === 2) {
        perdu.style.display = 'block';
        scoreIa += 1
        
        divScoreIa.innerHTML = `${scoreIa}`
    }

}

const lancement = () => {
    
    iaZero()
    setTimeout(affichageResultat, 500)
    setTimeout(resetShifumi, 1200)

}

boutonPlay.onclick = lancement