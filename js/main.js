// import Cursor from "./cursor";

// const cursor = new Cursor();


// Topbar Animation Hover Link
const topbar = document.querySelector('.topbar')
var firstspan = document.querySelector('.topbar__name span:nth-child(1)');
firstspan.innerHTML = firstspan.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

topbar.addEventListener('mouseover', function(){
    anime.timeline({loop: false})
    .add({
      targets: '.topbar__name span .letter',
      translateY: [-50,0],
      easing: "easeOutExpo",
      duration: 100,
      delay: (el, i) => 30 * i
    })
});

// Header Parralax
document.addEventListener('mousemove', parallax);
function parallax(e) {
  this.querySelectorAll('.header__layer').forEach(layer => {
    var speed = layer.getAttribute('data-speed');
    var x = (window.innerWidth - e.pageX * speed) / 100;
    var y = (window.innerWidth - e.pageY * speed) / 100;
    layer.style.transform = `translate(${x}px, ${y}px)`
  });
}