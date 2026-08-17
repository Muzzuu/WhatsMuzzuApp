import { useContext, useState } from "react"
import { ContactContex } from "../Context/ListContact"
import { useParams } from "react-router"


function ChatHeader (){
    const {contacts, contact_selected, deleteChat, deleteContact} = useContext(ContactContex)
    const handleDeleteContact = () => {

        Swal.fire({
                    title: "¿Estás seguro de que quieres eliminar este contacto?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ce4cbb8e",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar"
                    }).then((result) => {
                    if (result.isConfirmed){
                    Swal.fire({
                        title: "Contacto eliminado!!",
                        icon: "success"
                    })
                    deleteContact(contact_selected)
                    } 
                    });
    }

    const handleDeleteMessage = () => {

        Swal.fire({
                    title: "¿Estás seguro de que quieres eliminar el chat?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ce4cbb8e",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar"
                    }).then((result) => {
                    if (result.isConfirmed){
                    Swal.fire({
                        title: "Chat eliminado",
                        icon: "success"
                    })
                    deleteChat(contact_selected)
                    } 
                    });
        
    }

            return(
                        <div className="ChatHeader">
                                <div className="ChatHeader-info">
                                    <img src={contact_selected.profilepicture} alt="Foto de perfil" />
                                    <h1>{contact_selected.name}</h1>
                                    <p>{contact_selected.online ? "En linea" : `${contact_selected.lastTime}`}</p>
                                </div>
                                <div className="header-actions">
                                    <button onClick={handleDeleteMessage} title="Eliminar Chat">
                                    <span className="material-symbols-outlined">delete</span>
                                    </button>
                                    <ContactInfo />
                                </div>
                        </div>
            )

            function ContactInfo (){

                const[State_ContactModal, setContactModal] = useState(false)

                function OpenModal(){
                    setContactModal(State_ContactModal => true)
                }
    
                function CloseModal (){
                    setContactModal(State_ContactModal => false)
                }
                return(
                    <div className="ContactInfo">
                        {
                            State_ContactModal
                            ?<div className="ContactInfo-Card">
                                <button onClick={CloseModal}>X</button>
                                <img src={contact_selected.profilepicture} alt="Foto de perfil" />
                                <h1>{contact_selected.name}</h1>
                                <p>{contact_selected.number}</p>
                                <p>{contact_selected.state}</p>
                                <button onClick={handleDeleteContact}><span className="material-symbols-outlined">delete</span></button>
                                
                            </div>
                            : <div>
                                <button onClick={OpenModal}><span className="material-symbols-outlined">more_vert</span></button>
                            </div>
                        }
                        
                    </div>
                )
            }


            }
            

    



export {ChatHeader}