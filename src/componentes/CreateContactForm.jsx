import { useState } from "react"

function ModalCreateContact(){
    const [State_modal, setModal] = useState(false)

    return(State_modal)

}

function CreateContactForm({createContact}){

const [State_modal, setModal] = useState(false)

function handleCreateContact (event) {
    event.preventDefault()
    const formAct = event.target
    const newName_field = formAct.newName
    const newNumber_field = formAct.newNumber
    createContact(newName_field.value, newNumber_field.value)


    formAct.reset()
    }  

    function OpenModal(){
        setModal(State_modal => true)
    }
    
    function CloseModal (){
        setModal(State_modal => false)
    }
    return(
        <div >
            {
                State_modal
                ?<div className="form-create-contact">
                    <form onSubmit={handleCreateContact}>
                    <button onClick={CloseModal}>X</button>
                    <label htmlFor="newName">Crear Contacto</label>
                    <textarea name="newName" id="newName"></textarea>
                    <textarea name="newNumber" id="newNumber"></textarea>
                    <button type="submit">Crear</button>
                    </form>
                </div>
                : <div>
                    <button onClick={OpenModal}>+</button>
                </div>
            }
            
        </div>

    )

}

export{CreateContactForm}

