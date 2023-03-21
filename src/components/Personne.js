import PropTypes from "prop-types";
import stylePersonne from "./Personne.module.css"

const Personne = (props) => {
    const {nom, age}  = props //Destructuring

    return (
        <div>
            <p className={stylePersonne.bienvenue}>Bienvenue {nom} sur l'application React !</p>
            <p className={stylePersonne.age}>Vous avez {age} ans !</p>
        </div>
    )
}

//Définir les valeurs par défaut :
Personne.defaultProps = {
    age : 18 //Si pas de valeur fournie lors de l'appel de <Personne />, age sera d'office de 18
}

//Définir les types de mes props :
Personne.propTypes = {
    nom : PropTypes.string, //nom sera toujours un string
    age : PropTypes.number //age, un nombre
}

export default Personne;