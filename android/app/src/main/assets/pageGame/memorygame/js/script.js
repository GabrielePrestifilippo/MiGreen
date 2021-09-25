
// other themes to add ?
// bigger memory?

var library = {
    icons: [
      'https://img.icons8.com/plasticine/2x/horse.png',
      'https://img.icons8.com/plasticine/2x/horse.png',
      'https://img.icons8.com/emoji/2x/pig-face-emoji.png',
      'https://img.icons8.com/emoji/2x/pig-face-emoji.png',
      'https://img.icons8.com/plasticine/2x/chicken.png',
      'https://img.icons8.com/plasticine/2x/chicken.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-salad-christmas-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-salad-christmas-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/plasticine/2x/egg.png',
      'https://img.icons8.com/plasticine/2x/egg.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-milk-smart-farm-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-milk-smart-farm-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-bread-thanksgiving-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-bread-thanksgiving-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
      'https://img.icons8.com/doodle/2x/apple.png',
      'https://img.icons8.com/doodle/2x/apple.png',
      'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-watermelon-fruits-and-vegetables-kiranshastry-lineal-color-kiranshastry.png',
      'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-watermelon-fruits-and-vegetables-kiranshastry-lineal-color-kiranshastry.png',
      'https://img.icons8.com/external-flatart-icons-flat-flatarticons/2x/external-juice-diet-and-nutrition-flatart-icons-flat-flatarticons.png',
      'https://img.icons8.com/external-flatart-icons-flat-flatarticons/2x/external-juice-diet-and-nutrition-flatart-icons-flat-flatarticons.png'
    ]
  }
  var images = [],
      tempElt1 = "",
      tempElt2 = "",
      click = -1,
      win = 0,
      score = 0,
      time = 0;
  
  var preElt = document.querySelector("#pre"),
      themesElt = document.querySelector("#themes"),
      boxElts = document.getElementsByClassName("box"),
      mainElt = document.querySelector(".main"),
      timeElt = document.querySelector("#time"),
      scoreElt = document.querySelector("#score"),
      postElt = document.querySelector("#post"),
      finalElt = document.querySelector("#final"),
      againElt = document.querySelector("#again");
  
  
  // initiate the game with chosen theme
  themesElt.addEventListener("click", function(e) {
    if (e.target.classList.contains("themes")) {
      activateTheme(e.target.id);
      preElt.classList.add("hidden");
    }
  });
  
  function activateTheme(theme) {
    // insert theme in images array
    switch (theme) {
      case "icons":
        for (let i=0; i<20; i++) {images.push(library.icons[i]);}
        break;
    }
    // insert images in memory game
    for (let i=0; i<20; i++) {
      var rand = Math.floor(Math.random() * (images.length-1));
      boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
      images.splice(rand, 1);
    }
  }
  
  
  // Handle the play
  mainElt.addEventListener("click", gameLogic);
  
  function gameLogic(e) {
    // make sure the box is playable
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");
      // first of two click
      if (click < 1) {
        tempElt1 = e.target;
        // timer
        if (click === -1) {
          timer = setInterval(function() {
            time++;
            timeElt.innerHTML = time;
          }, 1000);
        }
        click = 1;
      }
  
      // second click
      else if (e.target !== tempElt1) {
        tempElt2 = e.target;
  
        // different images
        if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
          mainElt.removeEventListener("click", gameLogic);
          setTimeout( function() {
            tempElt1.firstChild.classList.add("hidden");
            tempElt2.firstChild.classList.add("hidden");
            mainElt.addEventListener("click", gameLogic);
          }, 400);
          if (score > 0){
            score -= 2;
          }
          scoreElt.innerHTML = score;
        }
  
        // same images
        else {
          score += 10;
          win += 2;
          tempElt1.firstChild.classList.add("outlined");
          tempElt2.firstChild.classList.add("outlined");
          tempElt1.classList.remove("play");
          tempElt2.classList.remove("play");
          scoreElt.innerHTML = score;
  
          // game won
          if (win === 20) {
            clearTimeout(timer);
            finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
            postElt.classList.remove("hidden");
          }
        }
        click = 0;
      }
    }
  }
  
  againElt.addEventListener("click", resetGame);
  
  function resetGame() {
    // reset game
    tempElt1 = "";
    tempElt2 = "";
    click = -1;
    win = 0;
    score = 0;
    time = 0;
    postElt.classList.add("hidden");
    preElt.classList.remove("hidden");
    for (let i=0; i<20; i++) {
      boxElts[i].classList.add("play");
      boxElts[i].firstChild.classList.add("hidden");
    }
    timeElt.textContent = time;
    scoreElt.textContent = score;
  }
  