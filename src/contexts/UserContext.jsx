import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [isDark, setIsDark] = useState(true);


    const contextValue = useMemo(() => ({
        isDark, setIsDark
        
    }));

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )

}