// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline( {scrollTrigger:{
    trigger:"#main",
    start: "50% 50%",
    end: "100% 10%",
    scrub:2,
    pin:true,
}});

tl.
to("#top",{
    top:"-50%"
},"a").
to("#bottom",{
    bottom:"-50%"
},"a")


var tl1 = gsap.timeline( {scrollTrigger:{
    trigger:"#main2",
    start: "50% 50%",
    end: "100% 10%",
    scrub:2,
    pin:true,
}});

tl1.
to("#top2",{
    top:"-50%"
},"b").
to("#bottom2",{
    bottom:"-50%"
},"b")





