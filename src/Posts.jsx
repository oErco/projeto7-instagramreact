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

        function likeAndHeart(){
            setLikes(likes + 1); 
            setHeart(false);
        }

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
                <img data-test="post-image" onDoubleClick={() => heart ? likeAndHeart() : null} class="img-post" src={props.imgPost} alt="" />
                <div class="bottom-post">
                    <div class="icons">
                        <div class="left-bottom-post">
                            {
                                heart 
                                ? 
                                <ion-icon data-test="like-post" 
                                onClick={() => { setLikes(likes + 1); setHeart(!heart); }} 
                                class="ion-bot" name="heart-outline" /> 
                                : 
                                <ion-icon
                                    data-test='like-post'
                                    onClick={() => {
                                        setLikes(likes - 1);
                                        setHeart(!heart);
                                    }} 
                                    class='ion-bot-liked' 
                                    name='heart'
                                />
                            }
                            <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="right-bottom-post">
                            {save ? <ion-icon data-test="save-post" onClick={() => { setSave(!save); }} class="icon-save" name="bookmark-outline" /> : <ion-icon data-test="save-post" onClick={() => setSave(!save)} class="icon-save" name="bookmark" />}
                        </div>
                    </div>
                    <div class="coment-post">
                        <img src={props.likedByImg} alt="" />
                        <p>curtido por&nbsp;<span>{props.likedByName}</span>&nbsp;e&nbsp;<span>outras <span data-test="likes-number">{likes}</span> pessoas</span></p>
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