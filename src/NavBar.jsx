import { useState } from "react";

export default function Topo() {

    const [width, setWidth] = useState(window.innerWidth);

    function resizeFunction() {
        setWidth(window.innerWidth)
    }


    window.addEventListener("resize", resizeFunction);


    let topo;
    if (width >= 615) {
        return (
            <div className="externo-top-bar-desktop">
                <div className="top-bar-desktop">
                    <div className="top-bar-left-desktop">
                        <ion-icon className="icon-instagram" name="logo-instagram"></ion-icon>
                        <div class="top-left-line"></div>
                        <img class="logo-instagram" src="assets/logo.png" alt="logo Instagram" />
                    </div>

                    <div className="caixa-pesquisa">
                        <input class="pesquisar" value="Pesquisar" type="text" />
                    </div>

                    <div className="top-bar-right-desktop">
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="ion-bot" name="compass-outline"></ion-icon>
                        <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
                        <ion-icon class="ion-bot" name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div class="top-bar-mobile">
                <ion-icon class="icon-instagram" name="logo-instagram"></ion-icon>
                <img class="logo-instagram" src="assets/logo.png" alt="logo Instagram" />
                <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
            </div>
        )
    }


}

/*
if (mobile) {
    return (
        <div class="top-bar-mobile">
            <ion-icon class="icon-instagram" name="logo-instagram"></ion-icon>
            <img class="logo-instagram" src="assets/logo.png" alt="logo Instagram" />
            <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
        </div>
    )
}
else {
    return (
        <div class="externo-top-bar-desktop">
            <div class="top-bar-desktop">
                <div class="top-bar-left-desktop">
                    <ion-icon class="icon-instagram" name="logo-instagram"></ion-icon>
                    <div class="top-left-line"></div>
                    <img class="logo-instagram" src="assets/logo.png" alt="logo Instagram" />
                </div>

                <div class="caixa-pesquisa">
                    <input class="pesquisar" value="Pesquisar" type="text" />
                </div>

                <div class="top-bar-right-desktop">
                    <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="ion-bot" name="compass-outline"></ion-icon>
                    <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
                    <ion-icon class="ion-bot" name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

*/