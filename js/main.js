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
})
