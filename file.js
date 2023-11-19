let main=document.getElementById("main")
let cursor=document.querySelector(".cursor")

main.addEventListener("mousemove",function(dot){
    cursor.style.left=dot.clientX + "px";
    cursor.style.top=dot.clientY + "px";
})
document.querySelector("#overlay1").addEventListener("mousemove",function(dot){
    document.querySelector("#elem1 img").style.scale=1;
    document.querySelector("#elem1 img").style.opacity=1;
    cursor.style.opacity = 0;
    document.querySelector("#elem1 img").style.left=(dot.clientX-200)+"px"
    document.querySelector("#elem1 img").style.top=(dot.clientY-300)+"px"
})
document.querySelector("#overlay1").addEventListener("mouseleave",function(dot){
    document.querySelector("#elem1 img").style.scale=0;
    document.querySelector("#elem1 img").style.opacity=0;
    cursor.style.opacity = 1;
})

document.querySelector("#overlay2").addEventListener("mousemove",function(dot){
    document.querySelector("#elem2 img").style.scale=1;
    document.querySelector("#elem2 img").style.opacity=1;
    cursor.style.opacity = 0;
    document.querySelector("#elem2 img").style.left=(dot.clientX-500)+"px"
    document.querySelector("#elem2 img").style.top=(dot.clientY-300)+"px"
})
document.querySelector("#overlay2").addEventListener("mouseleave",function(dot){
    document.querySelector("#elem2 img").style.scale=0;
    document.querySelector("#elem2 img").style.opacity=0;
    cursor.style.opacity = 1;
})
document.querySelector("#overlay3").addEventListener("mousemove",function(dot){
    document.querySelector("#elem3 img").style.scale=1;
    document.querySelector("#elem3 img").style.opacity=1;
    cursor.style.opacity = 0;
    document.querySelector("#elem3 img").style.left=(dot.clientX-1000)+"px"
    document.querySelector("#elem3 img").style.top=(dot.clientY-400)+"px"
})
document.querySelector("#overlay3").addEventListener("mouseleave",function(dot){
    document.querySelector("#elem3 img").style.scale=0;
    document.querySelector("#elem3 img").style.opacity=0;
    cursor.style.opacity = 1;
})