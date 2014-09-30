// shap array data
var I1_block = [ [0,0], [0,1], [0,2], [0,3] ];
var I2_block = [ [0,0], [1,0], [2,0], [3,0] ];
var show_block = I1_block;

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

