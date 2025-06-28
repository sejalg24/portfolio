

let a = document.querySelectorAll("a");
let activeLink = null;
const handler = (event) => {
    if(activeLink){
        activeLink.style.removeProperty("color");
    }
    event.target.style.setProperty("color", "purple", "important");
    activeLink = event.target;
}
const cursor = (event) => {
    event.target.style.cursor = "pointer";
}
for(const link of a){
link.addEventListener('click', handler)
link.addEventListener('mouseover', cursor)
}

var tl = gsap.timeline();

tl.from("h2",{
    y : -30,
    opacity : 0,
    duration : 0.5,
    delay : 0.5
})

tl.from("a",{
    y : -20,
    opacity : 0,
    duration : 0.2,
    stagger : 0.2
})

gsap.from("#intro",{
    y: 20,
    scale : 0,
    duration :0.5,
    opacity : 0,
    delay :1
})
var tl2 = gsap.timeline();
tl2.from("ul",{
   
     y: 20,
    scale : 0,
    duration :0.5,
    opacity : 0,
    delay :1
})
tl2.from("li",{
    x :-100,
    scale :0,
    duration : 1,
    opacity :0,
})

gsap.from("h1",{
   y: 20,
    scale : 0,
    duration :0.5,
    opacity : 0,
    delay :1
})


gsap.from("img", {
     y: 20,
    scale : 0,
    duration :0.5,
    opacity : 0,
})
gsap.from("#introduction",{
    y: 20,
    scale : 0,
    duration :0.5,
    opacity : 0,
    delay :0.5
})
let send_msg = document.querySelector("#send_msg")
send_msg.addEventListener("click",()=>{
  alert("Msg Sent");
})

