var currentrotate=0;
function setRotate(){
    currentrotate=currentrotate+15
    document.getElementById('img').style.transform='rotate('+ currentrotate +'deg)'
}
setInterval(setRotate,2000)