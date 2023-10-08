function getResult() {
    const num1 = document.getElementById("first_number").valueAsNumber
    const num2 = document.getElementById("second_number").valueAsNumber
    const num3 = document.getElementById("third_number").valueAsNumber
    const delta = num2 ^ 2 + 4 * num1 * num3
    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        if (delta > 0) {
            const x1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
            const x2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
            document.getElementById("output").value=x1,x2;
        } else if (delta === 0) {
            const x = -num2 / (2 * num1);
            document.getElementById("output").value=x;
        } else {
            document.getElementById("output").value='Phương trình vô nghiệm';
        }
    }

}