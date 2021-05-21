/* global AFRAME */
AFRAME.registerComponent('interractions', {
  init: function () {
    /*
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground')

    this.movieImageEl
    this.movieTitleEl = document.querySelector('#projectTitle')
    this.movieDescriptionEl = document.querySelector('#projectDescription')
    
    

     this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
     this.onBackgroundClick = this.onBackgroundClick.bind(this)
     this.backgroundEl = document.querySelector('#infoPanel')
    var buttonEls = document.querySelectorAll('.menu-button')
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.showProject)
    }
  
  this.backgroundEl.addEventListener('click', this.onBackgroundClick)
  this.el.object3D.renderOrder = 9999999
  this.el.object3D.depthTest = false
  fadeBackgroundEl.object3D.renderOrder = 9
  fadeBackgroundEl.getObject3D('mesh').material.depthTest = false*/
  },

  showProject: function (evt) { /*
     var projectInfo = this.projectInfo[evt.currentTarget.id]
     this.backgroundEl.object3D.scale.set(1, 1, 1)

     this.el.object3D.scale.set(1, 1, 1)
     if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
     this.el.object3D.visible = true
     this.fadeBackgroundEl.object3D.visible = true

     if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
     this.movieImageEl = projectInfo.imgEl
     this.movieImageEl.object3D.visible = true
    document.querySelector('#title').innerHTML = projectInfo.title
    document.querySelector('#projectDescription').innerHTML = projectInfo.description
    document.querySelector('#camera').setAttribute('wasd-controls-enabled', false)*/
  },

  onBackgroundClick: function (evt) {
    // this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001)
    // this.el.object3D.scale.set(0.001, 0.001, 0.001)
    // this.el.object3D.visible = false
    // this.fadeBackgroundEl.object3D.visible = false
  }
})
