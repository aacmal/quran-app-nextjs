import { createContext, useState } from "react";

export const TopbarContext = createContext()

export const TopbarContextProvider = ({children}) => {
    const [showTopbar, setShowTopbar] = useState(true) 

    return (
        <TopbarContext.Provider
            value={{
                showTopbar, 
                setShowTopbar,
            }}
        >
            {children}
        </TopbarContext.Provider>
    )
}
