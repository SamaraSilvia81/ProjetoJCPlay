function fade() {
  let checkBox = document.getElementById("menuH");
  let fade = document.getElementById("fade");

  if (checkBox.checked == true){
    fade.style.display = "flex";
  } else {
    fade.style.display = "none";
  }
}
function pesquisar(){
  const div = document.getElementById("campoPesquisa");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const fechar = document.createElement("span");
  const btnPesquisar = document.createElement("img");
  const btnFechar = document.createElement("img")

  div.innerHTML = "";

  input.type = "text";
  input.id = "pesquisa";
  input.placeholder = "Pesquisar palavra-chave...";

  button.id = "fazerPesquisa";
  button.onclick= "fazerPesquisa()";

  btnPesquisar.src = "https://api.iconify.design/clarity/search-line.svg?color=white";
  btnPesquisar.className = "icon";

  fechar.id = "fechar";

  btnFechar.className = "icon";
  btnFechar.src ="https://api.iconify.design/ep/circle-close.svg?color=white"

  fechar.appendChild(btnFechar);
  button.appendChild(btnPesquisar);
  div.appendChild(input);
  div.appendChild(button);
  div.appendChild(fechar);

  div.style.display = "flex";
  fechar.onclick = () => {

  const pesquisa = document.getElementById("campoPesquisa");
  pesquisa.style.display = "none";
}
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '760',
    width: '500',
    videoId: 'Jq8NCVCWP9c',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player2 = new YT.Player('player2', {
    height: '760',
    width: '500',
    videoId: 'f5ZRHofX5IM',
    events: {
      'onStateChange': onPlayerStateChange2
    }
  });

  player3 = new YT.Player('player3', {
    height: '760',
    width: '500',
    videoId: 'hAOZozkU8Lc',
    events: {
      'onStateChange': onPlayerStateChange3
    }
  });

  player4 = new YT.Player('player4', {
    height: '360',
    width: '500',
    videoId: '2MseOMSjrcM',
    events: {
      'onStateChange': onPlayerStateChange4
    }
  });

  player5 = new YT.Player('player5', {
    height: '360',
    width: '500',
    videoId: 'qoAziwqWiNM',
    events: {
      'onStateChange': onPlayerStateChange5
    }
  });

  player6 = new YT.Player('player6', {
    height: '360',
    width: '500',
    videoId: 'J9yYmAGbTFs',
    events: {
      'onStateChange': onPlayerStateChange6
    }
  });

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 10000);
    done = true;
  }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange2(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange3(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

var done = false;
function onPlayerStateChange4(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

var done = false;
function onPlayerStateChange5(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

var done = false;
function onPlayerStateChange6(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}






const sectionsWithCarousel = document.querySelectorAll(
  ".section-with-carousel"
);

createOffsets();
window.addEventListener("resize", createOffsets);

function createOffsets() {
 
  const offset = (window.innerWidth - 1200)/2;
  const mqLarge = window.matchMedia("(min-width: 1200px)");

}

for (const section of sectionsWithCarousel) {
  let slidesPerView = [1.5, 2.5, 3.5];
  if (section.classList.contains("section-with-left-offset")) {
    slidesPerView = [1.5, 2.5, 3.5];
  }
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    slidesPerView: slidesPerView[0],
    spaceBetween: 15,
    loop: true,
    lazyLoading: true,
    keyboard: {
      enabled: true
    },
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      768: {
        slidesPerView: slidesPerView[1]
      },
      1200: {
        slidesPerView: slidesPerView[2]
      }
    }
  });
}
