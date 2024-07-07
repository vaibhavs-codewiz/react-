import {useContext,createContext} from "react"

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})
export default ThemeContext

export const ThemeProvider = ThemeContext.Provider;
//this will be used to wrap those component which uses values of context variable.

export function useTheme(){
    return useContext(ThemeContext);
}
//extra export of function enable us not to use multiple import in component file
//of usecontext hook and contextprovider . 

//here by default values are provided to context variable and it can be variable and 
//also can be function , it is not compulsory to provide the value in variable using hook
//only .