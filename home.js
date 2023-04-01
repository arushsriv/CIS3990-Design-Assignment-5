const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const heartIcon = document.getElementById("heart");
const heartbreakIcon = document.getElementById("heartbreak");

function dislikeMovie() {
    document.getElementById('heartbreak')
            .style.display = "block";
    document.getElementById('dislike');
    setTimeout(hideHeartbreak, 3000);
}

function likeMovie() {
    document.getElementById('heart')
            .style.display = "block";
    document.getElementById('like');
    setTimeout(hideHeart, 3000);
    document.getElementById('lists')
            .style.display = "block";
}

function hideHeart() {
    document.getElementById('heart')
            .style.display = "none";
}

function hideHeartbreak() {
    document.getElementById('heartbreak')
            .style.display = "none";
}

