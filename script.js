var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from('#navbar', {
    y: '-10',
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 3,
      delay: -1,
      stagger: 0.3,
    })

}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px))`;
  });
}
circleMouseFollower();
firstPageAnim();


function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;

  var xprevious = 0;
  var yprevious = 0;
  window.addEventListener("mousemove", function (dets) {

    var xdiffer = dets.clientX - xprevious;
    var ydiffer = dets.clientY - yprevious;

    dets.clientX = xprevious;
    dets.clientY = yprevious;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiffer)
    yscale = gsap.utils.clamp(0.8, 1.2, ydiffer)


  })
}
circleChaptaKaro();

document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease:Power1,
      top:dets.clientY,
      left:dets.clientX

    });
  });
  
});