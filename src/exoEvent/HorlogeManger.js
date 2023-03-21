
const HorlogeManger = (props) => {
    const { prenom } = props
    //Si je crée la date ici, elle se crée quand j'arrive sur l'application pour la première fois
    //Ex : Date créée : 26/01/2023 13:58:14   <- ne bougera jamais
    //const today = new Date()

    const horloge = () => {
        //Si je crée la date dans ma fonction, elle se recrée chaque fois que je clique sur le button, on aura donc la date mise à jour à chaque 
        //Ex : Date créée au premier click : 26/01/2023 13:58:14 
        //Si je reclique 10 secondes après : 26/01/2023 13:58:24
        const today = new Date()

        console.log(`Bonjour ${prenom}, aujourd'hui nous sommes ${today.toLocaleDateString()}`);
    }
    

    const foodChange = (event) => {
        //event.target : On recupère la cible qui a déclenché l'event (le select)
        //Sur cette target, on récupère la valeur (.value)
        //console.log(event);

        let meal = event.target.value
        
        console.log(`Ce midi ${prenom} va manger ${meal} `);
    }

    return (
        <div>
            <button id="mybutton" onClick={horloge}>Horloge Parlante</button>

            <select onChange={foodChange}>
                <option value="une pizza">Pizza</option>
                <option value="un burger">Burger</option>
                <option value="un sandwish">Sandwish</option>
            </select>
        </div>
    )
}

export default HorlogeManger