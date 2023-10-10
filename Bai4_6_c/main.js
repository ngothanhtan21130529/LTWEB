
document.getElementById('submitBtn').addEventListener('click', function() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var day = document.getElementById('day').value;
    var mm = document.getElementById('mm').value;
    var YYYY = document.getElementById('YYYY').value;
    var male = document.getElementById('male').value;
    var female = document.getElementById('female').value;
    var credit = document.getElementById('credit').value;
    var paypal = document.getElementById('paypal').value;
    var card_number = document.getElementById('card_number').value;
    var card_cvc = document.getElementById('card_cvc').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var checkbox = document.getElementById('checkbox').checked;

    if (fullname === "" || email === "" || pass === "" || day === "" || mm === "" || YYYY === "" || male === "" || female === "" || card_number === "" || card_cvc === "" || month === "" || year === "" || !checkbox) {
        alert("Please fill in all the required fields and accept the terms and conditions.");
    } else {
        alert("Form submitted successfully!");
    }
});