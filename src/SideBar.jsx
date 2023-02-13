import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {

    const componentesSugestao = Sugestoes()

    return (
        <div class="container-side-bar">
            <Usuario />
            <div class="container-top-sugestoes">
                <div class="top-left-sugestoes">
                    <p>Sugestões para você</p>
                </div>
                <div class="top-right-sugestoes">
                    <p>Ver tudo</p>
                </div>
            </div>
            <div class="container-bottom-sugestoes">
                {componentesSugestao}
            </div>
            <div class="final-text-side-bar">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma <br></br><br></br>© 2022 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )

}