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
      } else {

        // swiped down
        window.location.href = 'home.html';
      }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };