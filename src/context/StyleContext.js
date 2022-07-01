import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const StyleContext = createContext()

export default function StyleProvider({children}){
    const [style, setStyle] = useLocalStorage('style', {
        fontSize: 32,
        fontFace: 'Lato',
        theme: 'default'
    })

    function increaseFontSize(){
        if(style.fontSize < 60){
            setStyle((currentStyle) => ({...currentStyle, fontSize: currentStyle.fontSize+5}))
        }
    }

    function decreaseFontSize(){
        if(style.fontSize > 28){
            setStyle((currentStyle) => ({...currentStyle, fontSize: currentStyle.fontSize-5}))
        }
    }

    return (
        <StyleContext.Provider
            value={{
                increaseFontSize,
                decreaseFontSize,
                currentFontSize: style?.fontSize
            }}
        >
            {children}
        </StyleContext.Provider>
    )

}
