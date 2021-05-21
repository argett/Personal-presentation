'use strict'

var putBack = function () {
  document.querySelector('#container').outerHTML = ''
  document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto'
}

var putFront = function () {
  document.getElementsByTagName('a-scene')[0].style.zIndex = '1'
}

var startExperienteBtn = document.querySelector('#start_experience')
startExperienteBtn.addEventListener('click', putBack)

var infoBubble = document.querySelectorAll('.menu-button')
for (var i = 0; i < infoBubble.length; ++i) {
  infoBubble[i].addEventListener('click', putFront)
}
