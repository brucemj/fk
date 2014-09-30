// insert external js file:
var oHead = document.getElementsByTagName('HEAD').item(0);   
var oScript= document.createElement("script");   
oScript.type = "text/javascript";   
oScript.src="shap.js";   
oHead.appendChild( oScript);
    //This is not work : oScript.src="eventK.js";   
    //                   oHead.appendChild( oScript);

var oScript2= document.createElement("script");   
oScript2.type = "text/javascript";   
oScript2.src="shap.js";   
oScript2.src="eventK.js";   
oHead.appendChild( oScript2);

// define global var
var t;
var x=4;
var y=0;

// game launch
$(function(){
    var obj = $("td.data2-4");
    timedCount();
});

// timer
function timedCount(){
    drag(y,x,show_block,0);
    y=y+1;
    drag(y,x,show_block,1);
    if( y > 20 ){
        drag(y,x,show_block,0);
        y=0;
        drag(y,x,show_block,1);
        //clearTimeout(t);
        //return;
    }
    t = setTimeout("timedCount()", 300 );

}

