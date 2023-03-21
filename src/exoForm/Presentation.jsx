import { useState } from "react";

const Presentation = () => {
    // const [ lastname, setLastName ] = useState();
    // const [ firstname, setFirstName ] = useState();
    // const [ birthdate, setBirthDate ] = useState();
    // const [ backEnd, setBackEnd ] = useState();
    // const [ frontEnd, setFrontEnd ] = useState();
    // const [ comment, setComment ] = useState();
    // const [ loveFormation, setLoveFormation ] = useState(false);

    //Avec le hook global, donnerait ceci : 
    const [inputs, setInputs ] = useState({
        lastname : '',
        firstname : '',
        birthdate : '',
        backEnd : '',
        frontEnd : '',
        comment : '',
        loveFormation : false
    })

    const [ presentation , setPresentation ] = useState("");

    const changerValeurInput = (event) => {
        //Grâce au destructuring, on récupère tout ce dont on a besoin de event.target
        const { name, type, value, checked } = event.target
        //On modifie inputs
        setInputs({
            //On construit un nouvel objet avec toutes les propriétés déjà présentes dans inputs
            ...inputs,
            //On verifie si le type de l'input est une checkbox :
            //Si oui, on va chercher la valeur dans checked, sinon, on va chercher la valeur dans value
            [name] : (type === "checkbox") ? checked : value
        });
    }

    const validerForm = (event) => {
        //1ère étape primordiale : 
        event.preventDefault();

        //On fait nos vérif avant de remplir ou non presentation
        //Si l'input n'est pas undefined ET qu'il n'est pas vide
        if(inputs.lastname && inputs.lastname !== ''  
            && inputs.firstname && inputs.firstname !== ''
            && inputs.birthdate && inputs.birthdate !== ''
            && inputs.backEnd && inputs.backEnd !== ''
            && inputs.frontEnd && inputs.frontEnd !== '') {
                //Comme birthdate contient une chaine, je vais devoir le transformer en date pour faire mon calcul d'âge
                let bd = new Date(inputs.birthdate);
                let today = new Date();
                let age = today.getFullYear() - bd.getFullYear();

                //Si tous les champs requis sont complétés on peut modifier presentation
                setPresentation(`Bonjour,
                je m'appelle ${inputs.firstname} ${inputs.lastname}, j'ai ${age} ans cette année.
                Ma technologie back-end préférée est ${inputs.backEnd} et ma technologie front-end préférée est ${inputs.frontEnd} !
                ${ (inputs.comment && inputs.comment != "") ? "Voici mes commantaires sur la formation " + inputs.comment  : "Je n'ai pas de commentaires à faire sur la formation"}
                ${ ( inputs.loveFormation ) ? "J'aime trop la formation ♥" : "Envie de crever 😐" }
                `)
                //On vérifie avec une ternaire si y'a des commentaires et si pas vide
                //On vérifie avec une ternaire si loveFormation est coché ou non
        }
    }

    return (
        <div>
            <form onSubmit={validerForm} >
                <div>
                    <label htmlFor="lastname">Nom</label>
                    {/* <input id="lastname" type="text" onChange={(event) => {setLastName(event.target.value)}} required /> */}
                    <input name="lastname" id="lastname" type="text" onChange={changerValeurInput} required />
                </div>

                <div>
                    <label htmlFor="firstname">Prénom</label>
                    {/* <input id="firstname" type="text" onChange={(event) => {setFirstName(event.target.value)}} required /> */}
                    <input name="firstname" id="firstname" type="text" onChange={changerValeurInput} required />
                </div>

                <div>
                    <label htmlFor="birthdate">Date de Naissance</label>
                    {/* <input id="birthdate" type="date" onChange={(event) => {setBirthDate(event.target.value)}} required /> */}
                    <input name="birthdate" id="birthdate" type="date" onChange={changerValeurInput} required />
                </div>

                <div>
                    <label htmlFor="backend">Back-End</label>
                    {/* <select id="backend" required onChange={(event) => {setBackEnd(event.target.value)}}> */}
                    <select name="backEnd" id="backend" required onChange={changerValeurInput}>
                        <option value="" hidden>Choisissez votre techno Back-End pref</option>
                        <option value="php">Php</option>
                        <option value="nodejs">NodeJs</option>
                        <option value="dotnet">.Net</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="frontend">Front-End</label>
                    {/* <select id="frontend" required onChange={(event) => {setFrontEnd(event.target.value)}}> */}
                    <select name="frontEnd" id="frontend" required onChange={changerValeurInput}>
                        <option value="" hidden>Choisissez votre techno Front-End pref</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">Javascript</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="com">Commentaire</label>
                    {/* <textarea id="com" onChange={(event) => {setComment(event.target.value)}} /> */}
                    <textarea name="comment" id="com" onChange={changerValeurInput} />
                </div>

                <div>
                    {/* <input id="loveforma" type="checkbox" onChange={(event) => {setLoveFormation(event.target.checked)}} /> */}
                    <input name="loveFormation" id="loveforma" type="checkbox" onChange={changerValeurInput} />
                    <label htmlFor="loveforma">♥ La formation</label>
                </div>


                <input type="submit" value="Valider" />
            </form>

            <div>
                {presentation}
            </div>
        </div>
    )
}

export default Presentation;