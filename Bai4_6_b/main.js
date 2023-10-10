function warning_name() {
  let input=document.getElementById('name')
    if(input.value===" ")
        input.style.border='1px red solid'
    else
        input.style.border='black 1px solid'
}
function warning_email() {
    let input=document.getElementById('email')
    if(input.value===" ")
        input.style.border='1px red solid'
    else
        input.style.border='black 1px solid'
}
function warning_number() {
    let input=document.getElementById('number')
    if(input.value===" ")
        input.style.border='1px red solid'
    else
        input.style.border='black 1px solid'
}
function warning_text() {
    let input=document.getElementById('text')
    if(input.value===" ")
        input.style.border='1px red solid'
    else
        input.style.border='black 1px solid'
}


document.getElementById('name').addEventListener('input',warning_name)
document.getElementById('email').addEventListener('input',warning_email)
document.getElementById('number').addEventListener('input',warning_number)
document.getElementById('text').addEventListener('input',warning_text)