import { useContext } from "react"
import { ContactContex } from "../../Context/ListContact"
import { useParams } from "react-router"
import { MessagesList } from "../../Menssages"
import { ChatsListScreen } from "../ChatsListScreen/ChatsListScreen"
import { CreateMessageForm } from "../../CreateMessageForm"
import { ChatHeader } from "../../Hooks/ChatHeader"




function FoundContact(){


}

function ChatScreen (){

    const {contacts, createMessage, contact_selected} = useContext(ContactContex)   
    const {contact_id} = useParams()

    const contact_found = contacts.find(
        (elemento) =>{
            return elemento.id === Number(contact_id)
        }
    )

if(!contact_found){
        return(
            <div>
                <ChatsListScreen/>
                <h2>Contacto No existente</h2>
            </div>
        )
    } 

    return(
        <div className="chat-app-container">
            <aside className="chat-sidebar">
                <ChatsListScreen />
            </aside>
            <main className="chat-main-area">
                <ChatHeader />
                <MessagesList />
                <CreateMessageForm createMessage={createMessage} />
            </main>
        </div>
        
        
        
    )
}

export {ChatScreen}