var main = document.getElementById("main");
var s = "";
let arr = 
["https://i.pinimg.com/474x/4e/97/d0/4e97d0f7c6d167c1eb29e920220cafa3.jpg",
"https://i.pinimg.com/474x/f6/a7/90/f6a7904c87141758d85dcab312c7d218.jpg",
"https://i.pinimg.com/474x/61/f3/0e/61f30e599571642086a9ce1ecdad2d86.jpg",
"https://i.pinimg.com/474x/04/27/c8/0427c8203ac6ea9de9645e6379634aef.jpg",
"https://i.pinimg.com/474x/d5/01/33/d50133cdbd65e8bba7e6887f2100fdfe.jpg",
"https://i.pinimg.com/474x/21/2b/c0/212bc01edb249cd514fed0346e611df0.jpg",
"https://i.pinimg.com/474x/18/ad/20/18ad200bb112dadc07607b6da319bf29.jpg"];
for(let i=1;i<=55;i++){
    let r = Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`
}
main.innerHTML = s;