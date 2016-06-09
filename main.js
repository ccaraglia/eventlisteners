// GO!
//TASK 1
var navButton = document.querySelector("#navButton")
var navMenu = document.querySelector(".nav-menu")


var visible=true

var toggleMenu = function() {
  if (visible) {
    navMenu.style.opacity = 0
    visible = false
    navButton.querySelector("#navButton > p").innerHTML = "show nav"
  }
  else {
    navMenu.style.opacity = 1
    visible = true
    navButton.querySelector("#navButton > p").innerHTML = "hide nav"
  }

}

navButton.addEventListener('click',toggleMenu)




//TASK 2 and TASK 3 combined

var KEY_CODES = {
  spaceBar: 32,
  enterKey: 13
}
var guestList = document.querySelector("#addGuest")

var inputNode = document.querySelector('input[type="text"]')

var handleItemAdd = function(EventObj) {

    if (EventObj.keyCode === KEY_CODES.enterKey) {
        console.log('target>>', EventObj.target)
        //GRAB TEXT INPUT FROM USER
        var inputNode = EventObj.target

        var usrText = inputNode.value

        //empty the add toolbar after each enter
        inputNode.value = ''


        var li = document.createElement("li")
        li.className = "guest"

        li.innerHTML = usrText + '<button id="add-guest-bonus">X</button>'
        li.querySelector("button").addEventListener('click', function(){
            guestList.removeChild(li)
        })
        guestList.appendChild(li)
    }
}
inputNode.addEventListener('keydown',handleItemAdd)




//cancelGuest.addEventListener('click',remove)


//task 3
