import { useState } from "react"
import PropTypes from 'prop-types'
//rappel si pas installé dans le projet :
//npm install --s prop-types

const Compteur = (props) => {
    //incrementation -> De combien on va augmenter nombre à chaque clic
    const {incrementation} = props

    //nombre -> la valeur qui va augmenter à chaque clic
    const [ nombre , setNombre ] = useState(0)

    const increment = () => {
        //Chaque clique on ajoute incrementation à la valeur de nombre
        //rappel : incrementation = 1 si pas de props entrée
        //sinon incrementation = la valeur entrée dans la props
        setNombre(prev => prev + incrementation)
    }

    const reset = () => {
        //On met 0 dans nombre, osef de sa valeur précédente
        setNombre(0) 
    }


    return (
        <>
            <p>{nombre}</p>
            <button onClick={increment}>Incrémenter</button>
            {
                //#region Commentaires ternaire &&
                //Tertaire où on doit juste gérer le cas où la condition est vraie
                //Ici comme on ne veut rien faire si la condition est fausse, on ne peut pas faire la ternaire classique puisqu'on est obligé de fournir une valeur si oui, une valeur si non
                //#endregion
                (nombre !== 0) &&
                <button onClick={reset}>Reset</button>
                
                //Grâce à ça ↑ on évite de faire ce genre de ternaire 💩
                // (nombre !== 0) ? 
                // <button onClick={reset}>Reset</button>
                // :
                // <></>     
            }
        </>
    )

}

//On définit pour le composant Compteur que si aucune valeur n'est fournie pour la props incrementation, celle ci vaudra 1
//Comme ça on est sûres qu'elle ne sera jamais undefined
Compteur.defaultProps = {
    incrementation : 1
}

//On définit les PropTypes pour ne pas pouvoir entrer autre chose qu'un nombre pour la props incrémentation :
//propTypes -> Celles du composant
//PropTypes -> l'objet importé de la librairie qui nous permet de définir les types
Compteur.propTypes = {
    incrementation : PropTypes.number
}

export default Compteur