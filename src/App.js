import logo from './logo.svg';
import './App.css';
import Personne from './components/Personne';
import NombrePair from './components/NombrePair';
import Mineur from './components/Mineur';
import Stagiaires from './components/Stagiaires';
import Films from './components/Films';
import Produits from './components/Produits';
import Navbar from './exoRestau/Navbar';
import Footer from './exoRestau/Footer';
import Sushis from './exoRestau/Shushis';
import HorlogeManger from './exoEvent/HorlogeManger';
import Compteur from './exoState/Compteur';
import Bonjour from './exoState/Bonjour';
import Calculatrice from './exoState/Calculatrice';
import Calculatrice2 from './exoForm/Calculatrice2';
import Presentation from './exoForm/Presentation';

function App() {
  //Exo Liste simple
  const listStagiaire = ["Christel", "Eleanor", "Nasra", "Maya", "Soumaya", "Zahra", "Chaïmae", "Thaïs", "Yousra", "Ikram", "Jennifer", "Gaëlle"];

  const listStagiaire2 = ["Aurélien", "Aude", "Khun"];

  //Exo liste d'objets
  const films = [
    {id : 1, titre : "Forrest Gump", realisateur : "Robert Zemeckis", affiche : "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg" },
    {id : 2, titre : "La liste de Schindler", realisateur : "Steven Spielberg", affiche : "https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg"},
    {id : 3, titre : "La ligne verte", realisateur : "Frank Darabont", affiche : "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg"}
  ]

  //Exo slide
  const produits = [
    { id : 1, nom : "Pomme", prix : 2, promo : false },
    { id : 2, nom : "Poire", prix : 2.50, promo : true },
    { id : 3, nom : "Orange", prix : 1.50, promo : false },
    { id : 4, nom : "Banane", prix : 0.80, promo : true }
  ]

  //Exo restaurant 
  const sushis = [
    { id : 1, nom : "Maki Saumon", image : "./images/maki_saumon.webp", prix : 5.5 , promo : false , prixpromo : 5 },
    { id : 2, nom : "Maki Thon", image : "./images/maki_thon.webp", prix : 5.9, promo : true, prixpromo : 5},
    { id : 3, nom : "Gyoza Poulet", image : "./images/gyozas_poulet.webp", prix : 4.5, promo : false, prixpromo : 4},
    { id : 4, nom : "Sushi Saumon", image : "./images/sushi_saumon.webp", prix : 4, promo : false, prixpromo : 3.80},
    { id : 5, nom : "Sushi Thon", image : "./images/sushi_thon.webp", prix : 5, promo : true, prixpromo : 4.50},
    { id : 6, nom : "Sushi Daurade", image : "./images/sushi_daurade.webp", prix : 5.80, promo : false, prixpromo : 5.50}
  ]

  return (
    <div className="App">
      {/* <Personne nom="Aude" age={33} />
      <Personne nom="Aurélien" age={33} />
      <Personne nom="Inconnu" /> */}

      {/* Exo conditions */}
      {/* <NombrePair nombre={8}/>
      <NombrePair nombre={7}/>
      <Mineur age={50} prenom='Jean-Luc'/>
      <Mineur age={15} prenom='Timothée'/> */}

      {/* Exo collections */}
      {/* <Stagiaires lesStagiaires={listStagiaire}/>
      <Stagiaires lesStagiaires={listStagiaire2}/>

      <Films listeFilms={films} /> */}

      {/* <Produits listeProduits={produits} /> */}


      {/* Exo restaurant */}
      {/* <Navbar />
      <Sushis listeSushis={sushis} />
      <Footer /> */}
      {/* Fin exo restaurant */}

      {/* Exo Event */}
      {/* <HorlogeManger prenom="Aude"/> */}

      {/* Exos State */}
      {/* <Bonjour /> */}
      {/* Si je fournis la props incrementation, elle prendra la valeur renseignée */}
      {/* <Compteur incrementation={10} /> */}
      {/* Si je ne fournis pas la props, le composant Compteur va automatiquement le mettre à 1 grâce au DefaultProps*/}
      {/* <Compteur /> */}
      {/* <Calculatrice /> */}

      {/* Exos Form */}
      {/* <Calculatrice2 /> */}
      <Presentation />


    </div>
  );
}

export default App;
