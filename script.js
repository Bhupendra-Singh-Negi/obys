function loadingAnimation(){
    var tl=gsap.timeline()

    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.7,
        delay:0.5,
    })
    tl.from(".line h2",{
        y:150
    })
    tl.from("#line1-part1, .line h2",{
        opacity:0,
        stagger:0.3,
        onStart:function(){
            var h5timer=document.querySelector("#line1-part1 h5")
    
            var grow=0;
            setInterval(function(){
                if(grow<100){
                grow++;
                h5timer.innerHTML=grow;
                    }  
            },30)
        }
    })
    
    tl.to("#loader",{
        opacity:0,
        // duration:0.4,
        // delay:3
    })
    tl.from("#page1",{
        y:1600,
        delay:0.2,
        duration:0.5,
        ease:Power4
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("nav",{
        opacity:0
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y:150,
        stagger:0.2
    })
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        });
    });
    
    Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();
cursorAnimation();