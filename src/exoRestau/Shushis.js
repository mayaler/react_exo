
//Sushi ne me servant que dans le composant Sushis, je peux le créer ici et ne pas le rendre exportable puisqu'il ne sert que pour l'affichage de chaque sushi dans le composant Sushis

import PropTypes, { number } from 'prop-types'
//npm install --s prop-types -> Si nouveau projet pour installer la librairie

import './Sushi.css'

const Sushi = (props) => {
    const { promo, image, nom, prix, prixpromo } = props

    //const afficherSelection = function() {} 
    //Pareil : rappel function() {} = () => {}
    const afficherSelection = () => {
        console.log(`Vous avez sélectionné ${nom}`);
        //IMPOSSIBLE, je ne peux modifier aucune des props, juste les consulter pour les afficher
        //On va apprendre à changer ça avec le chapitre suivant :)
        nom = 'pouet';
    }


    if (!promo) {
        return (
            <div className='sushi-card'>
                <div className='sushi-card-content'>

                    <img src={image} />
                    <p>{nom}</p>
                    <p>{prix} €</p>
                    <button onClick={afficherSelection}>Selectionner</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='sushi-card'>
                <div className='sushi-card-content'>
                    <p className='pastille-promo'>Promo</p>
                    <img src={image} />
                    <p>{nom}</p>
                    <p><span className='promo'>{prix} €</span> <span>{prixpromo} €</span></p>
                    <button onClick={afficherSelection}>Selectionner</button>
                </div>
            </div>
        )
    }

}

Sushi.propTypes = {
    promo: PropTypes.bool,
    image: PropTypes.string,
    nom: PropTypes.string,
    prix: PropTypes.number,
    prixpromo: PropTypes.number
}


const Sushis = (props) => {
    //On récupère la liste des sushis de App.js via la prop listeSushis
    const { listeSushis } = props

    return (
        <div className='sushis-main'>
            <div className='sushi-cards-container'>
                {/* Pour chacun des sushis, on affiche le composant Sushi */}
                {listeSushis.map(sushi => <Sushi key={sushi.id} promo={sushi.promo} image={sushi.image} nom={sushi.nom} prix={sushi.prix} prixpromo={sushi.prixpromo} />)}
            </div>
            <div>
                <img className='manekimage' src="./images/ManekinekoGigaTriste.jpg" alt="maneki" />
            </div>
        </div>
    )

}

Sushis.propTypes = {
    //PropTypes.array permet de définir que c'est un tableau mais pas précis sur le contenu
    //PropTypes.arrayOf permet de définier que c'est tableau DE... (il faudra définir de quoi entre les parenthèses)
    //PropTypes.shape permet de définir la forme des objets contenus dans le tableau
    listeSushis: PropTypes.arrayOf(PropTypes.shape({
        id: number,
        promo: PropTypes.bool,
        image: PropTypes.string,
        nom: PropTypes.string,
        prix: PropTypes.number,
        prixpromo: PropTypes.number
    }))
}

export default Sushis