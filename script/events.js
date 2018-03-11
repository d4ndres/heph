var burguerButton = document.getElementById("burguer-button")
var mainMenuOption = document.getElementById("mainMenuOption")
burguerButton.addEventListener('click', toggleMaineManu)
burguerButton.addEventListener('touchdown', toggleMaineManu)


function toggleMaineManu(){
  mainMenuOption.classList.toggle('active')
}
