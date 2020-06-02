
window.onload = ()=>{

const work = document.querySelector('.workk');
const ed = document.querySelector('.edd');
const workmain = document.querySelector('.work');
const edmain = document.querySelector('.ed');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.inNav');
var form = document.querySelector(".gform");

ham.addEventListener('click', ()=>{

    if(nav.classList.contains('fadeOut')){

        nav.classList.remove('fadeOut');
        nav.classList.add('fadeIn');
    }
    else{

        nav.classList.remove('fadeIn');
        nav.classList.add('fadeOut');
        
    }


});

console.log(`${work} and ${ed}`);
work.addEventListener('click', ()=>{

console.log('hello');
ed.style.backgroundColor = ''; 
work.style.backgroundColor = 'white'; 
edmain.classList.add('fadeOut');
workmain.classList.remove('fadeOut');
workmain.classList.add('fadeIn');

}) ;

ed.addEventListener('click', ()=>{

work.style.backgroundColor = ''; 
ed.style.backgroundColor = 'white'; 
workmain.classList.add('fadeOut');
edmain.classList.remove('fadeOut');
edmain.classList.add('fadeIn');

}) ;  

form.onsubmit = ()=>{

console.log("hello clicked me")

var thank = document.querySelector(".thankyou_message");
var doc = document.querySelector(".form-elements");

thank.style.display = 'block';

doc.style.display = 'none';




}

   

}


/*
window.onscroll = function changeClass(){

    var gamediv1 = document.getElementById('in1');
    var gamediv2 = document.getElementById('in2');
    var gamediv3 = document.getElementById('in3');
    var gamediv7 = document.getElementById('in7');
     
    var gamediv4 = document.getElementById('in4');
    var gamediv5 = document.getElementById('in5');
    var gamediv6 = document.getElementById('in6');

    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    if(scrollPosY > 300 && scrollPosY<450) {
        console.log("hereee 250");
        gamediv1.className = ('innersec animated bounceInUp');
        gamediv2.className = ('innersec animated bounceInUp');
        gamediv3.className = ('innersec animated bounceInUp');
        gamediv7.className = ('innersec animated bounceInUp');
       
}
else if(scrollPosY > 1500 && scrollPosY<1550){
    gamediv4.className = ('innersec animated tada');
    gamediv5.className = ('innersec animated tada');
    gamediv6.className = ('innersec animated tada');
   
}
}*/