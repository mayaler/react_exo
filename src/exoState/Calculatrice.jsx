import { useState } from "react"
//#region  Enoncé
// Faire un composant Calculette :


 
// Il se compose 
//     d'une balise p avec nombre1
//     un boutton pour augmenter la valeur de nombre1
//     une balise p avec nombre2
//     un boutton pour augmenter la valeur de nombre2
// (Reprenez le principe de l'exo compteur pour augmenter nombre1 et nombre2)

// En dessous
//     un boutton +
//     un boutton -
//     un boutton *
//     un boutton /
//     un p avec le résultat de nombre1 (opérateur choisi) nombre2
//#endregion

//#region Composant
const Calculatrice = () => {
    const [nombre1, setNombre1] = useState(0)
    const [nombre2, setNombre2] = useState(0)
    const [resultat, setResultat] = useState()

    const incrNb1 = () => {
        setNombre1(prev => prev + 1)
        //Comme ça, au clic sur n'importe quel bouton incr ou reset, resultat vaudra undefined et notre message [en attente d'un calcul...]
        setResultat(undefined)
    }
    const incrNb2 = () => {
        setNombre2(prev => prev + 1)
        setResultat(undefined)
    }
    const resetNb1 = () => {
        setNombre1(0)
        setResultat(undefined)
    }
    const resetNb2 = () => {
        setNombre2(0)
        setResultat(undefined)
    }
    const add = () => {
        setResultat(nombre1+nombre2)
    }
    const sub = () => {
        setResultat(nombre1-nombre2)
    }
    const mul = () => {
        setResultat(nombre1*nombre2)
    }
    const div = () => {
        setResultat(nombre1/nombre2)
    }

    return (
        <div>
            <h2>Calculatrice</h2>
            {/* Première partie : Deux nombres qui s'incrémentent de 1 au clic */}
            <div>
                <p>{nombre1}</p>
                <button onClick={incrNb1}>Incrémenter Nb1</button>
                <button onClick={resetNb1}>Reset Nb1</button>

                <p>{nombre2}</p>
                <button onClick={incrNb2}>Incrémenter Nb2</button>
                <button onClick={resetNb2}>ResetNb2</button>
            </div>
            {/* Deuxième partie : Les calculs */}
            <div>       
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={mul}>*</button>
                {
                    //Comme la division par 0 est impossible, on cache le bouton si nombre2 est égal à 0 et on l'affiche s'il est différent de 0
                    (nombre2 !== 0) &&
                    <button onClick={div}>/</button>
                }
                {
                    (resultat) ?
                    <p> Résultat = {resultat}</p>
                    :
                    <p>[ en attente d'un calcul...]</p>
                }
            </div>
        </div>
    )
}
//#endregion


export default Calculatrice