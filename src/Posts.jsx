export default function Posts() {

    const objPost = [
        { perfilImg: "assets/jake-perfil.jpg", username: "J@ke", imgPost: "assets/312856.png", legend: "Estudando pois não nasci herdeiro.", likedByImg: "assets/perfil-arcoiris.jpg", likedByName: "arco-íris", likedByqt: "351.485" },
        { perfilImg: "assets/finn-perfil.jpg", username: "finn.o.humano", imgPost: "assets/finn-post.jpg", legend: "Formei!!! #dev #driven", likedByImg: "assets/jujuba-perfil.jpg", likedByName: "Jujub@", likedByqt: "852.102" },
        { perfilImg: "assets/urso-perfil.jpg", username: "Urso.doido", imgPost: "assets/312856.png", legend: "Calor da por#%@", likedByImg: "assets/jujuba-perfil.jpg", likedByName: "Jujub@", likedByqt: "457.421" }
    ]

    function individualPosts(props) {

        return (
            <div class="container-post">

                <div class="top-post">
                    <div class="img-top-post"><img src={props.perfilImg} alt="" /></div>
                    <div class="direita-top-post">
                        <div class="username">
                            <h1>{props.username}</h1>
                        </div>
                        <div><ion-icon name="ellipsis-horizontal"></ion-icon></div>
                    </div>
                </div>
                <img class="img-post" src={props.imgPost} alt="" />
                <div class="bottom-post">
                    <div class="icons">
                        <div class="left-bottom-post">
                            <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="right-bottom-post">
                            <ion-icon class="icon-save" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="coment-post">
                        <img src={props.likedByImg} alt="" />
                        <p>curtido por&nbsp;<span>{props.likedByName}</span>&nbsp;e&nbsp;<span>outras {props.likedByqt} pessoas</span></p>
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

    const componentPost = objPost.map(individualPosts);



    return (
        <div>
            {componentPost}
        </div>
    )
}







/*
<div class="container-post">

    <div class="top-post">
        <div class="img-top-post"><img src="assets/jake-perfil.jpg" alt="" /></div>
        <div class="direita-top-post">
            <div class="username">
                <h1>J@ke</h1>
            </div>
            <div><ion-icon name="ellipsis-horizontal"></ion-icon></div>
        </div>
    </div>
    <img class="img-post" src="assets/312856.png" alt="" />
    <div class="bottom-post">
        <div class="icons">
            <div class="left-bottom-post">
                <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
                <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
                <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
            </div>
            <div class="right-bottom-post">
                <ion-icon class="icon-save" name="bookmark-outline"></ion-icon>
            </div>
        </div>
        <div class="coment-post">
            <img src="assets/perfil-arcoiris.jpg" alt="" />
            <p>curtido por&nbsp;<span>arco-íris</span>&nbsp;e&nbsp;<span>outras 351.485 pessoas</span></p>
        </div>
        <div class="legenda">
            <p><span class="username-legenda">J@ke</span>
                <span class="text-legenda"> Estudando pois não nasci herdeiro.</span>
            </p>
        </div>
    </div>
</div>

<div class="container-post">

<div class="top-post">
    <div class="img-top-post"><img src="assets/finn-perfil.jpg" alt="" /></div>
    <div class="direita-top-post">
        <div class="username">
            <h1>finn.o.humano</h1>
        </div>
        <div><ion-icon name="ellipsis-horizontal"></ion-icon></div>
    </div>
</div>


<img class="img-post" src="assets/finn-post.jpg" alt="" />


<div class="bottom-post">
    <div class="icons">
        <div class="left-bottom-post">
            <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
            <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
            <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
        </div>
        <div class="right-bottom-post">
            <ion-icon class="icon-save" name="bookmark-outline"></ion-icon>
        </div>
    </div>
    <div class="coment-post">
        <img src="assets/jujuba-perfil.jpg" alt="" />
        <p>curtido por&nbsp;<span>Jujub@</span>&nbsp;e&nbsp;<span>outras 852.102 pessoas</span></p>
    </div>
    <div class="legenda">
        <p><span class="username-legenda">finn.o.humano</span>
            <span class="text-legenda"> Formei!!! #dev #driven</span>
        </p>
    </div>
</div>
</div>


<div class="container-post">

                <div class="top-post">
                    <div class="img-top-post"><img src="assets/urso-perfil.jpg" alt="" /></div>
                    <div class="direita-top-post">
                        <div class="username">
                            <h1>Urso.doido</h1>
                        </div>
                        <div><ion-icon name="ellipsis-horizontal"></ion-icon></div>
                    </div>
                </div>


                <video controls autoplay muted>
                    <source src="assets/video.mp4" type="video/mp4">
                    </source>
                    <source src="assets/video.ogv" type="video/ogv">
                    </source>
                </video>

                <div class="bottom-post">
                    <div class="icons">
                        <div class="left-bottom-post">
                            <ion-icon class="ion-bot" name="heart-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="chatbubble-outline"></ion-icon>
                            <ion-icon class="ion-bot" name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="right-bottom-post">
                            <ion-icon class="icon-save" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="coment-post">
                        <img src="assets/jujuba-perfil.jpg" alt="" />
                        <p>curtido por&nbsp;<span>Jujub@</span>&nbsp;e&nbsp;<span>outras 457.421 pessoas</span></p>
                    </div>
                    <div class="legenda">
                        <p><span class="username-legenda">urso.doido</span>
                            <span class="text-legenda"> Calor da por#%@</span>
                        </p>
                    </div>
                </div>
            </div>
*/