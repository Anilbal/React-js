import React, { useContext } from "react";


export const contextApi=React.createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=contextApi.Provider

export default function useTheme(){
    return useContext(contextApi)
}