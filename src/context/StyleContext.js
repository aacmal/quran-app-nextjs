import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import setTheme from "../utils/theme";

export const StyleContext = createContext()

export default function StyleProvider({children}){
    const [style, setStyle] = useLocalStorage('style', {
        fontSize: 32,
        fontFace: 'Al Qalam',
        theme: 'default',
        readMode: 'translated'
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

    function updateTheme(theme){
        setStyle((currentStyle) => ({...currentStyle, theme: theme}))
    }

    function setReadMode(mode){
        setStyle((currentStyle) => ({...currentStyle, readMode: mode}))
    }

    function setFontFace(fontFace){
        setStyle((currentStyle) => ({...currentStyle, fontFace: fontFace}))
    }

    useEffect(() => {
        setTheme(style?.theme)
    }, [style?.theme])

    return (
        <StyleContext.Provider
            value={{
                increaseFontSize,
                decreaseFontSize,
                fontFace: style?.fontFace,
                setFontFace,
                currentFontSize: style?.fontSize,
                updateTheme,

                setReadMode,
                readMode: style?.readMode
            }}
        >
            <div className="pb-20">
                {children}
            </div>
        </StyleContext.Provider>
    )

}
