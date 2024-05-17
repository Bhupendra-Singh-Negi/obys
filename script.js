var tl=gsap.timeline()

tl.from(".line h1,h2",{
    y:150,
    stagger:0.25,
    duration:0.7,
    delay:0.5,
})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    stagger:0.3,
    onStart:function(){
        var h5timer=document.querySelector("#line1-part1 h5")

        var grow=0;
        var int=setInterval(function(){
            if(grow<100){
            grow++;
            h5timer.innerHTML=grow;
                }  
        },30)
    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3
})
tl.from("#page1",{
    opacity:0,
    y:1600,
    delay:0.2,
    duration:0.5,
    ease:Power4
})
tl.to("loader",{
    display:"none"
})