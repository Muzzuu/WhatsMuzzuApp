import { useContext, useState } from "react"
import { ContactContex } from "../Context/ListContact"




function useContact(server_contacts = []){
    const {contacts} = useContext(ContactContex)

    const[Contact_state, setContacts] = useState(server_contacts)
    
    function createContact (name, number){
        const newContact = 
    {
        id: Date.now(),
        name: name ,
        number: number ,
        state: "Ocupado",
        lastTime:"",
        online: true ,
        profilepicture: "/./src/images/profilePictureCata.png",
        messages : []

    }

    let newListContacts = [... Contact_state, newContact]

    setContacts(newListContacts)
    }

    return{
        Contact_state,
        createContact
    }

        
}

export{useContact}