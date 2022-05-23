function fade() {
  let checkBox = document.getElementById("menuH");
  let fade = document.getElementById("fade");

  if (checkBox.checked == true){
    fade.style.display = "flex";
  } else {
    fade.style.display = "none";
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

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween:5,
  slidesPerView:2,
  loop:true,
  freeMode:true,
  loopAdditionalSlides:5,
  spped:500,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{

    //when window widht is>=640
    640:{
      slidesPerView:5,
      slidesPerGroup:5,
      freeMode: false
    }
  }
}
);

