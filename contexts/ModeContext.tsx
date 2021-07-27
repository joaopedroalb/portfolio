import { createContext, useState, ReactNode, useContext } from 'react';

type ModeContextData = {
    isDark:boolean
    toggleMode: () => void;
};


export const ModeContext = createContext({} as ModeContextData)

type ModeContextProviderProps = {
    children:ReactNode
}

export function ModeContextProvider({children}:ModeContextProviderProps) {

    const [isDark, setIsDark] = useState(true);

    function toggleMode(){
        setIsDark(!isDark);
    }


    return (
        <ModeContext.Provider value={{
            isDark,
            toggleMode}}>

            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () =>{
    return useContext(ModeContext)
}