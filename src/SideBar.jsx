export default function SideBar() {

    const objSideBar = [
        {
            imgSrc: "assets/BMO-perfil.jpg",
            username: "cool.BMO",
            name: "Be MOre"
        },
        {
            imgSrc: "assets/c3po-perfil.jpg",
            username: "C.3.P.O",
            name: "C3PO"
        },
        {
            imgSrc: "assets/r2d2-perfil.jpg",
            username: "R.2.D.2",
            name: "R2D2"
        },
        {
            imgSrc: "assets/wall-e-perfil.jpg",
            username: "wall_e",
            name: "Wall-e"
        },
        {
            imgSrc: "assets/harley-perfil.jpg",
            username: "ex.quinzel",
            name: "Harley Quinn"
        },
        {
            imgSrc: "assets/widow-perfil.jpg",
            username: "b.widow",
            name: "widow"
        }
    ]

    function individualSugestao(props) {

        return (
            <div class="sugestao">
                <img src={props.imgSrc} alt="" />
                <div class="username-sugestao">
                    <p>{props.username}</p>
                </div>
                <div class="name-sugestao">
                    <p>{props.name}</p>
                </div>
                <div class="follow">Seguir</div>
            </div>
        )
    }

    const componentesSugestao = objSideBar.map(individualSugestao);


    return (
        <div class="container-side-bar">
            <div class="user-side-bar">
                <img src="assets/BMO-perfil.jpg" alt="" />
                <div class="user-text">
                    <p>cool.BMO</p>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class="sub-user-text">
                    <p>Be MOre</p>
                </div>
            </div>
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