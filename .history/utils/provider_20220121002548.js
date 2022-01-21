import { useContext, createContext, useState } from "react";

const initialStates = {
    theme:'default',
    setTheme:()=>{}
}

const MyThemeContext = createContext(initialStates)

export default function MyThemeProvider({children}){
    const [theme, setTheme] = useState('light');
    return <MyThemeProvider value={{theme, setTheme}}>
        {children}
    </MyThemeProvider>
}

export const useTheme = () => {
    return useContext(MyThemeProvider);
}