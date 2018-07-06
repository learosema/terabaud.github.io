(function() {
  "use strict";

  const N = 10
  const particles = Array(N)
  const R = Math.random
  const DEG = Math.PI / 180
  const d = document
  const b = d.body
  const $ = d.querySelector.bind(d)
  const a = $('.header__canvas')
  const c = a.getContext('2d')
  let w = a.clientWidth
  let h = a.clientHeight

  function setSize() {
    w = a.width = a.clientWidth
    h = a.height = a.clientWidth
  }
  setSize()
  onresize=setSize

  function Particle() {
    this.x = (R() * w)|0
    this.y = (R() * h)|0
    this.r = (R() * 360)|0
    this.w = (R() * (5 + w / 2))|0
    this.h = (R() * (5 + w / 2))|0
  }

  Particle.prototype.render = function() {
    c.save()
    c.translate(this.x, this.y)
    c.rotate(this.r * DEG)
    c.translate(-this.x, -this.y)
    c.fillStyle = 'rgba(255,0,0,.2)'
    c.fillRect(this.x - this.w / 2, this.x - this.w / 2, this.w, this.h)
    c.restore()
  }

  Particle.prototype.move = function () {
    this.r = (this.r + .1) % 360
  }

  ~function L() {
    c.clearRect(0, 0, w, h)
    for (let i = N; i--;) {
      if (!particles[i]) {
        particles[i] = new Particle()
      }
      particles[i].render()
      particles[i].move()
    }
    requestAnimationFrame(L)
  }(0)

}())