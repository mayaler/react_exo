// Grâce à l'affichage de collections :
// Faire un tableau contenant les prénoms des filles de la classe
// Afficher la liste des filles de la classe
import PropTypes from 'prop-types';

const Stagiaires = (props) => {
    const { lesStagiaires } = props

    //Autre façon de faire -> stocker dans une constante qu'on appelle à l'affichage
    // const affichageStagiaires = lesStagiaires.map(stagiaire => <li>{stagiaire}</li>);

    return (
        <ul>
            {lesStagiaires.map((stagiaire, index) => <li key={index}>{stagiaire}</li>)}
            {/* {affichageStagiaires} */}
        </ul>
    )

}

Stagiaires.propTypes = {
    //Pour indiquer que les Stagiaires est un tableau de chaines de caractères
    lesStagiaires : PropTypes.arrayOf(PropTypes.string)
}

export default Stagiaires;