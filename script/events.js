var burguerButton = document.getElementById("burguer-button")
var mainMenuOption = document.getElementById("mainMenuOption")
var MediaPhone = window.matchMedia('(max-width: 500px)')
burguerButton.addEventListener('click', toggleMaineManu)
burguerButton.addEventListener('touchdown', toggleMaineManu)
MediaPhone.addListener(activadorMediaPhone)


function activadorMediaPhone(){
  if (MediaPhone.matches) {
    console.log("media")
  } else {
    console.log("no media")
  }
}

var bLAzy = new Blazy({
  selector: 'img'
});


function toggleMaineManu(){
  mainMenuOption.classList.toggle('active')
}
