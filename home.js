const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const heartIcon = document.getElementById("heart");


// TODO variables to save liked movie to saved list

function likeMovie() {
    console.log("Like");
    heartIcon.className = "";
    // setTimeout(10);
    // heartIcon.className = "heart-invisible";
}

function dislikeMovie() {
    console.log("Disike");
    heartIcon.className = "heart-invisible";
}

