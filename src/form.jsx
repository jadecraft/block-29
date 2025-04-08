 import { useState } from "react";
 
 function Form () {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")

    async function handleSubmit (e) {
        e.preventDefault()
        const player = {
            name, breed
        }
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2411-FTB-ET-WEB-PT/players", {method: "POST", headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(player)}
          );
          console.log(response)
          //if (response) {window.location.reload()}
    }

    return (
        <form onSubmit={handleSubmit}>
     <label htmlFor="name">Name :</label>
    <input type="text" id="name" name="name" onChange={event => setName(event.target.value)}/>
    <label htmlFor="breed">Breed :</label>
    <input type="text" id="breed" name="breed"onChange={event => setBreed(event.target.value)}/>
    <input type="submit" value="Submit"/>
        </form>
    )
 }

 export default Form;