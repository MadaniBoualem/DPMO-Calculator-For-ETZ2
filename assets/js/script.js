function calculate() {
    let num1 = document.getElementById("number1").value.replace(/\s/g,'');
    let num2 = document.getElementById("number2").value.replace(/\s/g,'');
    let result = document.getElementById("result");
    if (isNaN(num1) || isNaN(num2) || num2==0) {
        result.innerHTML = "Entrez des nombres valides";
    } else {
        var calcul = (num1 * 1000000) / num2;
        result.innerHTML = calcul.toLocaleString();
    }
}
