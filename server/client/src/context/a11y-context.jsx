import { createContext, useState } from "react";

const A11yContext = createContext()

const A11yProvider = ({children}) => {
    const [expanded, setExpanded] = useState(false)
    
    function onToggle () {
        setExpanded(prev => !prev)
    }

    return (
        <A11yContext.Provider value={{expanded, onToggle}}>
            {children}
        </A11yContext.Provider>
    )
}

export {A11yContext, A11yProvider}