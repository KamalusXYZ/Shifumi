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

let sonVictoire = new Audio('./media/good.mp3')
let sonDefaite = new Audio('./media/wrong.mp3')



let reset = document.querySelector('#reset')


/**   DEBUT DRAG AND DROP*/
/***********************drag */
const dragJ1 = (event) => {

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


const dropJ1 = (event) => {

    // console.log(event)
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

body.ondragleave = dropJ1
body.ondrag = dragJ1

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





// const iaVersion1 = () => {

//     imageChoisitIa.innerHTML = `<img src="img/interogation.svg">`

//     choixJoueurOften = TableauChoixJoueur[Math.floor(Math.random()*TableauChoixJoueur.length)]
//     console.log("Le joueur joue le plus souvent "+choixJoueurOften)



//     setTimeout(() => {
//         if (choixIaV1 === 0) {
//             imageChoisitIa.innerHTML = `<img src="img/pierre.svg">`
//         }
//         if (choixIa === 1) {
//             imageChoisitIa.innerHTML = `<img src="img/papier.svg">`
//         }
//         if (choixIa === 2) {
//             imageChoisitIa.innerHTML = `<img src="img/ciseau.svg">`
//         }
//     }, 500)
// }



let TableauChoixJoueur = [0,1,2]
let choixJoueurOften = ""
let choixIa = ''

const iaZero = () => {

    imageChoisitIa.innerHTML = `<img src="img/interogation.svg">`

    choixJoueurOften = TableauChoixJoueur[Math.floor(Math.random()*TableauChoixJoueur.length)]
    console.log("Le joueur joue le plus souvent  "+choixJoueurOften)
    if (choixJoueurOften === 0){choixIa = 1}
    if (choixJoueurOften === 1){choixIa = 2}
    if (choixJoueurOften === 2){choixIa = 0}

    
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
    /***!!ATTENTION PENSER A MODIFIER DANS LE IF LA VARIABLE SUIVANT LA VERSION DE */
    /*******VICTOIRE */

    if (dragCiseau === true && choixIa === 1) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`
        sonVictoire.play()
        TableauChoixJoueur.push(2)

    } else if (dragPierre === true && choixIa  === 2) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`
        sonVictoire.play()
        TableauChoixJoueur.push(0)

    } else if (dragPapier === true && choixIa  === 0) {
        gagne.style.display = 'block';
        scoreJ1 += 1
        divScoreJ1.innerHTML = `${scoreJ1}`
        sonVictoire.play()
        TableauChoixJoueur.push(1)
    }
    /*****EGALITE */

    if (dragCiseau === true && choixIa  === 2) {
        egalite.style.display = 'block'
        TableauChoixJoueur.push(2)

    } else if (dragPierre === true && choixIa  === 0) {
        egalite.style.display = 'block'
        TableauChoixJoueur.push(0)


    } else if (dragPapier === true && choixIa  === 1) {
        egalite.style.display = 'block'
        TableauChoixJoueur.push(1)
        
    }
    /******DEFAITE */
    if (dragCiseau === true && choixIa  === 0) {
        perdu.style.display = 'block';
        scoreIa += 1
        sonDefaite.play()
        divScoreIa.innerHTML = `${scoreIa}`
        TableauChoixJoueur.push(2)
    } else if (dragPierre === true && choixIa  === 1) {
        perdu.style.display = 'block';
        scoreIa += 1
        sonDefaite.play()
        divScoreIa.innerHTML = `${scoreIa}`
        TableauChoixJoueur.push(0)
    } else if (dragPapier === true && choixIa  === 2) {
        perdu.style.display = 'block';
        scoreIa += 1
        sonDefaite.play()
        divScoreIa.innerHTML = `${scoreIa}`
        TableauChoixJoueur.push(1)
    }

}

const lancement = () => {

    iaZero()
    setTimeout(affichageResultat, 500)
    setTimeout(resetShifumi, 1200)

}

boutonPlay.onclick = lancement

const consoleTesteur = ()=>{

        console.log("tableau:" + TableauChoixJoueur)
        console.log("taille du tableau"  + TableauChoixJoueur.length)
        
        
        
}
document.onclick = consoleTesteur