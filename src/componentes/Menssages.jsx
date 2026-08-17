import { useContext, useState } from "react"
import { ContactContex } from "./Context/ListContact"
import { redirect } from "react-router"
import { ChatHeader } from "./Hooks/ChatHeader"
import { CreateMessageForm } from "./CreateMessageForm"



function MessagesList() {

    const {contact_selected, deleteMessageById, editMessage} = useContext(ContactContex)
    const [State_modal, setModal] = useState(false)

    function OpenModal(){
        setModal(State_modal => true)
    }
    
    function CloseModal (){
        setModal(State_modal => false)
    }



    if (contact_selected.messages.length === 0) {
    return <h2>Aún no hay Mensajes</h2>
    }

        return(
            <div className="message-list">
                {
                contact_selected.messages.map(
                                (messages) =>{
                                    return(
                                        <div key={messages.id} className="message-list-individual">
                                            <span>{messages.sendByMe ? "Tú" : contact_selected.name }: </span>
                                            <span>{messages.content}</span>
                                            <button onClick={() => { deleteMessageById( contact_selected.id, messages.id) }}>Eliminar</button>
                                        </div>
                                    )
                                }
                            )
                }
            </div>
            
        ) 
}




export {MessagesList}