const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
/*
- Utilizzaimo la base dati fornita e anche il codce HTML/CSS
- Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
- Stampiamo i post del nostro feed.
- Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)
*/

const container = document.getElementById('container');

appendPosts();

///////////////FUNZIONI////////////

function appendPosts () {

    for (let i = 0; i < posts.length; i++) {

        const post = posts[i];

        container.append(getPost(i));

        const likeButton = document.querySelector(`[data-postid="${post.id}"]`)

        const likeCounter = document.querySelectorAll('.likes__counter');

        console.log('likeButton',likeButton);

        likeButton.addEventListener('click', function () {
            
            likeButton.classList.add('like-button--liked');

            console.log('i dentro event vale', i);
            // console.log('post likes cliccato', post.likes);
            // console.log('nuova somma likes', post.likes + 1);
            console.log(likeCounter.innerHTML);

            likeCounter[i].innerHTML = `
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes + 1}</b> persone
            `;
        });
    }

}

function getPost (index) {

    //creo un div che conterrá la card del post
    const postDOM = document.createElement('div');
    postDOM.className = 'post';

    // salvo l'oggetto nella variabile post
    const post = posts[index];
    const {id, content, media, author, likes, created} = post;

    if (author.image === null) {
        author.image = 'https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-1545687098.jpg';
    }
    
    postDOM.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${reverseDate(created)}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
    `;

    return postDOM;
}

function reverseDate(date) {

    date = date.split("-").reverse().join("-");
    console.log(date);
    return date;
}