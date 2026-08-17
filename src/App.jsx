import { Route, Routes } from "react-router"
import { HomeScreen } from "./componentes/Screen/HomeScreen/HomeSreen"
import { ListContact } from "./componentes/Context/ListContact"
import { ChatScreen } from "./componentes/Screen/ChatScreen/ChatScreen"



function App(){
    

    return(
        
        <div className="app">
    
        <Routes>
            <Route element={<ListContact/>}>
            <Route path={'/'} element={<HomeScreen/>}/>
            <Route path={'/contact/:contact_id'} element={<ChatScreen/>}/>
            </Route>
            
        </Routes>

        </div>

        
    )    
}


export default App