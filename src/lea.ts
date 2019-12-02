const N = 50
const particles = Array(N)
const { random, PI } = Math
const DEG = PI / 180
const d = document
const $ = d.querySelector.bind(d)
const a = $`.header__canvas`
const c = a.getContext`2d`
let w, h

function setSize (): void {
  w = a.width = a.clientWidth
  h = a.height = a.clientWidth
  particles.splice(0, N)
}

function testMediaQuery(query): boolean {
  const hasMediaQuery ='matchMedia' in window 
  const mediaQuery = hasMediaQuery && window.matchMedia(query)
  return Boolean(mediaQuery && mediaQuery.matches)
}

setSize()
onresize = setSize


class Particle {

  x: number
  y: number
  r: number
  w: number
  h: number

  constructor () {
    this.x = (random() * w)|0
    this.y = (random() * h)|0
    this.r = (random() * 360)|0
    this.w = (random() * (5 + w))|0
    this.h = (random() * (5 + h))|0
  }

  get isDarkMode() {
    return testMediaQuery('(prefers-color-scheme: dark)')
  }

  get prefersReducedMotion() {
    return testMediaQuery('(prefers-reduced-motion: reduce)')
  }

  render () {
    c.save()
    c.translate(this.x, this.y)
    c.rotate(this.r * DEG)
    c.translate(-this.x, -this.y)
    c.fillStyle = this.isDarkMode ? 'rgba(0, 0, 0, .1)' : 'rgba(255,255,255,.1)'
    c.fillRect(this.x - this.w / 2, this.x - this.w / 2, this.w, this.h)
    c.restore()
  }

  move () {
    if (! this.prefersReducedMotion) {
      this.r = (this.r + .05) % 360
    }
  } 
}

function animation(frame) {
  c.clearRect(0, 0, w, h)
  for (let i = N; i--;) {
    if (!particles[i]) {
      particles[i] = new Particle()
    }
    particles[i].render()
    particles[i].move()
  }
  window.setTimeout(() => {
    requestAnimationFrame(animation)
  }, 33)
}

animation(0)
