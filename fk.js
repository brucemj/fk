var t;
var c=0;
$(function(){
    var obj = $("td.data2-4");
    timedCount();
});

function drag( x, y, shap, tag){
    var point1 = "td.data" + x + '-' + y ;
    var point2 = "td.data" + x + '-' + (y+1);
    var point3 = "td.data" + x + '-' + (y+2);
    var point4 = "td.data" + x + '-' + (y+3);
    var point = point1 + ','+ point2 + ','+ point3+ ','+ point4 ;
    if (tag){
        $(point).css("background-color", "#FFFFFF");
    }
    else{
        $(point).css("background-color", "#A7C942");
    }
}

function timedCount(){
    drag(c,3,1,0);
    c=c+1;
    drag(c,3,1,1);
    if( c > 19 ){
        drag(c,3,1,0);
        c=1;
        //clearTimeout(t);
        //return;
    }
    t = setTimeout("timedCount()", 1000 );

}
