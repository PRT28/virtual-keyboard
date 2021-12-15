var keys=document.querySelectorAll(".key");
var space = document.querySelector(".space");
var back = document.querySelector(".bs");
var enter = document.querySelector(".enter");
var cap = document.querySelector(".cs");
var text = document.querySelector(".ip");
var flag=0;

function caps(){
    if(flag==0){
        for(let i=0;i<keys.length;++i){
            keys[i].setAttribute('val',keys[i].innerHTML.toUpperCase());
        }
        flag=1;
    }
    else{
        for(let i=0;i<keys.length;++i){
            keys[i].setAttribute('val',keys[i].innerHTML.toLowerCase());
        }
        flag=0;
    }
}

for(let i=0; i<keys.length; ++i){
    keys[i].setAttribute('val',keys[i].innerHTML.toLowerCase());
    keys[i].addEventListener("click",function(e){
        if(keys[i].getAttribute("val")=="backspace" || keys[i].getAttribute("val")=="backspace".toUpperCase()){
            text.value=text.value.substring(0,text.value.length-1);
        }
        else if(keys[i].getAttribute("val")=="space"|| keys[i].getAttribute("val")=="space".toUpperCase()){
            text.value=text.value+" ";
        }
        else if(keys[i].getAttribute("val")=="enter"||keys[i].getAttribute("val")=="enter".toUpperCase()){
            text.value=text.value+'\n';
        }
        else if(keys[i].getAttribute("val")=="capslock"||keys[i].getAttribute("val")=="capslock".toUpperCase()){
            caps();
        }
        else{
            text.value=text.value+keys[i].getAttribute("val");
        } 
    });
}

window.addEventListener('keydown',function(e){
    for(let i=0;i<keys.length;++i){
        if(e.key== keys[i].getAttribute('val') || e.key== keys[i].getAttribute('val').toUpperCase()){
            keys[i].classList.add("active");
        }
        if(e.code=='Backspace'){
            back.classList.add('active');
        }
        if(e.code=='Space'){
            space.classList.add('active');
        }
        if(e.code=='Enter'){
            enter.classList.add('active');
        }
        if(e.code=='Capslock'){
            cap.classList.toggle('active');
        }
    }
});

window.addEventListener('keyup',function(e){
    for(let i=0;i<keys.length;++i){
        if(e.key== keys[i].getAttribute('val') || e.key== keys[i].getAttribute('val').toUpperCase()){
            keys[i].classList.remove("active");
        }
        if(e.code=='Backspace'){
            back.classList.remove('active');
        }
        if(e.code=='Space'){
            space.classList.remove('active');
        }
        if(e.code=='Enter'){
            enter.classList.remove('active');
        }
        if(e.code=='Capslock'){
            cap.classList.toggle('active');
        }
    }
});
