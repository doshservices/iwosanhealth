import "./App.css"
import { useState, useEffect } from "react";

const Cookies = () => {
    const [close, setClose] = useState(JSON.parse(localStorage.getItem("IWOSAN_COOKIE_CONSENT") || true));
    useEffect(() => {
        localStorage.setItem("IWOSAN_COOKIE_CONSENT", JSON.stringify(close));
    }, [close]);

    useEffect(() => {
        const data = localStorage.getItem("IWOSAN_COOKIE_CONSENT");
        if (data !== null) setClose(JSON.parse(data));
    }, [close]);

    return (
        <>
            {close && (
                <div className="cookie__wrapper">
                    <div>
                        <div className="cookie__text">
                            <h2>This site uses cookies</h2>
                            <p>
                                We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking "Accept All", you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.
                            </p>
                        </div>
                        <button onClick={() => setClose(!close)} className="cookie__btn">Accept All</button>
                    </div>
                </div>
            )}
        </>

    )
}
export default Cookies;