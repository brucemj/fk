// insert external js file:
/*
var oHead = document.getElementsByTagName('HEAD').item(0);   
var oScript= document.createElement("script");   
oScript.type = "text/javascript";   
oScript.src="shap.js";   
oHead.appendChild( oScript);
    //This is not work : oScript.src="eventK.js";   
    //                   oHead.appendChild( oScript);

var oScript2= document.createElement("script");   
oScript2.type = "text/javascript";   
oScript2.src="eventK.js";   
oHead.appendChild( oScript2);
*/
// define global var
var t, preX, preY;
var x=4;
var y=-1;
var gameArg = [ 0 , 1 ] ;
// gameArg: 0=>blockType; 1=>level; 
// ...

// game launch
$(function(){
    //$("td[lock='1']").change( function(){
    //    alert("aaa");
    //});
    gameArg[0] = 0;
    timedCount();
});

// timer
function timedCount(){
    if( gameOver() ) y=-1;
    drag( y,x,show_block,0);
    y=y+1;
    preX = 0; preY = -1;
    drag(y,x,show_block,1);
    if( y >= 20 ){
        gameArg[0] = 0;   // random
        drag(y,x,show_block,0);
        drag(y,x,show_block,2);
        y=-1;
        //clearTimeout(t);
        //return;
    }
    t = setTimeout("timedCount()", 200 );

}

function gameOver(){
    for (i=0; i<12; i++){
        var top = "td.data0-" + i;
        if ( $(top).attr("lock") ){
            y=0; cleanBlock( $( "td[name='blk']" ) );
            $( "td[name='blk']" ).attr("lock", "0");
            return 0;
        }
    }
    return 0;
}

