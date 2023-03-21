//Faire un composant Bonjour
// Il se compose d'un paragraphe dans lequel est affiché une variable message contenant "En attente d'un bonjour" tant qu'on n'a cliqué sur aucun bouton
// En dessous, 3 buttons, un qui remplit le message avec un bonjour en français

import { useState } from "react";

// (à vous de choisir les deux autres langues :) )
const Bonjour = () => {
    //On crée une variable locale message
    //Avec sa fonction pour la modifier setMessage
    //Grâce à useState de react
    //Et on l'initialise avec une valeur par défaut "En attente d'un bonjour"
    const [message, setMessage] = useState("En attente d'un bonjour...")

    const bjrFr = () => {
        //Comme on n'a pas besoin de la valeur précédente, on peut directement mettre la nouvelle valeur de message en paramètre du setMessage
        setMessage("Bonjour")
    }
    const bjrEn = () => {
        setMessage("Hello")
    }
    const bjrEs = () => {
        setMessage("Hola")
    }

    return (
        <>
            <p>{message}</p>
            <button onClick={bjrFr}>Bonjour en Français</button>
            <button onClick={bjrEn}>Bonjour en Anglais</button>
            <button onClick={bjrEs}>Bonjour en Espagnol</button>
        </>
    )

}

export default Bonjour;