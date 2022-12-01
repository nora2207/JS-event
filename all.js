var el1 = document.querySelectorAll('.box');
var Len = el1.length;

for(var i=0;i<Len;i++){
    el1[i].addEventListener('mousemove',function(e){
        alert('你輸了！');
    },false);
}

var el2 = document.querySelectorAll('.boxx');
var Len2 = el2.length;

for(var i=0;i<Len2;i++){
    el2[i].addEventListener('mousemove',function(e){
        alert('你輸了！');
    },false);
}