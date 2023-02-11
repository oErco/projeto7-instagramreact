export default function Stories() {

    const objStories = [
        { name: "guilhermcos", imgPerfil: "assets/eu.jpg" },
        { name: "J@ake", imgPerfil: "assets/jake-perfil.jpg" },
        { name: "ca.roço", imgPerfil: "assets/caroco-perfil.jpg" },
        { name: "m@r.celine", imgPerfil: "assets/marceline-perfil.jpg" },
        { name: "fio_na", imgPerfil: "assets/fiona-perfil.jpg" },
        { name: "Juju.ba", imgPerfil: "assets/jujuba-perfil1.jpg" },
        { name: "M.O.E", imgPerfil: "assets/moe-perfil.png" },
        { name: "E_p.g.p.", imgPerfil: "assets/elefante-psiquico-de-guerra-pre-historico.jpg" },
        { name: "Gun_ter", imgPerfil: "assets/gunter-perfil.jpg" },
        { name: "arco-íris", imgPerfil: "assets/perfil-arcoiris.jpg" },
        { name: "Urso.doido", imgPerfil: "assets/urso-perfil.jpg" },
        { name: "prcss.fogo", imgPerfil: "assets/princesa-fogo.jpg" }   
    ]

    function individualStories(props) {

        return (
            <div className="individual-stories">
                <div className="user-perfil-stories">
                    <img src="assets/stories_background.jpg" alt="" />
                    <div className="stories-img">
                        <img src={props.imgPerfil} alt="" />
                    </div>
                </div>
                <div className="username-stories">
                    <h2>{props.name}</h2>
                </div>
            </div>
        )
    }

    const componenteStories = objStories.map(individualStories)


    return (
        <div className="container-stories">
            <div className="seta">
                <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
            {componenteStories}

        </div>
    )
}