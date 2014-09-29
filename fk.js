var t;
var x=4;
var y=0;
var I1_block = [ [0,0], [0,1], [0,2], [0,3] ];
var I2_block = [ [0,0], [1,0], [2,0], [3,0] ];
var show_block = I1_block;
$(function(){
    var obj = $("td.data2-4");
    timedCount();
});

function drag( a, b, shap, tag){
    var point1 = "td.data" + (a+shap[0][0]) + '-' + (b+shap[0][1]) ;
    var point2 = "td.data" + (a+shap[1][0]) + '-' + (b+shap[1][1]) ;
    var point3 = "td.data" + (a+shap[2][0]) + '-' + (b+shap[2][1]) ;
    var point4 = "td.data" + (a+shap[3][0]) + '-' + (b+shap[3][1]) ;
    var point = point1 + ','+ point2 + ','+ point3+ ','+ point4 ;
    if (tag){
        $(point).css("background-color", "#FFFFFF");
    }
    else{
        $(point).css("background-color", "#A7C942");
    }
}

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

function keyDown(event){
    switch (event.keyCode){
        case 65:    // A
            drag(y,x,show_block,0);
            x = x > 0 ? x-1 : 0;
            drag(y,x,show_block,1);
            break;
        case 68:    // D
            drag(y,x,show_block,0);
            x = x >= 8 ? 8 : x+1;
            drag(y,x,show_block,1);
            break;
        case 83:    // S
            drag(y,x,show_block,0);
            y = y+4 ;
            y = y>20 ? 20: y;
            drag(y,x,show_block,1);
            break;
        case 87:    // w
            drag(y,x,show_block,0);
            show_block = show_block == I1_block ? I2_block : I1_block ;
            drag(y,x,show_block,1);
            break;
    }
}





