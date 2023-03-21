import PropTypes, { number } from 'prop-types'
import './Produits.css'

//Le composant qui représente un produit : 
const Produit = (props) => {
    const {nom, prix, promo} = props

    return (
        <div>
            <p>{nom}</p>
            { (promo ) ? <p className='promo'>{prix} €</p> :
                <p>{prix} €</p>
        }
        </div>
    )
}

Produit.propTypes = {
    nom : PropTypes.string,
    prix : PropTypes.number
}

//Le composant qui affiche la liste des produits en utilisant le composant qui représente un produit

const Produits = (props) => {
    const { listeProduits } = props

    return (
        <div>
            { listeProduits.map(produit => <Produit key={produit.id} nom={produit.nom} prix={produit.prix} promo={produit.promo} />) }
        </div>
    )
}

Produits.propTypes = {
    listeProduits : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        nom : PropTypes.string,
        prix : PropTypes.number
    }))
}

export default Produits;