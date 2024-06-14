var tt=gsap.timeline()


tt.to("#box1",{
    x :1200,
    duration :2,
    
    rotate :360,
    backgroundColor : "red",
    scale :.5

})

tt.to("#box2",{
    x :1200,
    duration :2,
    
    rotate :360,
    backgroundColor : "green",
    scale:.3

})

tt.to("#box3",{
    x :1200,
    duration :2,
   
    rotate :360,
    backgroundColor : "yellow",
    scale:.2

})