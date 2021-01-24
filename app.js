var btn=document.getElementById("btn");
btn.onclick=function(){ShowCart()};
var cart = document.getElementById('shopping-cart');
var itemfour=document.getElementById('fourth');
var itemtri=document.getElementById('third');
var itemFirst=document.getElementById("first");
var itemSecond=document.getElementById("second");
var itemLast=document.getElementById("last");
var btns=document.getElementById("btns");
var arrowUp=document.getElementById("arrow-up");
var arrowDown=document.getElementById("arrow-down");

function ShowCart(){
    
    if (cart.style.display !== 'none') {
        cart.style.display = 'none';
    
        
    }
    else {
        cart.style.display = 'block';
      
    }
};

var br=0;
var down=document.getElementById("down");
down.onclick=function(){

if(br==0){
    itemFirst.style.display="none";
    itemfour.style.display="flex";
    up.style.border="1px solid rgba(188, 188, 188, 1)";
    itemFirst.style.borderTop="1px solid rgba(188, 188, 188, 1)";
    arrowUp.src="picture.png";
}
else if(br==1) {
    itemSecond.style.display="none";
    itemLast.style.display="flex";
    down.style.borderRight="none";
    down.style.borderLeft="none";
    down.style.borderBottom="none";
    btns.style.borderTop="none"   
    arrowDown.src="picture.jpg";
    arrowUp.src="picture.png";
}
br++;

}
var up=document.getElementById("up");
up.onclick=function(){
     if(br==2){ 
     itemSecond.style.display="flex";
     itemLast.style.display="none";
     down.style.border="1px solid rgba(188, 188, 188, 1)";
     btns.style.borderTop="1px solid rgba(188, 188, 188, 1)";
     arrowUp.src="picture.png";
     arrowDown.src="picture.png";                                         
     
    }

     else if(br==1){
        itemFirst.style.display="flex";
        itemfour.style.display="none";
        up.style.borderRight="none";
        up.style.borderLeft="none";
        up.style.borderBottom="none";
        itemFirst.style.borderTop="none";
        arrowUp.src="picture.jpg";                                         
        arrowDown.src="picture.png";
     }
        br--;
    }
