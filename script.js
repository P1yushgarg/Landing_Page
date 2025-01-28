var a = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(function() {
        a.style.left = dets.x + "px";
        a.style.top = dets.y + "px";
        blur.style.left = dets.x - 250 + "px";
        blur.style.top = dets.y - 250 + "px";
    });
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    a.style.transform = "scale(3)";
    a.style.border = "1px solid #fff";
    a.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    a.style.transform = "scale(1)"; // Reset scale
    a.style.border = "none"; // Reset border
    a.style.backgroundColor = ""; // Reset background color
  });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});
gsap.from("#aboutus img,#about",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#aboutus",
        stagger:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".card",
        stagger:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        stagger:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})

