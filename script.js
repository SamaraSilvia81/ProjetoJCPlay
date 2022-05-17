function fade() {
    let checkBox = document.getElementById("menuH");
    let fade = document.getElementById("fade");
  
    if (checkBox.checked == true){
      fade.style.display = "flex";
    } else {
      fade.style.display = "none";
    }
  }