(function (){

'use strict';

var cloudel,
    oncloudStart,
    oncloud,
    cloudEnd,
    pixelY,
    pixelX;

oncloudStart =function (ev){
    var  boundRect;
    if(ev.target.className.indexOf('sky')=== -1)
    {
        return;
    }

    cloudel= this;
    boundRect = cloudel.getBoundingClientRect();
    pixelY=boundRect.top -ev.clientY;
    pixelX =boundRect.left -ev.clientX;


};
oncloud=function(ev) {
    if (!cloudel){
        return;
    }
var posX= ev.clientX+ pixelX,
    posY = ev.clientY+pixelY;

    cloudel.style.transform = "translateX(" + posX + "px) translateY("+ posY + "px)";

};
document.addEventListener('mousemove', oncloud, false);
document.querySelector('.sticks ').addEventListener('mousedown', oncloudStart, false);

})();