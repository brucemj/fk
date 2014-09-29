$(function(){
    var obj = $("td.data2-4");
    drag( 3, 1, 1);
});

function drag( x, y, shap){
    var point = "td.data" + x + '-' + y;
    $(point).css("background-color", "#FFFFFF");
}
