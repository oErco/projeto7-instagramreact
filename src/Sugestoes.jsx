export default function Sugestoes() {

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

    return componentesSugestao;

}