function check_name(){

    if(document.getElementById('name').value===" "){
        document.getElementById('name').style.border=' 1px solid red'
    }
}
function check_pass(){
    if(document.getElementById('pass').value===" "){
        document.getElementById('pass').style.border=' 1px solid red'
    }
}
document.getElementById('name').addEventListener('click',check_name)
document.getElementById('pass').addEventListener('click',check_pass)