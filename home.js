const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const heartIcon = document.getElementById("heart");
const heartbreakIcon = document.getElementById("heartbreak");

function dislikeMovie() {
    document.getElementById('mvcontainer')
            .style.display = "none";
    document.getElementById('heartbreak')
            .style.display = "block";
    document.getElementById('dislike');
    setTimeout(hideHeartbreak, 1000);
    document.getElementById('lists')
            .style.display = "block";
    document.getElementById('lists-dropdown')
            .style.display = "block";   
}

function likeMovie() {
    document.getElementById('mvcontainer')
            .style.display = "none";
    document.getElementById('heart')
            .style.display = "block";
    document.getElementById('like');
    setTimeout(hideHeart, 1000);
    document.getElementById('lists')
            .style.display = "block";
    document.getElementById('lists-dropdown')
            .style.display = "block";   

    // TODO show like button is clicked
}

function hideHeart() {
    document.getElementById('heart')
            .style.display = "none";
}

function hideHeartbreak() {
    document.getElementById('heartbreak')
            .style.display = "none";
}

function closeList() {
        document.getElementById('lists').style.display = "none";
}

