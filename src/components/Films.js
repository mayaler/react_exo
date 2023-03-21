// Faire un tableau contenant des objets qui représentent un film
// (titre, réalisateur, image)
// Afficher des cards pour chacun des films avec leurs infos
import PropTypes from 'prop-types'
import './Films.css'

//Composant qui s'occupe d'afficher UN film
const FilmCard = (props) => {
    const {affiche, titre, realisateur} = props;

    return (
        <div className="film-card">
            <img src={affiche} alt="affiche du film"/>
            <p className='film-title'>{titre}</p>
            <p>De : {realisateur}</p>
        </div>
    )
}

FilmCard.propTypes = {
    affiche : PropTypes.string,
    titre : PropTypes.string,
    realisateur : PropTypes.string
}

const Films = (props) => {
    const { listeFilms} = props

    return (
        <div className='films-container'>
            { listeFilms.map(film => <FilmCard key={film.id} affiche={film.affiche} titre={film.titre} realisateur={film.realisateur} /> ) }
        </div>
    )
} 

Films.propTypes = {
    //Pour définir que listeFilms est un tableau d'objets dont la shape est 
    //id : number
    //affiche : string
    //realisateur : string
    //titre : string
    listeFilms : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        affiche : PropTypes.string,
        realisateur : PropTypes.string,
        titre : PropTypes.string
    }))
}

export default Films;