
import { useState, useEffect } from "react"

export default function SwitchTheme () {

    const [theme, setTheme] = useState("light");
    const colorTheme = theme === "light" ? "dark" : "light";
    
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme);
        root.classList.add(theme)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme], colorTheme)

    return [colorTheme, setTheme];
}