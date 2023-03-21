// Faire un composant qui prend un age et un prénom en props. Grâce à l'affichage conditionnel :
//  - s'il est mineur, accès interdit : On lui montre une image -18 et un message l'avertissant qu'il n'a pas accès avec son prénom
//  - s'il est majeur, des photos de bières s'affichent + message avec prénom
import PropTypes from "prop-types"

const Mineur = (props) => {
    const {age, prenom} = props

    if(age < 18) {
        return (
            <div>
                <img src="./images/pegi18.png" alt="Logo Pegi 18" />
                <p>Désolé {prenom} mais vous n'êtes pas autorisé à accéder à ce contenu</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <img src="./images/biere.png" alt="Image de bières"/>
                <p>Rafraichissantes {prenom} ?</p>
            </div>
        )
    }

}

//Sécurité de types pour age (en number) et prenom (en string)
Mineur.propTypes = {
    age : PropTypes.number,
    prenom : PropTypes.string
}

export default Mineur