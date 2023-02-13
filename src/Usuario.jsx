import { useState } from "react";

export default function Usuario() {

    const [username, setUsername] = useState("cool.BMO");
    const [imgPerfil, setImgPerfil] = useState("assets/BMO-perfil.jpg");

    return (
        <div className="user-side-bar">
                <img data-test="profile-image" onClick={() => changeImg(setImgPerfil)} src={imgPerfil} alt="" />
                <div class="user-text">
                    <p data-test="name">{username}</p>
                    <ion-icon data-test="edit-name" onClick={() => changeName(setUsername)} name="pencil-sharp"></ion-icon>
                </div>
            </div>
    )
}

function changeName(setUsername){
    const name = prompt("digite a url da nova imagem de perfil:");

    if (name){
        setUsername(name);
    }
}

function changeImg(setImgPerfil){
    const image = prompt("digite a url da nova imagem de perfil:");

    if (image){
        setImgPerfil(image);
    }
}

