//鍵盤按下數字1~6，大家就會往前移動
var body = document.body;

function goRocket(e){
    //console.log(e.keyCode);
    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket-1').style.left = '1180px'
            break;
        case 50:
            document.querySelector('.rocket-2').style.left = '1180px'
            break;
        case 51: 
            document.querySelector('.rocket-3').style.left = '1180px'
            break;
        case 52: 
            document.querySelector('.rocket-4').style.left = '1180px'
            break;
        case 53: 
            document.querySelector('.rocket-5').style.left = '1180px'
            break;
        case 54: 
            document.querySelector('.rocket-6').style.left = '1180px'
            break;
    }
}


body.addEventListener('keydown',goRocket,false)