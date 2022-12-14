import "./App.css"
import { useState } from "react";

const Cookies = () => {
    const [close, setClose] = useState(true)

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