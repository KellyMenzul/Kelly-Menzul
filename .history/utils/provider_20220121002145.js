import { useContext, createContext, useState } from "react";

const initialStates = {
    theme:'default'
}

const MyThemeProvider = createContext(initialStates)

export default function MyThemeProvider({children}){
    const [theme, setTheme] = useState(initialStates.theme);
    return <MyThemeProvider value={{theme, setTheme}}>
        {children}
    </MyThemeProvider>
}

export const theme = use