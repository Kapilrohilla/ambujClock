const hrs = document.querySelector('.hours');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const color = document.querySelector('.color');

function time(){
    let h,m,s;
    let dt = new Date();
    h = dt.getHours();
    m = dt.getMinutes();
    s = dt.getSeconds();

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    if(h < 10){
        hrs.innerHTML = "0" + h;
    } else if(m < 10){
        min.innerHTML = "0" + m;
    } else if(s < 10){
        sec.innerHTML = "0" + s;
    }

}
function chColor(){
    let r,g,b,rgb,ln_gd;
    
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    rgb = 'rgb('+r+','+g+','+b+')';

    ln_gd = 'linear-gradient(to bottom,#19282c,'+rgb+')';
    color.style.background = ln_gd;
}
setInterval(chColor,1000);
setInterval(time,500);