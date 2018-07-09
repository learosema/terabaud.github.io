var N = 50;
var particles = Array(N);
var R = Math.random;
var DEG = Math.PI / 180;
var d = document;
var $ = d.querySelector.bind(d);
var a = $('.header__canvas');
var c = a.getContext('2d');
var w = a.clientWidth;
var h = a.clientHeight;
function setSize() {
    w = a.width = a.clientWidth;
    h = a.height = a.clientWidth;
    particles.splice(0, N);
}
setSize();
onresize = setSize;
var Particle = /** @class */ (function () {
    function Particle() {
        this.x = (R() * w) | 0;
        this.y = (R() * h) | 0;
        this.r = (R() * 360) | 0;
        this.w = (R() * (5 + w)) | 0;
        this.h = (R() * (5 + h)) | 0;
    }
    Particle.prototype.render = function () {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.r * DEG);
        c.translate(-this.x, -this.y);
        c.fillStyle = 'rgba(255,255,255,.1)';
        c.fillRect(this.x - this.w / 2, this.x - this.w / 2, this.w, this.h);
        c.restore();
    };
    Particle.prototype.move = function () {
        this.r = (this.r + .1) % 360;
    };
    return Particle;
}());
function animation(frame) {
    c.clearRect(0, 0, w, h);
    for (var i = N; i--;) {
        if (!particles[i]) {
            particles[i] = new Particle();
        }
        particles[i].render();
        particles[i].move();
    }
    requestAnimationFrame(animation);
}
animation(0);
