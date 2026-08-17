import { useContext } from "react"
import { ContactContex } from "../../Context/ListContact"
import { Link } from "react-router"
import { CreateContactForm } from "../../CreateContactForm"



function ChatsListScreen (){

    const {contacts, createContact} = useContext(ContactContex)
    
    return(
        <div className="chats-list">
            <h1>Chats</h1>
            {
                contacts.map(
                    (contact) => {
                        return(
                            <Link to={`/contact/${contact.id}`}  key={contact.id}>
                            <div className="chats-list-individual">
                                <img src={contact.profilepicture} alt="Foto de perfil" />
                                <h1>{contact.name}</h1>
                            </div>
                            </Link>
                        )
                    }
                )

            }
            <CreateContactForm createContact={createContact}/>
        </div>
    )
}

export {ChatsListScreen}