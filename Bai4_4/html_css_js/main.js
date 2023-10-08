function tinhtoan(){
    let text=document.getElementById("text").value
    let text_area=document.getElementById("text_area").value
    let count=0;
    if(text===text_area){
        count++;
    }
    document.write(count)
}