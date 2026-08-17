import {createContext, useState } from "react"
import { useContact } from "../Hooks/useContact"
import { Outlet, useParams } from "react-router"
import { memo } from "react"


const ContactContex = createContext()
const server_contacts = [
    {
        id: 1,
        name: "Catita",
        number: 1125669840,
        state: "Todas las hojas son del viento <3",
        lastTime:"Hoy a las 23:46hs",
        online: false ,
        profilepicture: "/public/profilePictureCata.png",
        messages : 
        [
            {
                id: 1,
                sendByMe: false,
                content:"holiis!!"
            },

            {
                id: 2,
                sendByMe: false,
                content:"Nos vemos hoy??"
            },

            {
                id: 3,
                sendByMe: true,
                content:"Holiss"
            },

            {
                id: 4,
                sendByMe: true,
                content:"Dalee! Hoy puedo despues de comer"
            },


        ]
    },

    {
        id: 2,
        name: "Beluuu",
        number: 1145886275,
        state: "°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･",
        lastTime:"",
        online: true ,
        profilepicture: "/public/profilePictureBelu.png",
        messages : 
        [
            {
                id: 1,
                sendByMe: true,
                content:"Amigaaaaa, no sabes el chisme que tengo"
            },

            {
                id: 2,
                sendByMe: false,
                content:"CONTAMEEEE"
            },

            {
                id: 3,
                sendByMe: true,
                content:"Pilar se separo"
            },

            {
                id: 4,
                sendByMe: false,
                content:"No lo puedo creer"
            },

        ]
    },

    {
        id: 3,
        name: "Abuee",
        number: 1184995610,
        state: "Trabajando",
        lastTime:"Hoy a las 23:55hs",
        online: false ,
        profilepicture: "/public/profilePictureAbuela.png",
        messages : 
        [
            {
                id: 1,
                sendByMe: false,
                content:"Hola, como estas?"
            },

            {
                id: 2,
                sendByMe: true,
                content:"Hola abu, todo bien, vos?"
            },
        ]
    },

    {
        id: 4,
        name: "Agus<3",
        number: 1184665310,
        state: "Aguante riveerr!!",
        lastTime:"",
        online: true ,
        profilepicture: "/public/profilePictureAgus.png",
        messages : 
        [
            {
                id: 1,
                sendByMe: false,
                content:"Te extraño"
            },

            {
                id: 2,
                sendByMe: true,
                content:"Yo tambien:("
            },
        ]
    },

]

function ListContact(){

    const [contacts, setContacts] = useState(server_contacts)

    const {contact_id} = useParams()
    const {message_id} = useParams()

    let contact_selected = null
    let menssage_selected = null

    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }
    if (message_id && contact_id ) {
    const message_selected = contactss.messages.find(
        (message) => message.id === Number(message_id)
    )

    message_id_found = message_selected ? message_selected.id : null
}

    function createContact (name, number){
        const newContact = 
    {
        id: Date.now(),
        name: name ,
        number: number ,
        state: "Ocupado",
        lastTime:"",
        online: true ,
        profilepicture: "/public/profilePictureCata.png",
        messages : []

    }

    let newListContacts = [... contacts, newContact]

    setContacts(newListContacts)
    }


    function createMessage(content, sendByMe ){

        const messageModificate = contacts.map(
            (contact) => {
                if(contact.id === Number(contact_id)){
                    const newMessage = {
                        id: contact.messages.length + 1 ,
                        sendByMe: sendByMe,
                        content: content
                    }
                    contact.messages.push(newMessage)
                }

                return contact
            }
        )

        setContacts(messageModificate)

    }


    function deleteMessageById(contact_id, message_id){

        
            const messageModificate =  contacts.map(
                (contact) =>{
                    if(contact.id === Number(contact_id)){
                        const message_index = contact.messages.findIndex(
                            (message) => {
                                return message.id === Number(message_id)
                            }
                        )
                        contact.messages.splice(message_index, 1)
                    }

                    return contact
                }
            )
            
            setContacts(messageModificate)
        
    }

    function deleteChat(){

        const contactsUpdated = contacts.map((contact) => {
    if (contact.id === Number(contact_id)) {
        return {
            ...contact,
            messages: []
        }
    }
    return contact
    })

        setContacts(contactsUpdated)

    }

    function deleteContact(){

            const listContactModificate = contacts.filter(
            (contact) => contact.id !== Number(contact_id) 
)

        setContacts(listContactModificate)         
    }

    const provider_value = {
        contacts: contacts,
        createContact,
        createMessage,
        deleteMessageById,
        deleteChat,
        deleteContact,
        menssage_selected,
        contact_selected
    }

    return(
        <ContactContex.Provider value={provider_value}>
            <Outlet/>
        </ContactContex.Provider>

    )

}

export{ListContact, ContactContex}