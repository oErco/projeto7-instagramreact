import { useState } from "react";

export default function Posts() {

    const objPost = [
        { perfilImg: "assets/jake-perfil.jpg", username: "J@ke", imgPost: "assets/312856.png", legend: "Estudando pois não nasci herdeiro.", likedByImg: "assets/perfil-arcoiris.jpg", likedByName: "arco-íris", likedByqt: 854 },
        { perfilImg: "assets/finn-perfil.jpg", username: "finn.o.humano", imgPost: "assets/finn-post.jpg", legend: "Formei!!! #dev #driven", likedByImg: "assets/jujuba-perfil.jpg", likedByName: "Jujub@", likedByqt: 984 },
        { perfilImg: "assets/urso-perfil.jpg", username: "Urso.doido", imgPost: "assets/bear.jpg", legend: "Bicicleta pequena da por#%@", likedByImg: "assets/jujuba-perfil.jpg", likedByName: "Jujub@", likedByqt: 457 }
    ]


    function IndividualPosts(props) {

        const [heart, setHeart] = useState(true);
        const [save, setSave] = useState(true);
        const [likes, setLikes] = useState(props.likedByqt)

        return (
            <div data-test="post" class="container-post">

                <div class="top-post">
                    <div class="img-top-post"><img src={props.perfilImg} alt="" /></div>
                    <div class="direita-top-post">
                        <div class="username">
                            <h1>{props.username}</h1>
                        </div>
                        <div><ion-icon name="ellipsis-horizontal"></ion-icon></div>
                    </div>
                </div>
                <img data-test="post-image" onDoubleClick={() => heart ? (setLikes(likes + 1), setHeart(false)) : null} class="img-post" src={props.imgPost} alt="" />
                <div class="bottom-post">
                    <div class="icons">
                        <div class="left-bottom-post">
                            {heart ? <ion-icon data-test="like-post" onClick={() => { setLikes(likes + 1); setHeart(!heart); }} class="ion-bot" name="heart-outline" /> : <svg data-test="like-post" onClick={() => { setLikes(likes - 1); setHeart(!heart); }} xmlns="http://www.w3.org/2000/svg" class="ion-bot-liked" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" /></svg>}
                            <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="right-bottom-post">
                            {save ? <ion-icon data-test="save-post" onClick={() => { setSave(!save); }} class="icon-save" name="bookmark-outline" /> : <ion-icon data-test="save-post" onClick={() => setSave(!save)} class="icon-save" name="bookmark" />}
                        </div>
                    </div>
                    <div class="coment-post">
                        <img src={props.likedByImg} alt="" />
                        <p>curtido por&nbsp;<span>{props.likedByName}</span>&nbsp;e&nbsp;<span>outras {likes} pessoas</span></p>
                    </div>
                    <div class="legenda">
                        <p><span class="username-legenda">{props.username}</span>
                            <span class="text-legenda"> {props.legend}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const componentPost = objPost.map(IndividualPosts);



    return (
        <div>
            {componentPost}
        </div>
    )
}

function changeLike() {

}