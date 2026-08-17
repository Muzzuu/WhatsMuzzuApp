
import { useContext } from "react"
import { useContact } from "../../Hooks/useContact"
import { ChatsListScreen } from "../ChatsListScreen/ChatsListScreen"
import { ContactContex } from "../../Context/ListContact"


function HomeScreen(){

    const { createContact } = useContext(ContactContex)

    return(
        <div>
            <ChatsListScreen/>
        </div>
    )

}

export {HomeScreen}