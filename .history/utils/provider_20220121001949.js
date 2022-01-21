import { useContext, createContext, useState } from "react";

const initialStates = {
    theme:{}
}

const MyThemeProvider = createContext(initialStates)

export default function MyThemeProvider({children}){
    const [theme, setTheme] = useState
    return <MyThemeProvider value={{}}>
        {children}
    </MyThemeProvider>

}