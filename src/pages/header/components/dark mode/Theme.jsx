import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";



import "./Theme.css"

export const Theme = ({ addClass }) => {
    const { isDark, setIsDark } = useContext(UserContext);

    useEffect(() => {
        const root = document.getElementById("root");

        isDark ? root.classList.add("dark") : root.classList.remove("dark");

    }, [isDark])

    return (
        <div className={`${addClass}`} >
            <div className="theme">
                <input type="checkbox" id={`${addClass}`} className="checkbox"
                    onChange={() => setIsDark(!isDark)}
                    checked={isDark} />

                <label htmlFor={`${addClass}`} className="bgTheme">
                    <div className="ball">
                        {isDark ? <FontAwesomeIcon icon={faMoon} className="fa" /> : <FontAwesomeIcon icon={faSun} className="fa" />}
                    </div>
                </label>

            </div>
        </div>
    )

}
