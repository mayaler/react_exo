import { useState } from "react";


//component -> fonction
const Calculatrice2 = () => {
    //logique/code
    //On a besoin de useState pour gérer l'état local de chaque input, on va donc créer une variable par input
    //Ces variables n'existeront que dans le composant (d'où état local)
    const [ nombre1 , setNombre1 ] = useState();
    const [ nombre2 , setNombre2 ] = useState();
    //La première fois qu'on arrive sur la page, le select affiche déjà la première option +, par contre, notre opérateur, n'a pas encore de valeur puisque le onChange n'a pas encore été déclenché. 2 façons de régler ceci :
    //Soit on met une option vide au départ, forçant l'utilsateur à changer la valeur du select
    //Soit, comme ici, on met une valeur de départ à notre opérateur, grâce à useState("+")
    const [ operateur, setOperateur ] = useState("+");
    const [ resultat, setResultat ] = useState("");
    const [ errorMessage , setErrorMessage ] = useState("");

    const soumettreForm = (event) => {
        //Annule le comportement par défaut de l'event, 
        //Très utile sur un submit, pour empêcher l'envoi du formulaire et le rechargement de la page
        event.preventDefault();

        setErrorMessage(""); //Remise à 0 du message d'erreur
        // console.log(operateur);
        switch( operateur ){
            case "+" :
                //Toute valeur récupérée d'un input est en string, il faudra donc les transformer en int avant de faire l'addition, sinon, on concatène deux chaines
                setResultat(parseInt(nombre1) + parseInt(nombre2));
                break;
            case "-" :
                setResultat(nombre1 - nombre2);
                break;
            case "x" :
                setResultat(nombre1 * nombre2)
                break;
            case "/" :
                //La division par 0 est impossible :
                if(parseInt(nombre2) === 0) {
                    //alert("Division par 0 impossible !")
                    setErrorMessage("Division par 0 impossible !")
                }
                else {
                    setResultat(nombre1 / nombre2)
                }
                break;
            default :
                alert("Opérateur invalide !");
                break;
        }
    
    }

    //rendu
    return (
        <div>
            <form onSubmit={soumettreForm}>
                <label htmlFor="nb1">Nombre 1 : </label>
                {/* Pour lier l'input à la variable de state nombre1, on doit relier l'évènement onChange (chaque fois qu'on va modifier l'input) à une fonction, qui va appeler la méthode setNombre1 qui permet de modifier la variable de state nombre1
                On va lui fournir event.target.value :
                event -> toutes les infos de l'évènement qui vient d'être déclenché
                target -> la cible qui a déclenché cet event (notre input ici)
                value -> la valeur de la target, donc de l'input */}
                <input id="nb1" type="text" onChange={(event) => {setNombre1(event.target.value)}} pattern="[0-9.]*"/>

                <label htmlFor="op">Opérateur : </label>
                <select id="op" onChange={(event) => {setOperateur(event.target.value)}}>
                    {/* <option value="" hidden>Choisissez un opérateur</option> */}
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="/">/</option>
                </select>
                
                <label htmlFor="nb2">Nombre 2 : </label>
                <input id="nb2" type="text" onChange={(event) => {setNombre2(event.target.value)}} pattern="[0-9.]*"/>

                <input type="submit" value="Calculer" />

                <span>{errorMessage}</span>

                <input type="text"  value={resultat} readOnly/>
            </form>
        </div>
    )


}

export default Calculatrice2;