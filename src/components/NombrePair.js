// Faire un composant qui prend un nombre en props, grâce à l'affichage conditionnel,
// afficher s'il est pair ou impair.

import PropTypes from 'prop-types';

const NombrePair = (props) => {
    const { nombre } = props;

    //Avec le if
    //8 % 2 -> 0
    //5 % 2 -> 1
    // if(nombre % 2 === 0){
    //     return (
    //         <p>Le nombre {nombre} est pair !</p>
    //     )
    // }
    // else {
    //     return (
    //         <p>Le nombre {nombre} est impair !</p>
    //     )
    // }

    //Autre méthode : La ternaire (meilleure pour ce cas d'utilisation)
    // return (
    //     <>
    //         { (nombre % 2 === 0) ? 
    //         //si oui 
    //             <p>Le nombre {nombre} est pair !</p>
    //         :
    //         //si non
    //             <p>Le nombre {nombre} est impair !</p>
    //         }
    //     </>
    // )

    //Pareil mais opti
    return (
        <p>Le nombre {nombre} est { (nombre % 2 === 0 ) ? 'pair' : 'impair' } !</p>
    )

}

//Définir que nombre n'accepte que le type number
NombrePair.propTypes = {
    nombre : PropTypes.number
}

export default NombrePair;