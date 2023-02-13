import { useState } from "react";

export default function Usuario() {

    const [username, setUsername] = useState("cool.BMO");
    const [imgPerfil, setImgPerfil] = useState("assets/BMO-perfil.jpg");

    return (
        <div className="user-side-bar">
                <img onClick={() => setImgPerfil(prompt("digite a url da nova imagem de perfil:"))} src={imgPerfil} alt="" />
                <div class="user-text">
                    <p>{username}</p>
                    <ion-icon onClick={() => setUsername(prompt("Qual seu novo nome de usuário?"))} name="pencil-sharp"></ion-icon>
                </div>
            </div>
    )
}

