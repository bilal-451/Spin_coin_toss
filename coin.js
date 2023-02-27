let heads=0;
let tails=0;
let coin = document.querySelector(".coin-toss");
let toss_button=document.querySelector("#toss-coin");
let reset_button=document.querySelector("#reset");

toss_button.addEventListener("click",()=>{
    let f=Math.floor(Math.random()*2);
    coin.style.animation="none";
    if(f){
        setTimeout(function(){
            coin.style.animation="spin-heads 3s forwards";
        },100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation="spin-tails 3s forwards";
        },100);
        tails++;

    }
    setTimeout(updateCount,3000);
    disableButton();
});

function updateCount(){
    document.querySelector(".heads-count").textContent=`Heads:${heads}`;
    document.querySelector(".Tails-count").textContent=`Tails:${tails}`;
}

function disableButton(){
    toss_button.disabled=true;
    setTimeout(function(){
        toss_button.disabled=false;
    },3000);
}

reset_button.addEventListener("click",()=>{
    coin.style.animation='none';
    heads=0;
    tails=0;
    updateCount();
});

