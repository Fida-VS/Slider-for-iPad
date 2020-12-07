var body = document.querySelector('body');
var slideInner = document.querySelector('.slide-inner1');
var slide = document.querySelector('.slide1');
var leafBlock = document.querySelector('.leaf-block');
let slides = document.querySelectorAll('.sl');
    body.addEventListener('touchstart', handleTouchStart);
    body.addEventListener('touchmove', handleTouchMove);
    body.addEventListener('touchend', handleTouchEnd);
 var height = slide.offsetHeight;
 var x = 0;
  var maxPos = -(height*(slides.length-1));
 var startingY;
 

 function handleTouchStart(evt) {
     startingY = evt.touches[0].clientY;
 }
 function handleTouchMove(evt) {
    var touch = evt.touches[0];
     var min = screen.width/6;
     var change = startingY - touch.clientY;
     if (change < min) {
         return;
     }
 }
 function handleTouchEnd(evt){
     var change = startingY - evt.changedTouches[evt.changedTouches.length-1].clientY
     if (change < 0){
         leafBottom();
     } else if (change > 0){
        leafTop(); 
     } 
     evt.preventDefault();
 }

 function leafTop() {
    let i = 0;
    
    if (i<slides.length-1){i++;}
    
   x -= height*i;

 if (x!==0){
    leafBlock.style.display = 'none';	
 } 
 slideInner.style.transform = 'translateY(' + x + 'px)';
 }

 function leafBottom() {
    let i = 0;
    
    if (i<slides.length-1){i++;}
    
   x += height*i;

   if (x == 0){
    leafBlock.style.display = 'block';
 } 
 slideInner.style.transform = 'translateY(' + x + 'px)';
 }
 