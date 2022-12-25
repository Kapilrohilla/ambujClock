const hrs = document.querySelector('.hours');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const color = document.getElementById('color');

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

function chColor(i){
    let hsl,gd;
    hsl = 'hsl('+ i +'deg,100%,50%)';
    gd = `linear-gradient( #000 20%, ${hsl})`;
    color.style.background= gd;
    //console.log(gd);
}
let c = 0;
function calling() {
    setInterval(chColor(c),1000);
    c++;
    if(c>360){
        c=0;
    }
}
setInterval(calling,100);
setInterval(time,1000);
