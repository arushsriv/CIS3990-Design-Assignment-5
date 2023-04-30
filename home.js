const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const heartIcon = document.getElementById("heart");
const heartbreakIcon = document.getElementById("heartbreak");

// function dislikeMovie() {
//     document.getElementById('mvcontainer')
//             .style.display = "none";
//     document.getElementById('heartbreak')
//             .style.display = "block";
//     document.getElementById('dislike');
//     setTimeout(hideHeartbreak, 1000);
// setTimeout(nextMovie, 1000);
// }

// function likeMovie() {
//     document.getElementById('mvcontainer')
//             .style.display = "none";
//     document.getElementById('heart')
//             .style.display = "block";
//     document.getElementById('like');
//     setTimeout(hideHeart, 1000);
//     document.getElementById('lists')
//             .style.display = "block";
//     document.getElementById('lists-dropdown')
//             .style.display = "block";   

//     // TODO show like button is clicked
//     var img = document.getElementById("likeImage");
//     var filename = img.src.replace(/^.*[\\\/]/, '');
//     if (filename == "likeheart.png") {
//         img.src = "images/heart.png";
//     }
// }

// function hideHeart() {
//     document.getElementById('heart')
//             .style.display = "none";
// }

// function hideHeartbreak() {
//     document.getElementById('heartbreak')
//             .style.display = "none";
// }

function closeList() {
        document.getElementById('lists').style.display = "none";
}

// function nextMovie() {
//         window.location.href = 'inception.html';
// }


// TODO: Added for swipe
var container = document.getElementById("mvcontainer-wrapper");

  container.addEventListener("touchstart", startTouch, false);
  container.addEventListener("touchmove", moveTouch, false);

  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        // alert("HI");
        window.location.href = 'inception.html';
      } else {
        // swiped right
        // alert("HI");
        // window.location.href = 'inception.html';
      }  
    } else {
      // sliding vertically
      if (diffY > 0) {
        // alert("HI");
        // window.location.href = 'home.html';
        // swiped up
        window.location.href = 'more-info.html';
      } else {
        // alert("HI");
        // window.location.href = 'more-info.html';
        // swiped down
      }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };