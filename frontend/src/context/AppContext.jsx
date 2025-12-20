//createContext creates a global place where data can be stored and used by any component.
// createContext → creates a global store
// useContext → lets components read data from that store
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
// This component:
// wraps your app
// provides global data to all child components

    const navigate = useNavigate();
    const [user,setUser] = useState(null)//null means user is not logged in
    const [isSeller,setIsSeller] = useState(false)//Tracks whether the user is a seller or not

    //(What You Share Globally)
    const value = { navigate,user,setUser,isSeller,setIsSeller }//Everything inside this object becomes accessible anywhere in the app.

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}