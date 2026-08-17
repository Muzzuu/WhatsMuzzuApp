import { useContext } from "react"
import { MessagesList } from "./Menssages"
import { ContactContex } from "./Context/ListContact"
import { useParams } from "react-router"


function CreateMessageForm ({createMessage}){

    function handleEditMessage (event) {
    event.preventDefault()
    const formAct = event.target
    const newContent_field = formAct.newContent
    createMessage(newContent_field.value, true)

    formAct.reset()
    }  

    return(
        <div className="form-create-message">
                    <form onSubmit={handleEditMessage}>
                    <label htmlFor="newContent"></label>
                    <textarea name="newContent" id="newContent" placeholder="Escribe un mensaje"></textarea>
                    <button type="submit"><span className="material-symbols-outlined">send</span></button>
                    </form>
        </div>

    )



}

export {CreateMessageForm}